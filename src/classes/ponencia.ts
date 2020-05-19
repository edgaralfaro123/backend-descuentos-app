export default class Ponencia{
    public id:string = "";
    public salon:string = "";
    public lugar:string = "";
    public evento:string = "";
    public ponente:string = "";
    public descripcion:string = "";
    public fecha:string = "";
    public horainicio:string = "";
    public horaclausura:string = "";
    public tipo:string = "";

    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Ponencia{
        let ponencia:Ponencia = new Ponencia();
        
        ponencia.id = objeto.id || "";
        ponencia.salon = objeto.salon || "";
        ponencia.lugar = objeto.lugar || "";
        ponencia.evento = objeto.evento || "";
        ponencia.ponente = objeto.ponente || "";
        ponencia.descripcion = objeto.descripcion || "";
        ponencia.fecha = objeto.fecha || "";
        ponencia.horainicio = objeto.horainicio || "";
        ponencia.horaclausura = objeto.horaclausura || "";
        ponencia.tipo = objeto.tipo || "";
        return ponencia;
    }

    public static convertirParaRespuesta(objeto:any, ) : Ponencia{
        let ponencia:Ponencia = new Ponencia();
        
        ponencia.id = objeto.ponc_id || "";
        ponencia.salon = objeto.ponc_salon || "";
        ponencia.lugar = objeto.ponc_lugar || "";
        ponencia.evento = objeto.ponc_evento || "";
        ponencia.ponente = objeto.ponc_ponente || "";
        ponencia.descripcion = objeto.ponc_descripcion || "";
        ponencia.fecha = objeto.ponc_fecha || "";
        ponencia.horainicio = objeto.ponc_horainicio || "";
        ponencia.horaclausura = objeto.ponc_horaclausura || "";
        ponencia.tipo = objeto.ponc_tipo || "";
       
        return ponencia;
    }
}