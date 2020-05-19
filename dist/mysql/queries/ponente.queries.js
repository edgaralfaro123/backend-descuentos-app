"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query() {
    }
    ;
    Query.getListarPonentes = function () {
        var QUERY = "SELECT per.*,p.pont_especialidad\n                             FROM personas per\n                             LEFT JOIN ponentes p ON p.pont_persona=per.pers_documento\n                             WHERE p.pont_persona=per.pers_documento ;";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
