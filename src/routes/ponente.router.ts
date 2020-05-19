import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Query  from '../mysql/queries/ponente.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';
import Ponente from '../classes/ponente';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/ponentes/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Ponente[] = []
        const QUERY = Query.getListarPonentes();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let ponente:Ponente = Ponente.convertirParaRespuesta(objeto);
                respuesta.push(ponente)
            });
            return res.json({ok:true, ponente:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});




export default router; 
