import Horario from '../../classes/horario';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    // Si te actualizó

    public static getListar(){
        const QUERY:string = `SELECT * FROM horarios`;
        return QUERY;
    }
    public static saveHorario(horario:Horario){
        const today = new Date();
        const QUERY:string = `INSERT INTO horarios ( hora_idevento, hora_fechaapertura,
                            hora_fechaclausura,hora_horaapertura, hora_horaclausura, hora_status) VALUES(
                            ${SqlString.escape(horario.idevento)},
                            ${SqlString.escape(horario.fechaapertura)},
                            ${SqlString.escape(horario.fechaclausura)},
                            ${SqlString.escape(horario.horaapertura)},
                            ${SqlString.escape(horario.horaclausura)},
                            ${SqlString.escape(horario.status)});`;
                            console.log(horario.idevento);
        return QUERY;
    }

    public static updateHorario(horario:Horario){
        const today = new Date();
        const QUERY:string = `UPDATE horarios SET hora_fechaapertura = ${SqlString.escape(horario.fechaapertura)},
        hora_fechaclausura = ${SqlString.escape(horario.fechaclausura)},
                                    even_fechaapertura = ${SqlString.escape(horario.horaapertura)},
                                    hora_horaapertura = ${SqlString.escape(horario.horaclausura)},,';`;
        return QUERY;
    }
}