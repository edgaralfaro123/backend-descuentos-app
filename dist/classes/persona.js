"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona() {
        this.id = "";
        this.tipodocumento = "";
        this.primernombre = "";
        this.segundonombre = "";
        this.primerapellido = "";
        this.segundoapellido = "";
        this.telefono = "";
        this.direccion = "";
        this.pais = "";
        this.estado = "";
        this.ciudad = "";
        this.fechanacimiento = "";
        this.estatus = "";
        this.contador = "";
        this.clave = "";
        this.correo = "";
        this.url = "";
    }
    Persona.crearDeUnaPeticion = function (objeto) {
        var persona = new Persona();
        persona.id = objeto.id || "";
        persona.tipodocumento = objeto.tipodocumento || "";
        persona.primernombre = objeto.primernombre || "";
        persona.segundonombre = objeto.segundonombre || "";
        persona.primerapellido = objeto.primerapellido || "";
        persona.segundoapellido = objeto.segundoapellido || "";
        persona.telefono = objeto.telefono || "";
        persona.direccion = objeto.direccion || "";
        persona.pais = objeto.pais || "";
        persona.estado = objeto.estado || "";
        persona.ciudad = objeto.ciudad || "";
        persona.fechanacimiento = objeto.fechanacimiento || "";
        persona.estatus = objeto.estatus || "";
        persona.contador = objeto.contador || "";
        persona.clave = objeto.clave || "";
        persona.correo = objeto.correo || "";
        persona.url = objeto.url || "";
        return persona;
    };
    Persona.convertirParaRespuesta = function (objeto) {
        var persona = new Persona();
        persona.id = objeto.pers_documento || "";
        persona.tipodocumento = objeto.pers_tipodocumento || "";
        persona.primernombre = objeto.pers_primernombre || "";
        persona.segundonombre = objeto.pers_segundonombre || "";
        persona.primerapellido = objeto.pers_primerapellido || "";
        persona.segundoapellido = objeto.pers_segundoapellido || "";
        persona.telefono = objeto.pers_telefono || "";
        persona.direccion = objeto.pers_direccion || "";
        persona.pais = objeto.pers_pais || "";
        persona.estado = objeto.pers_estado || "";
        persona.ciudad = objeto.pers_ciudad || "";
        persona.fechanacimiento = objeto.pers_fechanacimiento || "";
        persona.estatus = objeto.pers_estatus || "";
        persona.contador = objeto.pers_contador || "";
        persona.clave = objeto.pers_clave || "";
        persona.correo = objeto.pers_correo || "";
        persona.url = objeto.pers_url || "";
        return persona;
    };
    return Persona;
}());
exports.default = Persona;
