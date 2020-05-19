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
    Query.getListarActivos = function () {
        var QUERY = "select arti_codigo,arti_descripcion,arti_img,arti_categoria\n                              from articulo\n                              where arti_estado not in ('I','i')";
        return QUERY;
    };
    Query.saveAsistencia = function (artculo) {
        var usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        var newusetime = new Date(usaTime);
        console.log('USA time: ' + usaTime.toLocaleString());
        var today = new Date();
        //const n = today.toLocaleDateString();
        var QUERY = "INSERT INTO articuo\n                             (arti_codigo,arti_descripcion,arti_img,arti_categoria) VALUES (\n                             " + sqlstring_1.default.escape(artculo.codigo) + ",\n                             " + sqlstring_1.default.escape(artculo.descripcion) + ",\n                             " + sqlstring_1.default.escape(artculo.img) + ",\n                             " + sqlstring_1.default.escape(artculo.categoria) + ",\n                             'A'\n                             );";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
