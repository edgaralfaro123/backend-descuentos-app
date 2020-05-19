"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cuentasporpagar = /** @class */ (function () {
    function Cuentasporpagar() {
        this.documento = "";
        this.concepto = "";
        this.descripcion = "";
        this.naturalezadoc = "";
        this.beneficiario = "";
        this.valor = "";
        this.fecha = "";
        this.status = "";
        this.nombrecompleto = "";
        this.saldo = "";
    }
    Cuentasporpagar.crearDeUnaPeticion = function (objeto) {
        var cuentasporpagar = new Cuentasporpagar();
        cuentasporpagar.documento = objeto.documento || "";
        cuentasporpagar.concepto = objeto.concepto || "";
        cuentasporpagar.descripcion = objeto.descripcion || "";
        cuentasporpagar.naturalezadoc = objeto.naturalezadoc || "";
        cuentasporpagar.beneficiario = objeto.beneficiario || "";
        cuentasporpagar.valor = objeto.valor || "";
        cuentasporpagar.status = objeto.status || "";
        cuentasporpagar.nombrecompleto = objeto.nombrecompleto || "";
        cuentasporpagar.saldo = objeto.saldo || "";
        return cuentasporpagar;
    };
    Cuentasporpagar.convertirParaRespuesta = function (objeto) {
        var cuentasporpagar = new Cuentasporpagar();
        cuentasporpagar.documento = objeto.cpco_documento || "";
        cuentasporpagar.concepto = objeto.cpco_concepto || "";
        cuentasporpagar.descripcion = objeto.cpco_descripcion || "";
        cuentasporpagar.naturalezadoc = objeto.cpco_naturalezadoc || "";
        cuentasporpagar.valor = objeto.cpco_valor || "";
        cuentasporpagar.fecha = objeto.cpco_fecha || "";
        cuentasporpagar.status = objeto.cpco_status || "";
        cuentasporpagar.nombrecompleto = objeto.nombre_completo || "";
        cuentasporpagar.saldo = objeto.saldo || "";
        return cuentasporpagar;
    };
    return Cuentasporpagar;
}());
exports.default = Cuentasporpagar;
