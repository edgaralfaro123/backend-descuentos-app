import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Evento from '../classes/evento';
import Lugar from '../classes/lugar';
import Query  from '../mysql/queries/eventos.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import qr from 'qr-image';

const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/eventos/obtener/:id', (req:Request, res:Response)=>{
    try{
        let evento:Evento;
        let lugar: Lugar;
        const id =  req.params.id;
        const QUERY = Query.getEvento(id);
        MySQL.ejecutarQuery(QUERY, (err:any,resultado:any[])=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            evento = Evento.convertirParaRespuesta(resultado[0]);
            lugar = Lugar.convertirParaRespuesta(resultado[0]);
            evento.infoLugar = lugar;
            return res.json({ok:true, eventos:evento});
        });
    }catch{
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/eventos/listar', (req:Request, res:Response)=>{
    try{
        let respuesta:Evento[] = []
        let lugar: Lugar;
        const QUERY = Query.getListarTodos();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let evento:Evento = Evento.convertirParaRespuesta(objeto);
                lugar = Lugar.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar;
                respuesta.push(evento)
            });
            return res.json({ok:true, eventos:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/eventos/activos', (req:Request, res:Response)=>{
    try{
        let respuesta:Evento[] = []
        let lugar: Lugar;
        const QUERY = Query.getListarActivos();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let evento:Evento = Evento.convertirParaRespuesta(objeto);
                lugar = Lugar.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar;
                respuesta.push(evento)
            });
            return res.json({ok:true, eventos:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/eventos/validadas', (req:Request, res:Response)=>{
    try{
        let respuesta:Evento[] = []
        let lugar: Lugar;
        const QUERY = Query.getListarValidos2();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let evento:Evento = Evento.convertirParaRespuesta(objeto);
                lugar = Lugar.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar;
                respuesta.push(evento)
            });
            return res.json({ok:true, eventos:respuesta});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});




router.get('/eventos/validadas2', (req:Request, res:Response)=>{
    try{
        let respuesta:Evento[] = []
        let lugar: Lugar;
        const QUERY = Query.getListarValidos();
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:Object[])=>{
            if (err)
                return res.status(400).json({ok: false,error: err});
            resultado.forEach( (objeto:any) => {
                let evento:Evento = Evento.convertirParaRespuesta(objeto);
                lugar = Lugar.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar;
                respuesta.push(evento)
            });
            return res.json(respuesta);
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.post('/eventos/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const evento:Evento = Evento.crearDeUnaPeticion(req.body);
        let respuesta:Evento
        const QUERY = Query.saveEvento(evento);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err}); 
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.put('/eventos/actualizar', (req:Request, res:Response)=>{
    try{
        const evento:Evento = Evento.crearDeUnaPeticion(req.body); 
        const QUERY = Query.updateEvento(evento);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.delete('/eventos/cerrar-evento/:id', (req:Request, res:Response) =>{
    try{
        const id =  req.params.id;
        const QUERY = Query.deleteEvento(id);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/personas/obtenerQrpersona/:id', (req:Request, res:Response) =>{
    let query = `SELECT *,8 as codevento FROM personas WHERE pers_documento = ${req.params.id}`;
    let codigoQR;
    MySQL.ejecutarQuery(query, (err:any,resultado:any[])=>{
        if (err)
            return res.status(400).json({ok: false, error: err});
        console.log(JSON.stringify(resultado));
        codigoQR = qr.imageSync(JSON.stringify({
            cedula:resultado[0].pers_documento,
            nombre:resultado[0].pers_primernombre,
            apellido:resultado[0].pers_primerapellido,
            codevento:resultado[0].codevento
        }), { type: 'svg' })
        return res.json({ok:true, qr:codigoQR, persona:{
            cedula:resultado[0].pers_documento,
            nombre:resultado[0].pers_primernombre,
            apellido:resultado[0].pers_primerapellido,
            codevento:resultado[0].codevento

        }});
    });
});


/*
    let query = `SELECT p.pers_documento AS pers_documento,p.pers_primernombre AS pers_primernombre,
                 p.pers_primerapellido AS pers_primerapellido,
                 eu.evus_evento AS  evus_evento,e.even_nombre AS even_nombre
                 FROM evento_usuario eu
                LEFT JOIN eventos e ON e.even_codigo=eu.evus_evento
                LEFT JOIN personas p ON p.pers_documento=eu.evus_usuario
                WHERE evus_evento=${req.params.evento} AND evus_usuario= ${req.params.id}`;

*/
router.get('/personas/obtenerQr/:evento&:id', (req:Request, res:Response) =>{
    let query = `SELECT p.pers_documento AS pers_documento,p.pers_primernombre AS pers_primernombre,
                 p.pers_primerapellido AS pers_primerapellido,
                eu.evus_evento AS  evus_evento,e.even_nombre AS even_nombre,e.even_gratis as even_gratis,
                cpco_documento,cpco_beneficiario,sum(c.cpco_valor) as cpco_valor, if(e.even_gratis=1 and eu.evus_estado='G','true',if(sum(c.cpco_valor and eu.evus_estado='G')>0,'true','false')) as generarqr
                FROM evento_usuario eu
                LEFT JOIN eventos e ON e.even_codigo=eu.evus_evento
                LEFT JOIN personas p ON p.pers_documento=eu.evus_usuario
                left join cuentas_por_cobrar c on c.cpco_documento=${req.params.evento} and c.cpco_beneficiario=${req.params.id}
                WHERE evus_evento=${req.params.evento} AND evus_usuario=${req.params.id}
                group by cpco_documento,cpco_beneficiario
    `;
    let codigoQR;
    MySQL.ejecutarQuery(query, (err:any,resultado:any[])=>{
        if (err)
            return res.status(400).json({ok: false, error: err});
        console.log(JSON.stringify(resultado));
        codigoQR = qr.imageSync(JSON.stringify({
            cedula:resultado[0].pers_documento,
            nombre:resultado[0].pers_primernombre,
            apellido:resultado[0].pers_primerapellido,
            codevento:resultado[0].evus_evento,
            nomevento:resultado[0].even_nombre,
            generarqr:resultado[0].generarqr
        }), { type: 'svg' })
        return res.json({ok:true, qr:codigoQR, persona:{
            cedula:resultado[0].pers_documento,
            nombre:resultado[0].pers_primernombre,
            apellido:resultado[0].pers_primerapellido,
            codevento:resultado[0].evus_evento,
            nomevento:resultado[0].even_nombre,
            generarqr:resultado[0].generarqr

        }});
    });
});

export default router; 
