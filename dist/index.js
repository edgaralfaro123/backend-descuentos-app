"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
/* import eventosRouter from './routes/eventos.router';
import lugaresRouter from './routes/lugares.router';
import salonesRouter from './routes/salones.router';
import personaRouter from './routes/personas.router';
import ponenteRouter from './routes/ponente.router';
import ponenciaRouter from './routes/ponencia.router';
import horarioRouter from './routes/horario.router';
import asistenciaRouter from './routes/asistencia.router';
import eventousuarioRouter from './routes/eventousuario.router';
import usuarioRouter from './routes/usuario.router';
import cuentasporcobrarRouter from './routes/cuentasporcobrar.router';*/
var articulo_router_1 = __importDefault(require("./routes/articulo.router"));
var descuento_router_1 = __importDefault(require("./routes/descuento.router"));
var mysql_1 = __importDefault(require("./mysql/mysql"));
var port = process.env.PORT || 3000;
var server = server_1.default.init(port);
server.app.use(descuento_router_1.default);
/* server.app.use(eventosRouter);
server.app.use(lugaresRouter);
server.app.use(salonesRouter);
server.app.use(personaRouter);
server.app.use(ponenteRouter);
server.app.use(horarioRouter);
server.app.use(ponenciaRouter);
server.app.use(asistenciaRouter);
server.app.use(eventousuarioRouter);
server.app.use(usuarioRouter);
server.app.use(cuentasporcobrarRouter);*/
server.app.use(articulo_router_1.default);
mysql_1.default.instance;
server.start(function () { return console.log("Servidor corriendo en el puerto " + port); });
//un comentario
