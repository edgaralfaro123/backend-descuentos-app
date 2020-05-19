export default class Eventousuario{
    public evento: string = "";
    public usuario: string = "";
    public estado: string = "";
    public fechahora: string = ""; 
    public persona: string = "";
    public primernombre:string = "";
    public personatelefono:string = "";
    public personacorreo:string = "";
    public nombreevento: string = "";
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Eventousuario{
        let eventousuario:Eventousuario = new Eventousuario();
        
        eventousuario.evento = objeto.evento || "";
        eventousuario.usuario = objeto.usuario || "";
        eventousuario.estado = objeto.estado || "";
        eventousuario.fechahora = objeto.fechahora || "";
        eventousuario.persona = objeto.persona || "";
        eventousuario.primernombre = objeto.primernombre || "";
        eventousuario.personatelefono = objeto.personatelefono || "";
        eventousuario.personacorreo = objeto.personacorreo || "";
        eventousuario.nombreevento = objeto.nombreevento || "";
        return eventousuario;
    }

    public static convertirParaRespuesta(objeto:any, ) : Eventousuario{
        let eventousuario:Eventousuario = new Eventousuario();
        
        eventousuario.evento = objeto.evus_evento || "";
        eventousuario.usuario = objeto.evus_usuario || "";
        eventousuario.estado = objeto.evus_estado || "";
        eventousuario.fechahora = objeto.evus_fechahora || "";
        eventousuario.persona = objeto.evus_persona || "";
        eventousuario.primernombre = objeto.pers_primernombre || "";
        eventousuario.personatelefono = objeto.pers_telefono || "";
        eventousuario.personacorreo = objeto.pers_correo || "";
        eventousuario.nombreevento = objeto.even_descripcion || "";
        return eventousuario;
    }
}