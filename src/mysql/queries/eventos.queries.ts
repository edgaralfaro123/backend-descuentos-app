import Evento from '../../classes/evento';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    public static getEvento(id:string){
        const QUERY:string = `SELECT e.*, l.*
                            FROM eventos e
                            LEFT JOIN lugares l
                            ON e.even_lugar = l.lugr_id
                            WHERE e.even_codigo = ${SqlString.escape(id)};`;
        return QUERY;
    }
    // Si te actualizó

    public static getListarTodos(){
        const QUERY:string = `SELECT  e.*, l.*
                            FROM eventos e
                            LEFT JOIN lugares l
                            ON e.even_lugar = l.lugr_id;`;
        return QUERY;
    }

    public static getListarActivos(){
        const QUERY:string = `SELECT  e.*, l.*
                            FROM eventos e
                            LEFT JOIN lugares l
                            ON e.even_lugar = l.lugr_id
                            WHERE even_estatus NOT IN (${7},${8})`;
        return QUERY;
    }

    public static getListarValidos(){
        const QUERY:string = `SELECT *
                             FROM eventos
                             WHERE even_fechaclausura>=CURDATE()`;
        return QUERY;
    }

    
    public static getListarValidos2(){
        const QUERY:string = `SELECT e.*, l.*
                         FROM eventos e
                         LEFT JOIN lugares l
                         ON e.even_lugar = l.lugr_id
                         WHERE e.even_fechaclausura>=CURDATE()`;
        return QUERY;
    }
    
    public static saveEvento(evento:Evento){
        const today = new Date();
        const QUERY:string = `INSERT INTO eventos (even_nombre, even_descripcion, even_fechaapertura,
                            even_fechaclausura, even_cronograma, even_horaapertura, even_horaclausura,
                            even_lugar,even_organizador, even_img, even_usuariocreacion, even_fechacreacion,
                            even_gratis,even_valor,even_estatus
                            ) VALUES(
                            ${SqlString.escape(evento.nombre)},
                            ${SqlString.escape(evento.descripcion)},
                            ${SqlString.escape(evento.fechaApertura)},
                            ${SqlString.escape(evento.fechaClausura)},
                            ${SqlString.escape(evento.cronograma)},
                            ${SqlString.escape(evento.horaApertura)},
                            ${SqlString.escape(evento.horaClausura)},
                            ${SqlString.escape(evento.lugar)},
                            ${SqlString.escape(evento.organizador)},
                            ${SqlString.escape(evento.imagen)},
                            ${SqlString.escape(evento.usuarioCreacion)},
                            '${today.toISOString().substring(0, 10)} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}',
                            ${SqlString.escape(evento.gratis)},
                            ${SqlString.escape(evento.valor)},
                            ${1});`;
        return QUERY;
    }

    public static updateEvento(evento:Evento){
        const today = new Date();
        const QUERY:string = `UPDATE eventos SET even_nombre = ${SqlString.escape(evento.nombre)},
                                    even_descripcion = ${SqlString.escape(evento.descripcion)},
                                    even_fechaapertura = ${SqlString.escape(evento.fechaApertura)},
                                    even_fechaclausura = ${SqlString.escape(evento.fechaClausura)},
                                    even_cronograma = ${SqlString.escape(evento.cronograma)},
                                    even_horaapertura = ${SqlString.escape(evento.horaApertura)},
                                    even_horaclausura = ${SqlString.escape(evento.horaClausura)},
                                    even_lugar = ${SqlString.escape(evento.lugar)},
                                    even_organizador = ${SqlString.escape(evento.organizador)},
                                    even_img = ${SqlString.escape(evento.imagen)},
                                    even_usuariomodificacion = ${SqlString.escape(evento.usuarioModificacion)},
                                    even_fechamodificacion = '${today.toISOString().substring(0, 10)} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}',
                                    even_gratis = ${SqlString.escape(evento.gratis)},
                                    even_valor = ${SqlString.escape(evento.valor)},
                                    WHERE even_codigo = '${SqlString.escape(evento.codigo)}';`;
        return QUERY;
    }

    public static deleteEvento(id:string){
        const QUERY:string = `UPDATE eventos SET even_estatus = 8 WHERE even_codigo = ${SqlString.escape(id)};`;
        return QUERY;
    }

}