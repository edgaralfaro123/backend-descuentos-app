import Lugar from '../../classes/lugar';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    public static getLugar(id:string){
        const QUERY:string = `SELECT * FROM lugares WHERE lugr_id = ${SqlString.escape(id)};`;
        return QUERY;
    }

    public static getListarTodos(){
        const QUERY:string = `SELECT * FROM lugares`;
        return QUERY;
    }

    public static saveLugar(lugar:Lugar){
        const today = new Date();
        const QUERY:string = `INSERT INTO lugares ( 
                            lugr_nombre, 
                            lugr_direccion,
                            lugr_pais,
                            lugr_estado, 
                            lugr_ciudad, 
                            lugr_tipo,
                            lugr_img 
                            ) VALUES(
                            ${SqlString.escape(lugar.nombre)},
                            ${SqlString.escape(lugar.direccion)},
                            ${SqlString.escape(lugar.pais)},
                            ${SqlString.escape(lugar.estado)},
                            ${SqlString.escape(lugar.ciudad)},
                            ${SqlString.escape(lugar.tipo)},
                            ${SqlString.escape(lugar.imagen)});`;
        return QUERY;
    }

    public static updateLugar(lugar:Lugar){
        const today = new Date();
        const QUERY:string = `UPDATE lugares SET lugr_nombre = ${SqlString.escape(lugar.nombre)},
                                    lugr_direccion = ${SqlString.escape(lugar.direccion)},
                                    lugr_pais = ${SqlString.escape(lugar.pais)},
                                    lugr_estado = ${SqlString.escape(lugar.estado)},
                                    lugr_ciudad = ${SqlString.escape(lugar.ciudad)},
                                    lugr_tipo = ${SqlString.escape(lugar.tipo)},
                                    lugr_img = ${SqlString.escape(lugar.imagen)}';`;
        return QUERY;
    }

}