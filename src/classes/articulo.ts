export default class Articulo{
    public codigo: string = "";
    public descripcion: string = "";
    public img: string = "";
    public categoria: string = ""; 
    public estado: string = "";


    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Articulo{
        let articulo:Articulo = new Articulo();
        
        articulo.codigo = objeto.codigo || "";
        articulo.descripcion = objeto.descripcion || "";
        articulo.img = objeto.img || "";
        articulo.categoria = objeto.categoria || "";
        articulo.estado = objeto.estado || "";
        return articulo;
    }

    public static convertirParaRespuesta(objeto:any, ) : Articulo{
        let articulo:Articulo = new Articulo();
        
        articulo.codigo = objeto.arti_codigo || "";
        articulo.descripcion = objeto.arti_descripcion || "";
        articulo.img = objeto.arti_img || "";
        articulo.categoria = objeto.arti_categoria || "";
        articulo.estado = objeto.arti_estado || "";        
        return articulo;
    }
}