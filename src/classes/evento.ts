import Lugar from './lugar';

export default class Evento{
    public codigo: string = "";
    public nombre: string = "";
    public descripcion: string = "";
    public lugar: string = ""; 
    public fechaApertura: string = "";
    public fechaClausura: string = "";
    public cronograma: string = "";
    public horaApertura: string = "";
    public horaClausura: string = "";
    public organizador: string = ""; 
    public imagen: string = ""; 
    public usuarioCreacion: string = "";
    public usuarioModificacion: string = "";
    public fechaCreacion: string = "";
    public fechaModificacion: string = "";
    public gratis: string = ""
    public valor: string = ""
    public estatus: string = ""
    public infoLugar: Lugar = new Lugar();
    
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Evento{
        let evento:Evento = new Evento();
        
        evento.codigo = objeto.codigo || "";
        evento.nombre = objeto.nombre || "";
        evento.descripcion = objeto.descripcion || "";
        evento.lugar = objeto.lugar || "";
        evento.fechaApertura = objeto.fechaApertura || "";
        evento.fechaClausura = objeto.fechaClausura || "";
        evento.cronograma = objeto.cronograma || "";
        evento.horaApertura = objeto.horaApertura || "";
        evento.horaClausura = objeto.horaClausura || "";
        evento.organizador = objeto.organizador || null;
        evento.imagen = objeto.imagen || "";
        evento.usuarioCreacion = objeto.usuarioCreacion || "";
        evento.usuarioModificacion = objeto.usuarioModificacion || "";
        evento.fechaCreacion = objeto.fechaCreacion || "";
        evento.fechaModificacion = objeto.fechaModificacion || "";
        evento.gratis = objeto.gratis || "";
        evento.valor = objeto.valor || "";
        evento.estatus = objeto.estatus || "";

        return evento;
    }

    public static convertirParaRespuesta(objeto:any, ) : Evento{
        let evento:Evento = new Evento();
        
        evento.codigo = objeto.even_codigo || "";
        evento.nombre = objeto.even_nombre || "";
        evento.descripcion = objeto.even_descripcion || "";
        evento.fechaApertura = objeto.even_fechaapertura || "";
        evento.fechaClausura = objeto.even_fechaclausura || "";
        evento.lugar = objeto.even_lugar || "";
        evento.cronograma = objeto.even_cronograma || "";
        evento.horaApertura = objeto.even_horaapertura || "";
        evento.horaClausura = objeto.even_horaclausura || "";
        evento.organizador = objeto.even_organizador || null;
        evento.imagen = objeto.even_img || "";
        evento.usuarioCreacion = objeto.even_usuariocreacion || "";
        evento.usuarioModificacion = objeto.even_usuariomodificacion || "";
        evento.fechaCreacion = objeto.even_fechacreacion || "";
        evento.fechaModificacion = objeto.even_fechamodificacion || ""
        evento.gratis = objeto.even_gratis.toString() || ""
        evento.valor = objeto.even_valor.toString() || ""
        evento.estatus = objeto.even_estatus || "";

        return evento;
    }
}