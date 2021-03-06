"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lugar_1 = __importDefault(require("./lugar"));
var Evento = /** @class */ (function () {
    function Evento() {
        this.codigo = "";
        this.nombre = "";
        this.descripcion = "";
        this.lugar = "";
        this.fechaApertura = "";
        this.fechaClausura = "";
        this.cronograma = "";
        this.horaApertura = "";
        this.horaClausura = "";
        this.organizador = "";
        this.imagen = "";
        this.usuarioCreacion = "";
        this.usuarioModificacion = "";
        this.fechaCreacion = "";
        this.fechaModificacion = "";
        this.gratis = "";
        this.valor = "";
        this.estatus = "";
        this.infoLugar = new lugar_1.default();
    }
    Evento.crearDeUnaPeticion = function (objeto) {
        var evento = new Evento();
        evento.codigo = objeto.codigo || "";
        evento.nombre = objeto.nombre || "";
        evento.descripcion = objeto.descripcion || "";
        evento.lugar = objeto.lugar || "";
        evento.fechaApertura = objeto.fechaApertura || "";
        evento.fechaClausura = objeto.fechaClausura || "";
        evento.cronograma = objeto.cronograma || "";
        evento.horaApertura = objeto.horaApertura || "";
        evento.horaClausura = objeto.horaClausura || "";
        evento.organizador = objeto.organizador || null;
        evento.imagen = objeto.imagen || "";
        evento.usuarioCreacion = objeto.usuarioCreacion || "";
        evento.usuarioModificacion = objeto.usuarioModificacion || "";
        evento.fechaCreacion = objeto.fechaCreacion || "";
        evento.fechaModificacion = objeto.fechaModificacion || "";
        evento.gratis = objeto.gratis || "";
        evento.valor = objeto.valor || "";
        evento.estatus = objeto.estatus || "";
        return evento;
    };
    Evento.convertirParaRespuesta = function (objeto) {
        var evento = new Evento();
        evento.codigo = objeto.even_codigo || "";
        evento.nombre = objeto.even_nombre || "";
        evento.descripcion = objeto.even_descripcion || "";
        evento.fechaApertura = objeto.even_fechaapertura || "";
        evento.fechaClausura = objeto.even_fechaclausura || "";
        evento.lugar = objeto.even_lugar || "";
        evento.cronograma = objeto.even_cronograma || "";
        evento.horaApertura = objeto.even_horaapertura || "";
        evento.horaClausura = objeto.even_horaclausura || "";
        evento.organizador = objeto.even_organizador || null;
        evento.imagen = objeto.even_img || "";
        evento.usuarioCreacion = objeto.even_usuariocreacion || "";
        evento.usuarioModificacion = objeto.even_usuariomodificacion || "";
        evento.fechaCreacion = objeto.even_fechacreacion || "";
        evento.fechaModificacion = objeto.even_fechamodificacion || "";
        evento.gratis = objeto.even_gratis.toString() || "";
        evento.valor = objeto.even_valor.toString() || "";
        evento.estatus = objeto.even_estatus || "";
        return evento;
    };
    return Evento;
}());
exports.default = Evento;
