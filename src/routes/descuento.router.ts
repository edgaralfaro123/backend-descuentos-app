import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Descuento from '../classes/descuento';
import Query  from '../mysql/queries/descuento.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/descuento/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Descuento[] = []
        const QUERY = Query.getListarArticulos();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let descuento:Descuento = Descuento.convertirParaRespuesta(objeto);
                respuesta.push(descuento)
            });
            return res.json(respuesta);
            //return res.json({ok:true, articulo:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

export default router; 
