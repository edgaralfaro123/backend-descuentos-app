export default class Asistencia{
    public codigo: string = "";
    public persona: string = "";
    public evento: string = "";
    public fecha: string = ""; 
    public hora: string = "";
    public status: string = "";

    public primernombre : string = "";
    public segundonombre : string = "";
    public primerapellido : string = "";
    public segundoapellido : string = "";
    public semestre : string = "";
    public descripcion : string = "";
    public nombre : string = "";
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Asistencia{
        let asistencia:Asistencia = new Asistencia();
        
        asistencia.codigo = objeto.codigo || "";
        asistencia.persona = objeto.persona || "";
        asistencia.evento = objeto.evento || "";
        asistencia.fecha = objeto.fecha || "";
        asistencia.hora = objeto.hora || "";
        asistencia.status = objeto.status || "";

        asistencia.primernombre = objeto.primernombre || "";
        asistencia.segundonombre = objeto.segundonombre || "";
        asistencia.primerapellido = objeto.primerapellido || "";
        asistencia.segundoapellido = objeto.segundoapellido || "";
        asistencia.semestre = objeto.semestre || "";
        asistencia.descripcion = objeto.descripcion || "";
        asistencia.nombre = objeto.nombre || "";
        return asistencia;
    }

    public static convertirParaRespuesta(objeto:any, ) : Asistencia{
        let asistencia:Asistencia = new Asistencia();
        
        asistencia.codigo = objeto.asis_codigo || "";
        asistencia.persona = objeto.asis_persona || "";
        asistencia.evento = objeto.asis_evento || "";
        asistencia.fecha = objeto.asis_fecha || "";
        asistencia.hora = objeto.asis_hora || "";
        asistencia.status = objeto.asis_status || "";

        asistencia.primernombre = objeto.pers_primernombre || "";
        asistencia.segundonombre = objeto.pers_segundonombre || "";
        asistencia.primerapellido = objeto.pers_primerapellido || "";
        asistencia.segundoapellido = objeto.pers_segundoapellido || "";
        asistencia.semestre = objeto.seme_semestre || "";
        asistencia.descripcion = objeto.prog_descripcion || "";
        asistencia.nombre = objeto.even_nombre || "";
        
        return asistencia;
    }
}