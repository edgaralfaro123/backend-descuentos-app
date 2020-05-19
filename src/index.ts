import Server from './server/server';
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
import articuloRouter from './routes/articulo.router';
import descuentoRouter from './routes/descuento.router';
import MySQL from './mysql/mysql';
const port:any = process.env.PORT || 3000;

const server = Server.init(port);
server.app.use(descuentoRouter);
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
server.app.use(articuloRouter);
MySQL.instance;
server.start(() => console.log(`Servidor corriendo en el puerto ${port}`));
//un comentario