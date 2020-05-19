"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query() {
    }
    ;
    Query.getListarArticulos = function () {
        var QUERY = "select *\n                                from conidescuento as d\n                                where d.desc_descripcion like '%celu%'";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
