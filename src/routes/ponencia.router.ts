import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Evento from '../classes/evento';
import Ponencia from '../classes/ponencia';
import Query  from '../mysql/queries/ponencia.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.get('/ponencia/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Ponencia[] = []
        const QUERY = Query.getListar();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let ponencia:Ponencia = Ponencia.convertirParaRespuesta(objeto);
                respuesta.push(ponencia)
            });
            return res.json({ok:true, ponencia:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.post('/ponencia/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const ponencia:Ponencia = Ponencia.crearDeUnaPeticion(req.body);
        let respuesta:Ponencia
        const QUERY = Query.savePonencia(ponencia);
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


export default router; 
