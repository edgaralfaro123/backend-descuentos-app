import ponente from '../../classes/ponente';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};


    public static getListarPonentes(){
        const QUERY:string = `SELECT per.*,p.pont_especialidad
                             FROM personas per
                             LEFT JOIN ponentes p ON p.pont_persona=per.pers_documento
                             WHERE p.pont_persona=per.pers_documento ;`;
        return QUERY;
    }

   

}