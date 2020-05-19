"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descuentos = /** @class */ (function () {
    function Descuentos() {
        this.codigo = "";
        this.descripcion = "";
        this.descuento = "";
        this.precio = "";
        this.precioanterior = "";
        this.empresa = "";
        this.urlimagen = "";
    }
    Descuentos.crearDeUnaPeticion = function (objeto) {
        var descuentos = new Descuentos();
        descuentos.codigo = objeto.codigo || "";
        descuentos.descripcion = objeto.descripcion || "";
        descuentos.descuento = objeto.descuento || "";
        descuentos.precio = objeto.precio || "";
        descuentos.precioanterior = objeto.precioanterior || "";
        descuentos.empresa = objeto.empresa || "";
        descuentos.urlimagen = objeto.urlimagen || "";
        return descuentos;
    };
    Descuentos.convertirParaRespuesta = function (objeto) {
        var descuentos = new Descuentos();
        descuentos.codigo = objeto.desc_codigo || "";
        descuentos.descripcion = objeto.desc_descripcion || "";
        descuentos.descuento = objeto.desc_descuento || "";
        descuentos.precio = objeto.desc_precio || "";
        descuentos.precioanterior = objeto.desc_precioanterior || "";
        descuentos.empresa = objeto.desc_empresa || "";
        descuentos.urlimagen = objeto.desc_urlimagen || "";
        return descuentos;
    };
    return Descuentos;
}());
exports.default = Descuentos;
