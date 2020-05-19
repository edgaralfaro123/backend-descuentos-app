import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Query  from '../mysql/queries/persona.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';
import Persona from '../classes/persona';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/personas/buscar/:id', (req:Request, res:Response)=>{
    try{
        let respuesta:Persona;
        const id =  req.params.id;
        const QUERY = Query.getPersona(id);
        MySQL.ejecutarQuery(QUERY, (err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            respuesta = Persona.convertirParaRespuesta(resultado[0]);
            return res.json({ok:true, personas:respuesta});
        });
    }catch{
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/persona/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Persona[] = []
        const QUERY = Query.getListarPersonas();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let persona:Persona = Persona.convertirParaRespuesta(objeto);
                respuesta.push(persona)
            });
            return res.json({ok:true, persona:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/persona/buscar/:id&:clave', (req:Request, res:Response)=>{
    try{
        let respuesta:Persona;
        const id =  req.params.id;
        const clave =  req.params.clave;
        const QUERY = Query.getUsuario(id,clave);
        MySQL.ejecutarQuery(QUERY, (err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            respuesta = Persona.convertirParaRespuesta(resultado[0]);
            return res.json({ok:true, usuario:respuesta,token:true});
        });
    }catch{
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR',token:false});
    }
});
router.get('/personas/listar/organizadores', (req:Request, res:Response)=>{
    try{
        let respuesta:Persona[] = []
        const QUERY = Query.getListarOganizador();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let persona:Persona = Persona.convertirParaRespuesta(objeto);
                respuesta.push(persona)
            });
            return res.json({ok:true, persona:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.post('/personas/guardar', (req:Request, res:Response)=>{
    try{
        const persona:Persona = Persona.crearDeUnaPeticion(req.body);
        let respuesta:Persona
        const QUERY = Query.savePersona(persona);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err}); 
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

export default router; 