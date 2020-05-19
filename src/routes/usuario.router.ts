import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Query  from '../mysql/queries/usuario.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import Usuario from '../classes/usuario';


const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/usuario/buscar/:id&:clave', (req:Request, res:Response)=>{
    try{
        let respuesta:Usuario;
        const id =  req.params.id;
        const clave =  req.params.clave;
        const QUERY = Query.getUsuario(id,clave);
        MySQL.ejecutarQuery(QUERY, (err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            respuesta = Usuario.convertirParaRespuesta(resultado[0]);
            return res.json({ok:true, usuario:respuesta});
        });
    }catch{
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});
export default router; 
