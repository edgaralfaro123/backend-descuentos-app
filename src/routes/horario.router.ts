import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Horario from '../classes/horario';
import Lugar from '../classes/lugar';
import Query  from '../mysql/queries/horario.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/horario/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Horario[] = []
        const QUERY = Query.getListar();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let horario:Horario = Horario.convertirParaRespuesta(objeto);
                respuesta.push(horario)
            });
            return res.json({ok:true, horario:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.post('/horario/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body)
        const horario:Horario = Horario.crearDeUnaPeticion(req.body);
        let respuesta:Horario
        const QUERY = Query.saveHorario(horario);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err}); 
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.put('/horario/actualizar', (req:Request, res:Response)=>{
    try{
        const horario:Horario = Horario.crearDeUnaPeticion(req.body); 
        const QUERY = Query.updateHorario(horario);
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
