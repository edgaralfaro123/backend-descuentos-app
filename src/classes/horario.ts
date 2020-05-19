export default class Evento{
    public codigo: string = "";
    public idevento: string = "";
    public fechaapertura: string = "";
    public fechaclausura: string = ""; 
    public horaapertura: string = "";
    public horaclausura: string = "";
    public status: string = "";    
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Evento{
        let evento:Evento = new Evento();
        
        evento.codigo = objeto.codigo || "";
        evento.idevento = objeto.idevento || "";
        evento.fechaapertura = objeto.fechaapertura || "";
        evento.fechaclausura = objeto.fechaclausura || "";
        evento.horaapertura = objeto.horaapertura || "";
        evento.horaclausura = objeto.horaclausura || "";
        evento.status = objeto.status || "";
        return evento;
    }

    public static convertirParaRespuesta(objeto:any, ) : Evento{
        let evento:Evento = new Evento();
        
        evento.codigo = objeto.hora_id || "";
        evento.idevento = objeto.hora_idevento || "";
        evento.fechaapertura = objeto.hora_fechaapertura || "";
        evento.fechaclausura = objeto.hora_fechaclausura || "";
        evento.horaapertura = objeto.hora_horaapertura || "";
        evento.horaclausura = objeto.hora_horaclausura || "";
        evento.status = objeto.hora_status || "";
        return evento;
    }
}