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
    Query.getListarTodos = function () {
        var QUERY = "select * from asistencias where asis_status='1'";
        return QUERY;
    };
    Query.getListarActivos = function () {
        var QUERY = "select a.asis_codigo as asis_codigo,a.asis_persona as asis_persona,p.pers_primernombre as pers_primernombre,\n                            p.pers_segundonombre as pers_segundonombre,\n                            p.pers_primerapellido as pers_primerapellido,p.pers_segundoapellido as pers_segundoapellido,\n                            s.seme_semestre as seme_semestre,pro.prog_descripcion as prog_descripcion,a.asis_evento as asis_evento,\n                            ev.even_nombre as even_nombre,a.asis_fecha as asis_fecha,a.asis_hora as asis_hora\n                            from asistencias a\n                            left join personas p on p.pers_documento=a.asis_persona\n                            left join eventos ev on ev.even_codigo=a.asis_evento\n                            left join estudiantes e on e.estu_documento=a.asis_persona\n                            left join programas pro on pro.prog_codigo=e.estu_programa\n                            left join semestre s on s.seme_persona=a.asis_persona\n                            where a.asis_status in (" + 1 + ")";
        return QUERY;
    };
    Query.saveAsistencia = function (asistencia) {
        var usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        var newusetime = new Date(usaTime);
        console.log('USA time: ' + usaTime.toLocaleString());
        var today = new Date();
        //const n = today.toLocaleDateString();
        var QUERY = "INSERT INTO asistencias\n                             (asis_persona,\n                             asis_evento,asis_fecha,\n                             asis_hora, asis_status) VALUES (\n                             " + sqlstring_1.default.escape(asistencia.persona) + ",\n                             " + sqlstring_1.default.escape(asistencia.evento) + ",\n                             '" + today.toISOString().substring(0, 10) + " " + today.getDate() + "',\n                             '" + today.toISOString().substring(0, 10) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "',\n                             " + 1 + ");";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
