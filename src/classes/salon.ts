export default class Salon{
    public id:string = "";
    public codigo:string = "";
    public nombre:string = "";
    public lugar:string = "";
    public capacidad:string = "";
    public tipo:string = "";
    public imagen:string = "";
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Salon{
        let salon:Salon = new Salon();
        
        salon.id = objeto.id || "";
        salon.codigo = objeto.codigo || "";
        salon.nombre = objeto.nombre || "";
        salon.lugar = objeto.lugar || "";
        salon.capacidad = objeto.capacidad || "";
        salon.tipo = objeto.tipo || "";
        salon.imagen = objeto.imagen || "";

        return salon;
    }

    public static convertirParaRespuesta(objeto:any, ) : Salon{
        let salon:Salon = new Salon();
        
        salon.id = objeto.saln_id || "";
        salon.codigo = objeto.saln_codigo || "";
        salon.nombre = objeto.saln_nombre || "";
        salon.lugar = objeto.saln_lugar || "";
        salon.capacidad = objeto.saln_capacidad || "";
        salon.tipo = objeto.saln_tipo || "";
        salon.imagen = objeto.saln_img || "";

        return salon;
    }
}