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
    // Si te actualizó
    Query.getListar = function () {
        var QUERY = "SELECT * FROM horarios";
        return QUERY;
    };
    Query.saveHorario = function (horario) {
        var today = new Date();
        var QUERY = "INSERT INTO horarios ( hora_idevento, hora_fechaapertura,\n                            hora_fechaclausura,hora_horaapertura, hora_horaclausura, hora_status) VALUES(\n                            " + sqlstring_1.default.escape(horario.idevento) + ",\n                            " + sqlstring_1.default.escape(horario.fechaapertura) + ",\n                            " + sqlstring_1.default.escape(horario.fechaclausura) + ",\n                            " + sqlstring_1.default.escape(horario.horaapertura) + ",\n                            " + sqlstring_1.default.escape(horario.horaclausura) + ",\n                            " + sqlstring_1.default.escape(horario.status) + ");";
        console.log(horario.idevento);
        return QUERY;
    };
    Query.updateHorario = function (horario) {
        var today = new Date();
        var QUERY = "UPDATE horarios SET hora_fechaapertura = " + sqlstring_1.default.escape(horario.fechaapertura) + ",\n        hora_fechaclausura = " + sqlstring_1.default.escape(horario.fechaclausura) + ",\n                                    even_fechaapertura = " + sqlstring_1.default.escape(horario.horaapertura) + ",\n                                    hora_horaapertura = " + sqlstring_1.default.escape(horario.horaclausura) + ",,';";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
