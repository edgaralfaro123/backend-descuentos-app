export default class Ponente{
    public id:string = "";
    public tipodocumento:string = "";
    public primernombre:string = "";
    public segundonombre:string = "";
    public primerapellido:string = "";
    public telefono:string = "";
    public direccion:string = "";
    public pais:string = "";
    public estado:string = "";
    public ciudad:string = "";
    public fechanacimiento:string = "";
    public estatus:string = "";
    public contador:string = "";
    public especialidad:string = "";

    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Ponente{
        let ponente:Ponente = new Ponente();
        
        ponente.id = objeto.id || "";
        ponente.tipodocumento = objeto.tipodocumento || "";
        ponente.primernombre = objeto.primernombre || "";
        ponente.segundonombre = objeto.segundonombre || "";
        ponente.primerapellido = objeto.primerapellido || "";
        ponente.telefono = objeto.telefono || "";
        ponente.direccion = objeto.direccion || "";
        ponente.pais = objeto.pais || "";
        ponente.estado = objeto.estado || "";
        ponente.ciudad = objeto.ciudad || "";
        ponente.fechanacimiento = objeto.fechanacimiento || "";
        ponente.estatus = objeto.estatus || "";
        ponente.contador = objeto.contador || "";
        ponente.especialidad = objeto.especialidad || "";

        return ponente;
    }

    public static convertirParaRespuesta(objeto:any, ) : Ponente{
        let ponente:Ponente = new Ponente();
        
        ponente.id = objeto.pers_documento || "";
        ponente.tipodocumento = objeto.pers_tipodocumento || "";
        ponente.primernombre = objeto.pers_primernombre || "";
        ponente.segundonombre = objeto.pers_segundonombre || "";
        ponente.primerapellido = objeto.pers_primerapellido || "";
        ponente.telefono = objeto.pers_telefono || "";
        ponente.direccion = objeto.pers_direccion || "";
        ponente.pais = objeto.pers_pais || "";
        ponente.estado = objeto.pers_estado || "";
        ponente.ciudad = objeto.pers_ciudad || "";
        ponente.fechanacimiento = objeto.pers_fechanacimiento || "";
        ponente.estatus = objeto.pers_estatus || "";
        ponente.contador = objeto.pers_contador || "";
        ponente.especialidad = objeto.pont_especialidad || "";


        return ponente;
    }
}