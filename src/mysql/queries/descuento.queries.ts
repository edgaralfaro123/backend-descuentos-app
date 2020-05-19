import Descuento from '../../classes/descuento';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};


    public static getListarArticulos(){
        const QUERY:string = `select *
                                from conidescuento as d
                                where d.desc_descripcion like '%celu%'`;
        return QUERY;
    }
}