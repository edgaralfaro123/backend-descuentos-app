import Articulo from '../../classes/articulo';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};


    public static getListarActivos(){
        const QUERY:string = `select arti_codigo,arti_descripcion,arti_img,arti_categoria
                              from articulo
                              where arti_estado not in ('I','i')`;
        return QUERY;
    }

    public static saveAsistencia(artculo:Articulo){
        const usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
        const newusetime = new Date(usaTime);
        console.log('USA time: '+usaTime.toLocaleString())
        
        const today = new Date();
        //const n = today.toLocaleDateString();
        const QUERY:string = `INSERT INTO articuo
                             (arti_codigo,arti_descripcion,arti_img,arti_categoria) VALUES (
                             ${SqlString.escape(artculo.codigo)},
                             ${SqlString.escape(artculo.descripcion)},
                             ${SqlString.escape(artculo.img)},
                             ${SqlString.escape(artculo.categoria)},
                             'A'
                             );`;
                                          
                            
        return QUERY;
    }
}