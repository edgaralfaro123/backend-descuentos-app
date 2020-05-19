import Evento from '../../classes/cuentasporcobrar';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};

    public static getListarExtractoClienteAll(){
        const QUERY:string = `SELECT * FROM cuentas_por_cobrar
        WHERE cpco_status='G'
        ORDER BY cpco_docanexo,cpco_cuotaanexo,cpco_fecha;`;
        return QUERY;
    }

    public static getListarExtractoCliente(beneficiario:string){
        const QUERY:string = `SELECT * FROM cuentas_por_cobrar
        WHERE cpco_status='G' and cpco_beneficiario= ${SqlString.escape(beneficiario)}
        ORDER BY cpco_docanexo,cpco_cuotaanexo,cpco_fecha;`;
        return QUERY;
    }

    public static getListarSaldoCliente(){
        const QUERY:string = `SELECT
        pers_documento,concat(pers_primernombre,' ',pers_segundonombre,' ',pers_primerapellido,' ',pers_segundoapellido) as nombre_completo,
        (suma - resta) AS saldo FROM (
        SELECT pers_documento,pers_primernombre,pers_segundonombre,pers_primerapellido,pers_segundoapellido,
            sum(if(cpco_naturalezadoc='S',cpco_valor,0)) AS suma,
            sum(if(cpco_naturalezadoc='R',cpco_valor,0)) AS resta
        FROM cuentas_por_cobrar c
        LEFT JOIN personas p ON p.pers_documento=c.cpco_beneficiario
        GROUP BY cpco_beneficiario) AS rs;`;
        return QUERY;
    }
   

}