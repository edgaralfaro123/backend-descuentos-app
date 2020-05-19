"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlstring_1 = __importDefault(require("sqlstring"));
var Query = /** @class */ (function () {
    function Query() {
    }
    ;
    Query.getListarExtractoClienteAll = function () {
        var QUERY = "SELECT * FROM cuentas_por_cobrar\n        WHERE cpco_status='G'\n        ORDER BY cpco_docanexo,cpco_cuotaanexo,cpco_fecha;";
        return QUERY;
    };
    Query.getListarExtractoCliente = function (beneficiario) {
        var QUERY = "SELECT * FROM cuentas_por_cobrar\n        WHERE cpco_status='G' and cpco_beneficiario= " + sqlstring_1.default.escape(beneficiario) + "\n        ORDER BY cpco_docanexo,cpco_cuotaanexo,cpco_fecha;";
        return QUERY;
    };
    Query.getListarSaldoCliente = function () {
        var QUERY = "SELECT\n        pers_documento,concat(pers_primernombre,' ',pers_segundonombre,' ',pers_primerapellido,' ',pers_segundoapellido) as nombre_completo,\n        (suma - resta) AS saldo FROM (\n        SELECT pers_documento,pers_primernombre,pers_segundonombre,pers_primerapellido,pers_segundoapellido,\n            sum(if(cpco_naturalezadoc='S',cpco_valor,0)) AS suma,\n            sum(if(cpco_naturalezadoc='R',cpco_valor,0)) AS resta\n        FROM cuentas_por_cobrar c\n        LEFT JOIN personas p ON p.pers_documento=c.cpco_beneficiario\n        GROUP BY cpco_beneficiario) AS rs;";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
