export default class Descuentos{
    public codigo:string = "";
    public descripcion:string = "";
    public descuento:string = "";
    public precio:string = "";
    public precioanterior:string = "";
    public empresa:string = "";
    public urlimagen:string = "";
 


    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Descuentos{
        let descuentos:Descuentos = new Descuentos(); 
        descuentos.codigo = objeto.codigo || "";
        descuentos.descripcion = objeto.descripcion || "";
        descuentos.descuento = objeto.descuento || "";
        descuentos.precio = objeto.precio || "";
        descuentos.precioanterior = objeto.precioanterior || "";
        descuentos.empresa = objeto.empresa || "";
        descuentos.urlimagen = objeto.urlimagen || "";
        return descuentos;
    }

    public static convertirParaRespuesta(objeto:any, ) : Descuentos{
        let descuentos:Descuentos = new Descuentos();
        
        descuentos.codigo = objeto.desc_codigo || "";
        descuentos.descripcion = objeto.desc_descripcion || "";
        descuentos.descuento = objeto.desc_descuento || "";
        descuentos.precio = objeto.desc_precio || "";
        descuentos.precioanterior = objeto.desc_precioanterior || "";
        descuentos.empresa = objeto.desc_empresa || "";
        descuentos.urlimagen = objeto.desc_urlimagen || "";
        return descuentos;
    }
}