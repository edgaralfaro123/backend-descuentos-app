import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Asistencia from '../classes/asistencia';
import Lugar from '../classes/lugar';
import Query  from '../mysql/queries/asistencias.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/asistencia/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Asistencia[] = []
        const QUERY = Query.getListarActivos();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let asistencia:Asistencia = Asistencia.convertirParaRespuesta(objeto);
                respuesta.push(asistencia)
            });
            return res.json({ok:true, asistencia:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.post('/asistencia/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body)
        const asistencia:Asistencia = Asistencia.crearDeUnaPeticion(req.body);
        let respuesta:Asistencia
        const QUERY = Query.saveAsistencia(asistencia);
        console.log(QUERY)
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
