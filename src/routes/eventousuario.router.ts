import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Eventousuario from '../classes/eventousuario';
import Query  from '../mysql/queries/eventousuario.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';


const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/eventousuario/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const eventousuario:Eventousuario = Eventousuario.crearDeUnaPeticion(req.body);
        let respuesta:Eventousuario
        const QUERY = Query.saveEventousuario(eventousuario);
        console.log(QUERY);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err}); 
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/eventousuario/agregarusuarioevento/:evento/:id', (req:Request, res:Response) =>{
    try{
        const id =  req.params.id;
        const evento =  req.params.evento;
        const QUERY = Query.aceptarUsuarioEvento(evento,id);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/eventousuario/listarAprobados/', (req:Request, res:Response) =>{
    try{
        const QUERY = Query.listarUsuariosAprobados();
        let respuesta:Eventousuario[] = []
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            resultado.forEach( (objeto:any) => {
                let eventousuario:Eventousuario = Eventousuario.convertirParaRespuesta(objeto);
                respuesta.push(eventousuario)
            });
            return res.json({ok:true, estado:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/eventousuario/pendientes', (req:Request, res:Response)=>{
    try{
        let respuesta:Eventousuario[] = []
        const QUERY = Query.getPendienteAutorizar();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let eventousuario:Eventousuario = Eventousuario.convertirParaRespuesta(objeto);
                respuesta.push(eventousuario)
            });
            return res.json({ok:true, eventousuario:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

//guardar
export default router; 
