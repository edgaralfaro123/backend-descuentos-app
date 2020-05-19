"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ponencia = /** @class */ (function () {
    function Ponencia() {
        this.id = "";
        this.salon = "";
        this.lugar = "";
        this.evento = "";
        this.ponente = "";
        this.descripcion = "";
        this.fecha = "";
        this.horainicio = "";
        this.horaclausura = "";
        this.tipo = "";
    }
    Ponencia.crearDeUnaPeticion = function (objeto) {
        var ponencia = new Ponencia();
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
    };
    Ponencia.convertirParaRespuesta = function (objeto) {
        var ponencia = new Ponencia();
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
    };
    return Ponencia;
}());
exports.default = Ponencia;
