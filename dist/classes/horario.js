"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evento = /** @class */ (function () {
    function Evento() {
        this.codigo = "";
        this.idevento = "";
        this.fechaapertura = "";
        this.fechaclausura = "";
        this.horaapertura = "";
        this.horaclausura = "";
        this.status = "";
    }
    Evento.crearDeUnaPeticion = function (objeto) {
        var evento = new Evento();
        evento.codigo = objeto.codigo || "";
        evento.idevento = objeto.idevento || "";
        evento.fechaapertura = objeto.fechaapertura || "";
        evento.fechaclausura = objeto.fechaclausura || "";
        evento.horaapertura = objeto.horaapertura || "";
        evento.horaclausura = objeto.horaclausura || "";
        evento.status = objeto.status || "";
        return evento;
    };
    Evento.convertirParaRespuesta = function (objeto) {
        var evento = new Evento();
        evento.codigo = objeto.hora_id || "";
        evento.idevento = objeto.hora_idevento || "";
        evento.fechaapertura = objeto.hora_fechaapertura || "";
        evento.fechaclausura = objeto.hora_fechaclausura || "";
        evento.horaapertura = objeto.hora_horaapertura || "";
        evento.horaclausura = objeto.hora_horaclausura || "";
        evento.status = objeto.hora_status || "";
        return evento;
    };
    return Evento;
}());
exports.default = Evento;
