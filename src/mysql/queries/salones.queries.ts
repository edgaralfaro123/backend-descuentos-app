import Salon from '../../classes/salon';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    public static getSalonesByLugar(lugar:string){
        const QUERY:string = `SELECT * FROM salones WHERE saln_lugar = ${SqlString.escape(lugar)};`;
        return QUERY;
    }
    public static getSalonesVacios(){
        const QUERY:string = `SELECT '' as sanl_id,''  AS  sanl_codigo,'' AS  sanl_lugar,
                            '' AS  sanl_capacidad,'' AS  sanl_tipo,'' AS  sanl_img 
                            FROM salones LIMIT 1;`;
        return QUERY;
    }
    public static saveSalon(salon:Salon){
        const today = new Date();
        const QUERY:string = `INSERT INTO salones ( 
                            saln_codigo, 
                            saln_nombre,
                            saln_lugar,
                            saln_capacidad, 
                            saln_tipo, 
                            saln_img
                            ) VALUES(
                            ${SqlString.escape(salon.codigo)},
                            ${SqlString.escape(salon.nombre)},
                            ${SqlString.escape(salon.lugar)},
                            ${SqlString.escape(salon.capacidad)},
                            ${SqlString.escape(salon.tipo)},
                            ${SqlString.escape(salon.imagen)});`;
        return QUERY;
    }

}