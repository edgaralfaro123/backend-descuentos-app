"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lugar = /** @class */ (function () {
    function Lugar() {
        this.id = "";
        this.nombre = "";
        this.direccion = "";
        this.pais = "";
        this.estado = "";
        this.ciudad = "";
        this.tipo = "";
        this.imagen = "";
        this.infoSalones = [];
    }
    Lugar.crearDeUnaPeticion = function (objeto) {
        var lugar = new Lugar();
        lugar.id = objeto.id || "";
        lugar.nombre = objeto.nombre || "";
        lugar.direccion = objeto.direccion || "";
        lugar.pais = objeto.pais || "";
        lugar.estado = objeto.estado || "";
        lugar.ciudad = objeto.ciudad || "";
        lugar.tipo = objeto.tipo || "";
        lugar.imagen = objeto.imagen || "";
        return lugar;
    };
    Lugar.convertirParaRespuesta = function (objeto) {
        var lugar = new Lugar();
        lugar.id = objeto.lugr_id || "";
        lugar.nombre = objeto.lugr_nombre || "";
        lugar.direccion = objeto.lugr_direccion || "";
        lugar.pais = objeto.lugr_pais || "";
        lugar.estado = objeto.lugr_estado || "";
        lugar.ciudad = objeto.lugr_ciudad || "";
        lugar.tipo = objeto.lugr_tipo || "";
        lugar.imagen = objeto.lugr_img || "";
        return lugar;
    };
    return Lugar;
}());
exports.default = Lugar;
