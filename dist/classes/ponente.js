"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ponente = /** @class */ (function () {
    function Ponente() {
        this.id = "";
        this.tipodocumento = "";
        this.primernombre = "";
        this.segundonombre = "";
        this.primerapellido = "";
        this.telefono = "";
        this.direccion = "";
        this.pais = "";
        this.estado = "";
        this.ciudad = "";
        this.fechanacimiento = "";
        this.estatus = "";
        this.contador = "";
        this.especialidad = "";
    }
    Ponente.crearDeUnaPeticion = function (objeto) {
        var ponente = new Ponente();
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
    };
    Ponente.convertirParaRespuesta = function (objeto) {
        var ponente = new Ponente();
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
    };
    return Ponente;
}());
exports.default = Ponente;
