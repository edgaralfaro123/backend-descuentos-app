import Ponencia from '../../classes/ponencia';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    // Si te actualizó

    public static getListar(){
        const QUERY:string = `SELECT * FROM ponencias`;
        return QUERY;
    }

    public static savePonencia(ponencia:Ponencia){
        const today = new Date();
        const QUERY:string = `INSERT INTO ponencias ( ponc_salon, ponc_lugar,
            ponc_evento,ponc_ponente, ponc_descripcion, ponc_fecha,ponc_horainicio,ponc_horaclausura,ponc_tipo) VALUES(
                            ${SqlString.escape(ponencia.salon)},
                            ${SqlString.escape(ponencia.lugar)},
                            ${SqlString.escape(ponencia.evento)},
                            ${SqlString.escape(ponencia.ponente)},
                            ${SqlString.escape(ponencia.descripcion)},
                            ${SqlString.escape(ponencia.fecha)},
                            ${SqlString.escape(ponencia.horainicio)},
                            ${SqlString.escape(ponencia.horaclausura)},
                            ${SqlString.escape(ponencia.tipo)});`;
        return QUERY;
    }

    public static updatePonencia(ponencia:Ponencia){
        const today = new Date();
        const QUERY:string = `UPDATE ponencia SET ponc_ponente = ${SqlString.escape(ponencia.ponente)},
                                     ponc_descripcion = ${SqlString.escape(ponencia.descripcion)},
                                     ponc_fecha = ${SqlString.escape(ponencia.fecha)},
                                     ponc_horainicio = ${SqlString.escape(ponencia.horainicio)},
                                     ponc_horaclausura = ${SqlString.escape(ponencia.horaclausura)},
                                     ponc_tipo = ${SqlString.escape(ponencia.tipo)}';`;
        return QUERY;
    }
}