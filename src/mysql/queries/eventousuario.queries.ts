import EventoUsuario from '../../classes/eventousuario';
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

    public static getPendienteAutorizar(){
        const QUERY:string = `SELECT eu.*,concat(p.pers_primernombre,' ',p.pers_primerapellido) as pers_primernombre,
                                        p.pers_telefono, p.pers_correo, e.even_descripcion
                              FROM evento_usuario eu
                              LEFT JOIN eventos AS e on eu.evus_evento=e.even_codigo
                              LEFT JOIN personas AS p ON p.pers_documento=eu.evus_usuario
                              where evus_estado='P'`;
        return QUERY;
    }
    
    public static saveEventousuario(eventousuario:EventoUsuario){
        const today = new Date();
        const QUERY:string = `INSERT INTO evento_usuario (
                            evus_evento,
                            evus_usuario,
                            evus_fechahora
                            ) VALUES (
                            ${SqlString.escape(eventousuario.evento)},
                            ${SqlString.escape(eventousuario.usuario)},
                            '${today.toISOString().substring(0, 10)} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}');`;
        return QUERY;
    }

    public static deleteEvento(evento:string,id:string){
        const QUERY:string = `UPDATE evento_usuario SET evus_estado = 'I' WHERE evus_evento = ${SqlString.escape(evento)} and evus_usuario= ${SqlString.escape(id)};`;
        return QUERY;
    }
    
    public static aceptarUsuarioEvento(evento:string,id:string){
        const QUERY:string = `UPDATE evento_usuario SET evus_estado = 'G' WHERE evus_evento = ${SqlString.escape(evento)} and evus_usuario= ${SqlString.escape(id)};`;
        return QUERY;
    }

    public static listarUsuariosAprobados(){
        const QUERY:string = `SELECT eu.*,concat(p.pers_primernombre,' ',p.pers_primerapellido) as pers_primernombre,
                                        p.pers_telefono, p.pers_correo, e.even_descripcion
                              FROM evento_usuario eu
                              LEFT JOIN eventos AS e on eu.evus_evento=e.even_codigo
                              LEFT JOIN personas AS p ON p.pers_documento=eu.evus_usuario
                              where evus_estado='G'`;
        return QUERY;
    }
}