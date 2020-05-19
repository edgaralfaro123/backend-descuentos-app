import Evento from '../../classes/persona';
import SqlString from 'sqlstring';
import Persona from '../../classes/persona';

export default class Query{

    constructor(){};

    public static getPersona(id:string){
        const QUERY:string = `SELECT * FROM personas WHERE pers_documento =  ${SqlString.escape(id)};`;
        return QUERY;
    }

    public static getListarPersonas(){
        const QUERY:string = `SELECT * FROM personas;`;
        return QUERY;
    }

    public static getListarOganizador(){
        const QUERY:string = `SELECT prs.* FROM organizadores org 
                            LEFT JOIN personas prs on org.orgn_documento = prs.pers_documento;`;
        return QUERY;
    }

    public static getUsuario(id:string,clave:string){
        const QUERY:string = `SELECT * FROM personas
        WHERE pers_documento=${SqlString.escape(id)} AND pers_clave= ${SqlString.escape(clave)};`;
        return QUERY;
    }

    public static savePersona(persona:Persona){
        const today = new Date();
        const QUERY:string = `INSERT INTO personas (
                            pers_documento,
                            pers_tipodocumento,
                            pers_primernombre,
                            pers_segundonombre, 
                            pers_primerapellido, 
                            pers_segundoapellido,
                            pers_telefono,
                            pers_direccion,
                            pers_clave,
                            pers_correo
                            ) VALUES(
                            ${SqlString.escape(persona.id)},
                            ${SqlString.escape(persona.tipodocumento)},
                            ${SqlString.escape(persona.primernombre)},
                            ${SqlString.escape(persona.segundonombre)},
                            ${SqlString.escape(persona.primerapellido)},
                            ${SqlString.escape(persona.segundoapellido)},
                            ${SqlString.escape(persona.telefono)},
                            ${SqlString.escape(persona.direccion)},
                            ${SqlString.escape(persona.clave)},
                            ${SqlString.escape(persona.correo)});`;
        return QUERY;
    }

}