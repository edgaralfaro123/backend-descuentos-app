"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Salon = /** @class */ (function () {
    function Salon() {
        this.id = "";
        this.codigo = "";
        this.nombre = "";
        this.lugar = "";
        this.capacidad = "";
        this.tipo = "";
        this.imagen = "";
    }
    Salon.crearDeUnaPeticion = function (objeto) {
        var salon = new Salon();
        salon.id = objeto.id || "";
        salon.codigo = objeto.codigo || "";
        salon.nombre = objeto.nombre || "";
        salon.lugar = objeto.lugar || "";
        salon.capacidad = objeto.capacidad || "";
        salon.tipo = objeto.tipo || "";
        salon.imagen = objeto.imagen || "";
        return salon;
    };
    Salon.convertirParaRespuesta = function (objeto) {
        var salon = new Salon();
        salon.id = objeto.saln_id || "";
        salon.codigo = objeto.saln_codigo || "";
        salon.nombre = objeto.saln_nombre || "";
        salon.lugar = objeto.saln_lugar || "";
        salon.capacidad = objeto.saln_capacidad || "";
        salon.tipo = objeto.saln_tipo || "";
        salon.imagen = objeto.saln_img || "";
        return salon;
    };
    return Salon;
}());
exports.default = Salon;
