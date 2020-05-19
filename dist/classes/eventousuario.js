"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eventousuario = /** @class */ (function () {
    function Eventousuario() {
        this.evento = "";
        this.usuario = "";
        this.estado = "";
        this.fechahora = "";
        this.persona = "";
        this.primernombre = "";
        this.personatelefono = "";
        this.personacorreo = "";
        this.nombreevento = "";
    }
    Eventousuario.crearDeUnaPeticion = function (objeto) {
        var eventousuario = new Eventousuario();
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
    };
    Eventousuario.convertirParaRespuesta = function (objeto) {
        var eventousuario = new Eventousuario();
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
    };
    return Eventousuario;
}());
exports.default = Eventousuario;
