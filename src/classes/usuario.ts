export default class Usuario{
    public codigo: string = "";
    public nombre: string = "";
    public status: string = "";
    
    constructor(){}

    public static crearDeUnaPeticion(objeto:any, ) : Usuario{
        let usuario:Usuario = new Usuario();
        
        usuario.codigo = objeto.codigo || "";
        usuario.nombre = objeto.nombre || "";
        usuario.status = objeto.status || "";
        return usuario;
    }

    public static convertirParaRespuesta(objeto:any, ) : Usuario{
        let usuario:Usuario = new Usuario();
        
        usuario.codigo = objeto.usua_id || "";
        usuario.nombre = objeto.usua_contrasena || "";
        usuario.status = objeto.usua_status || "";
        return usuario;
    }
}