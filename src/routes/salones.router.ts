import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Query  from '../mysql/queries/salones.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import Salon from '../classes/salon';


const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/salones/listar/:lugar', (req:Request, res:Response)=>{
    try{
        const lugar =  req.params.lugar;
        let respuesta:Salon[] = []
        const QUERY = Query.getSalonesByLugar(lugar);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let salon:Salon = Salon.convertirParaRespuesta(objeto);
                respuesta.push(salon);
            });
            return res.json({ok:true, salones:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.post('/salones/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const salon:Salon = Salon.crearDeUnaPeticion(req.body);
        let respuesta:Salon
        const QUERY = Query.saveSalon(salon);
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
