import Salon from './salon';
export default class Lugar{
    public id:string = "";
    public nombre:string = "";
    public direccion:string = "";
    public pais:string = "";
    public estado:string = "";
    public ciudad:string = "";
    public tipo:string = "";
    public imagen:string = "";
    public infoSalones: Salon[] = [];
    
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Lugar{
        let lugar:Lugar = new Lugar();
        
        lugar.id = objeto.id || "";
        lugar.nombre = objeto.nombre || "";
        lugar.direccion = objeto.direccion || "";
        lugar.pais = objeto.pais || "";
        lugar.estado = objeto.estado || "";
        lugar.ciudad = objeto.ciudad || "";
        lugar.tipo = objeto.tipo || "";
        lugar.imagen = objeto.imagen || "";

        return lugar;
    }

    public static convertirParaRespuesta(objeto:any, ) : Lugar{
        let lugar:Lugar = new Lugar();
        
        lugar.id = objeto.lugr_id || "";
        lugar.nombre = objeto.lugr_nombre || "";
        lugar.direccion = objeto.lugr_direccion || "";
        lugar.pais = objeto.lugr_pais || "";
        lugar.estado = objeto.lugr_estado || "";
        lugar.ciudad = objeto.lugr_ciudad || "";
        lugar.tipo = objeto.lugr_tipo || "";
        lugar.imagen = objeto.lugr_img || "";

        return lugar;
    }
}