"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asistencia = /** @class */ (function () {
    function Asistencia() {
        this.codigo = "";
        this.persona = "";
        this.evento = "";
        this.fecha = "";
        this.hora = "";
        this.status = "";
        this.primernombre = "";
        this.segundonombre = "";
        this.primerapellido = "";
        this.segundoapellido = "";
        this.semestre = "";
        this.descripcion = "";
        this.nombre = "";
    }
    Asistencia.crearDeUnaPeticion = function (objeto) {
        var asistencia = new Asistencia();
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
    };
    Asistencia.convertirParaRespuesta = function (objeto) {
        var asistencia = new Asistencia();
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
    };
    return Asistencia;
}());
exports.default = Asistencia;
