import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Query  from '../mysql/queries/cuentasporcobrar.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';
import Cuentasporcobrar from '../classes/cuentasporcobrar';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/cuentasporcobrar/extractoa/:beneficiario', (req:Request, res:Response)=>{
    try{
        let respuesta:Cuentasporcobrar;
        const beneficiario =  req.params.beneficiario;
        const QUERY = Query.getListarExtractoCliente(beneficiario);
        MySQL.ejecutarQuery(QUERY, (err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            respuesta = Cuentasporcobrar.convertirParaRespuesta(resultado[0]);
            return res.json({ok:true, cuentasporcobrar:respuesta});
        });
    }catch{
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/cuentasporcobrar/saldo', (req:Request, res:Response)=>{
    try{
        let respuesta:Cuentasporcobrar[] = []
        const QUERY = Query.getListarSaldoCliente();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let cuentasporcobrar:Cuentasporcobrar = Cuentasporcobrar.convertirParaRespuesta(objeto);
                respuesta.push(cuentasporcobrar)
            });
            return res.json({ok:true, cuentasporcobrar:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/cuentasporcobrar/extractoall', (req:Request, res:Response)=>{
    try{
        let respuesta:Cuentasporcobrar[] = []
        const QUERY = Query.getListarExtractoClienteAll();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let cuentasporcobrar:Cuentasporcobrar = Cuentasporcobrar.convertirParaRespuesta(objeto);
                respuesta.push(cuentasporcobrar)
            });
            return res.json({ok:true, cuentasporcobrar:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

export default router; 
