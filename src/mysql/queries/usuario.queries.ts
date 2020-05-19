import Usuario from '../../classes/usuario';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    public static getUsuario(id:string,clave:string){
        const QUERY:string = `SELECT usua_id,usua_contrasena FROM usuario
        WHERE usua_id=${SqlString.escape(id)} AND usua_contrasena= ${SqlString.escape(clave)};`;
        return QUERY;
    }

    public static saveUsuario(usuario:Usuario){
        const today = new Date();
        const QUERY:string = `INSERT INTO solucion_eventos_cua.usuario (
                            usua_id, 
                            usua_contrasena, 
                            usua_status
                            ) VALUES(
                            ${SqlString.escape(usuario.codigo)},
                            ${SqlString.escape(usuario.nombre)},
                            ${SqlString.escape(usuario.status)});`;
        return QUERY;
    }

}