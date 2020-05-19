"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.codigo = "";
        this.nombre = "";
        this.status = "";
    }
    Usuario.crearDeUnaPeticion = function (objeto) {
        var usuario = new Usuario();
        usuario.codigo = objeto.codigo || "";
        usuario.nombre = objeto.nombre || "";
        usuario.status = objeto.status || "";
        return usuario;
    };
    Usuario.convertirParaRespuesta = function (objeto) {
        var usuario = new Usuario();
        usuario.codigo = objeto.usua_id || "";
        usuario.nombre = objeto.usua_contrasena || "";
        usuario.status = objeto.usua_status || "";
        return usuario;
    };
    return Usuario;
}());
exports.default = Usuario;
