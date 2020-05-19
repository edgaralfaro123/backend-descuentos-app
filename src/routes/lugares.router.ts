import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
import Server from '../server/server';
import Lugar from '../classes/lugar';
import Salon from '../classes/salon';
import LugarQuery  from '../mysql/queries/lugares.queries';
import SalonQuery  from '../mysql/queries/salones.queries';
import Query  from '../mysql/queries/lugares.queries';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';


const options:cors.CorsOptions = Server.getCorsOptions();

const router = Router();
router.use(cors(options));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/lugares/listar', (req:Request, res:Response)=>{
    try{
        let getLugares = () => { return new Promise( ( resolve, reject ) => {
            let lugares:Lugar[] = []
            const QUERY = LugarQuery.getListarTodos();
            MySQL.ejecutarQuery(QUERY,( err:any,resultado:Object[] )=>{
                if (err)
                    return reject( err );
                resultado.forEach( (object:any ) =>{
                    let lugar: Lugar = Lugar.convertirParaRespuesta(object);
                    lugares.push(lugar);
                });
                resolve(lugares);
            });
        })};

        let getSalones = ( lugares:any ) => { return new Promise( ( resolve, reject) => {
            let indexSalon = 0;
            lugares.forEach( (objectLugar: any, index: number) => {
                let QUERY = SalonQuery.getSalonesByLugar(objectLugar.id);
                MySQL.ejecutarQuery(QUERY,( err:any,resultado:Object[] )=>{
                    if (err){
                        let QUERY = SalonQuery.getSalonesVacios();
                        MySQL.ejecutarQuery(QUERY,( err:any,resultado:Object[] )=>{
                                if (resultado !== undefined && resultado.length > 0){
                                    resultado.forEach( (objectSalon:any, index2 ) =>{
                                        let salon: Salon = Salon.convertirParaRespuesta(objectSalon);
                                        lugares[0].infoSalones.push(salon);
                                        indexSalon = index2;
                                    });
                                }
                            if (indexSalon == (resultado.length -1))
                                resolve(lugares);
                        });
                    }else{
                        if (resultado !== undefined && resultado.length > 0){
                            resultado.forEach( (objectSalon:any, index2 ) =>{
                                let salon: Salon = Salon.convertirParaRespuesta(objectSalon);
                                lugares[index].infoSalones.push(salon);
                                indexSalon = index2;
                            });
                        }
                        if (index == (lugares.length -1) && indexSalon == (resultado.length -1))
                            resolve(lugares);
                    }});
                    
            });
        });}
    
        getLugares()
        .then( ( lugares ) => {
            getSalones( lugares )
            .then( (respuesta: any) => {res.json({ok:true, lugares:respuesta})} )
            .catch( ( err ) =>  res.status(400).json({ok: false,error: err}) );
        }) 
        .catch( ( err ) =>  res.status(400).json({ok: false,error: err}) );
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

router.get('/lugares/obtener/:id', (req:Request, res:Response)=>{
    try{
        let getLugares = () => { return new Promise( ( resolve, reject ) => {
            let lugares:Lugar[] = []
            const id =  req.params.id;
            const QUERY = LugarQuery.getLugar(id);
            MySQL.ejecutarQuery(QUERY,( err:any,resultado:Object[] )=>{
                if (err)
                    return reject( err );
                resultado.forEach( (object:any ) =>{
                    let lugar: Lugar = Lugar.convertirParaRespuesta(object);
                    lugares.push(lugar);
                });
                resolve(lugares);
            });
        })};

        let getSalones = ( lugares:any ) => { return new Promise( ( resolve, reject) => {
            let indexSalon = 0;
            const id =  req.params.id;
            //lugares.forEach( (objectLugar: any, index: number) => {
                let QUERY = SalonQuery.getSalonesByLugar(id);
                MySQL.ejecutarQuery(QUERY,( err:any,resultado:Object[] )=>{
                    if (err){
                        let QUERY = SalonQuery.getSalonesVacios();
                        MySQL.ejecutarQuery(QUERY,( err:any,resultado:Object[] )=>{
                                if (resultado !== undefined && resultado.length > 0){
                                    resultado.forEach( (objectSalon:any, index2 ) =>{
                                        let salon: Salon = Salon.convertirParaRespuesta(objectSalon);
                                        lugares[0].infoSalones.push(salon);
                                        indexSalon = index2;
                                    });
                                }
                            if (indexSalon == (resultado.length -1))
                                resolve(lugares);
                        });
                     }else{
                        if (resultado !== undefined && resultado.length > 0){
                            resultado.forEach( (objectSalon:any, index2 ) =>{
                                let salon: Salon = Salon.convertirParaRespuesta(objectSalon);
                                lugares[0].infoSalones.push(salon);
                                indexSalon = index2;
                            });
                        }
                    if (indexSalon == (resultado.length -1))
                        resolve(lugares);
                }});
            //});
        });}
   
        getLugares()
        .then( ( lugares ) => {
            getSalones( lugares )
            .then( (respuesta: any) => {res.json({ok:true, lugares:respuesta})} )
            .catch( ( err ) =>  res.status(400).json({ok: false,error: err}) );
        })
        .catch( ( err ) =>  res.status(400).json({ok: false,error: err}) );
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});

/*router.post('/lugares/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const lugar:Lugar = Lugar.crearDeUnaPeticion(req.body);
        let respuesta:Lugar
        const QUERY = Query.saveLugar(lugar);
        console.log(QUERY);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err}); 
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});*/

router.post('/lugares/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const lugar:Lugar = Lugar.crearDeUnaPeticion(req.body);
        let respuesta:Lugar
        const QUERY = Query.saveLugar(lugar);
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

//guardar
export default router; 
