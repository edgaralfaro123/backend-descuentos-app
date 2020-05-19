"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Articulo = /** @class */ (function () {
    function Articulo() {
        this.codigo = "";
        this.descripcion = "";
        this.img = "";
        this.categoria = "";
        this.estado = "";
    }
    Articulo.crearDeUnaPeticion = function (objeto) {
        var articulo = new Articulo();
        articulo.codigo = objeto.codigo || "";
        articulo.descripcion = objeto.descripcion || "";
        articulo.img = objeto.img || "";
        articulo.categoria = objeto.categoria || "";
        articulo.estado = objeto.estado || "";
        return articulo;
    };
    Articulo.convertirParaRespuesta = function (objeto) {
        var articulo = new Articulo();
        articulo.codigo = objeto.arti_codigo || "";
        articulo.descripcion = objeto.arti_descripcion || "";
        articulo.img = objeto.arti_img || "";
        articulo.categoria = objeto.arti_categoria || "";
        articulo.estado = objeto.arti_estado || "";
        return articulo;
    };
    return Articulo;
}());
exports.default = Articulo;
