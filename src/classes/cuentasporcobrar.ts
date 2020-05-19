export default class Cuentasporpagar{
    public documento:string = "";
    public concepto:string = "";
    public descripcion:string = "";
    public naturalezadoc:string = "";
    public beneficiario:string = "";
    public valor:string = "";
    public fecha:string = "";
    public status:string = "";

    public nombrecompleto:string = "";
    public saldo:string = "";


    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Cuentasporpagar{
        let cuentasporpagar:Cuentasporpagar = new Cuentasporpagar();
        
        cuentasporpagar.documento = objeto.documento || "";
        cuentasporpagar.concepto = objeto.concepto || "";
        cuentasporpagar.descripcion = objeto.descripcion || "";
        cuentasporpagar.naturalezadoc = objeto.naturalezadoc || "";
        cuentasporpagar.beneficiario = objeto.beneficiario || "";
        cuentasporpagar.valor = objeto.valor || "";
        cuentasporpagar.status = objeto.status || "";
        cuentasporpagar.nombrecompleto = objeto.nombrecompleto || "";
        cuentasporpagar.saldo = objeto.saldo || "";
   

        return cuentasporpagar;
    }

    public static convertirParaRespuesta(objeto:any, ) : Cuentasporpagar{
        let cuentasporpagar:Cuentasporpagar = new Cuentasporpagar();
        
        cuentasporpagar.documento = objeto.cpco_documento || "";
        cuentasporpagar.concepto = objeto.cpco_concepto || "";
        cuentasporpagar.descripcion = objeto.cpco_descripcion || "";
        cuentasporpagar.naturalezadoc = objeto.cpco_naturalezadoc || "";
        cuentasporpagar.valor = objeto.cpco_valor || "";
        cuentasporpagar.fecha = objeto.cpco_fecha || "";
        cuentasporpagar.status = objeto.cpco_status || "";
        cuentasporpagar.nombrecompleto = objeto.nombre_completo || "";
        cuentasporpagar.saldo = objeto.saldo || "";


        return cuentasporpagar;
    }
}