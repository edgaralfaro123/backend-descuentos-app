"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var lugar_1 = __importDefault(require("../classes/lugar"));
var salon_1 = __importDefault(require("../classes/salon"));
var lugares_queries_1 = __importDefault(require("../mysql/queries/lugares.queries"));
var salones_queries_1 = __importDefault(require("../mysql/queries/salones.queries"));
var lugares_queries_2 = __importDefault(require("../mysql/queries/lugares.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/lugares/listar', function (req, res) {
    try {
        var getLugares = function () {
            return new Promise(function (resolve, reject) {
                var lugares = [];
                var QUERY = lugares_queries_1.default.getListarTodos();
                mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
                    if (err)
                        return reject(err);
                    resultado.forEach(function (object) {
                        var lugar = lugar_1.default.convertirParaRespuesta(object);
                        lugares.push(lugar);
                    });
                    resolve(lugares);
                });
            });
        };
        var getSalones_1 = function (lugares) {
            return new Promise(function (resolve, reject) {
                var indexSalon = 0;
                lugares.forEach(function (objectLugar, index) {
                    var QUERY = salones_queries_1.default.getSalonesByLugar(objectLugar.id);
                    mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
                        if (err) {
                            var QUERY_1 = salones_queries_1.default.getSalonesVacios();
                            mysql_1.default.ejecutarQuery(QUERY_1, function (err, resultado) {
                                if (resultado !== undefined && resultado.length > 0) {
                                    resultado.forEach(function (objectSalon, index2) {
                                        var salon = salon_1.default.convertirParaRespuesta(objectSalon);
                                        lugares[0].infoSalones.push(salon);
                                        indexSalon = index2;
                                    });
                                }
                                if (indexSalon == (resultado.length - 1))
                                    resolve(lugares);
                            });
                        }
                        else {
                            if (resultado !== undefined && resultado.length > 0) {
                                resultado.forEach(function (objectSalon, index2) {
                                    var salon = salon_1.default.convertirParaRespuesta(objectSalon);
                                    lugares[index].infoSalones.push(salon);
                                    indexSalon = index2;
                                });
                            }
                            if (index == (lugares.length - 1) && indexSalon == (resultado.length - 1))
                                resolve(lugares);
                        }
                    });
                });
            });
        };
        getLugares()
            .then(function (lugares) {
            getSalones_1(lugares)
                .then(function (respuesta) { res.json({ ok: true, lugares: respuesta }); })
                .catch(function (err) { return res.status(400).json({ ok: false, error: err }); });
        })
            .catch(function (err) { return res.status(400).json({ ok: false, error: err }); });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/lugares/obtener/:id', function (req, res) {
    try {
        var getLugares = function () {
            return new Promise(function (resolve, reject) {
                var lugares = [];
                var id = req.params.id;
                var QUERY = lugares_queries_1.default.getLugar(id);
                mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
                    if (err)
                        return reject(err);
                    resultado.forEach(function (object) {
                        var lugar = lugar_1.default.convertirParaRespuesta(object);
                        lugares.push(lugar);
                    });
                    resolve(lugares);
                });
            });
        };
        var getSalones_2 = function (lugares) {
            return new Promise(function (resolve, reject) {
                var indexSalon = 0;
                var id = req.params.id;
                //lugares.forEach( (objectLugar: any, index: number) => {
                var QUERY = salones_queries_1.default.getSalonesByLugar(id);
                mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
                    if (err) {
                        var QUERY_2 = salones_queries_1.default.getSalonesVacios();
                        mysql_1.default.ejecutarQuery(QUERY_2, function (err, resultado) {
                            if (resultado !== undefined && resultado.length > 0) {
                                resultado.forEach(function (objectSalon, index2) {
                                    var salon = salon_1.default.convertirParaRespuesta(objectSalon);
                                    lugares[0].infoSalones.push(salon);
                                    indexSalon = index2;
                                });
                            }
                            if (indexSalon == (resultado.length - 1))
                                resolve(lugares);
                        });
                    }
                    else {
                        if (resultado !== undefined && resultado.length > 0) {
                            resultado.forEach(function (objectSalon, index2) {
                                var salon = salon_1.default.convertirParaRespuesta(objectSalon);
                                lugares[0].infoSalones.push(salon);
                                indexSalon = index2;
                            });
                        }
                        if (indexSalon == (resultado.length - 1))
                            resolve(lugares);
                    }
                });
                //});
            });
        };
        getLugares()
            .then(function (lugares) {
            getSalones_2(lugares)
                .then(function (respuesta) { res.json({ ok: true, lugares: respuesta }); })
                .catch(function (err) { return res.status(400).json({ ok: false, error: err }); });
        })
            .catch(function (err) { return res.status(400).json({ ok: false, error: err }); });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
/*router.post('/lugares/guardar', (req:Request, res:Response)=>{
    try{
        console.log(req.body);
        const lugar:Lugar = Lugar.crearDeUnaPeticion(req.body);
        let respuesta:Lugar
        const QUERY = Query.saveLugar(lugar);
        console.log(QUERY);
        MySQL.ejecutarQuery(QUERY,(err:any,resultado:any, fields:any)=>{
            if (err)
                return res.status(400).json({ok: false, error: err});
            return res.json({ok:true, estado:resultado});
        });
    }catch(err){
        return res.status(500).json({ok:false, error:'INTERNAL_SERVER_ERROR'});
    }
});*/
router.post('/lugares/guardar', function (req, res) {
    try {
        console.log(req.body);
        var lugar = lugar_1.default.crearDeUnaPeticion(req.body);
        var respuesta = void 0;
        var QUERY = lugares_queries_2.default.saveLugar(lugar);
        console.log(QUERY);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado, fields) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            return res.json({ ok: true, estado: resultado });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
//guardar
exports.default = router;
