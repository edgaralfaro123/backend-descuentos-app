import mysql = require('mysql');

export default class MySQL{
    private static _instance: MySQL;
    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('Conectando a la base de datos');
        this.cnn = this.crearConexion();
        this.conectarDB();
    }

    private crearConexion():mysql.Connection{
        return mysql.createConnection({
                host: '190.85.128.146',
                user: 'root',
                password: 'RMW-3',
                database: 'valentinadb'
        });
    }

    /*private crearConexion():mysql.Connection{
        return mysql.createConnection({
                host: 'geacua.crwtnbm3au60.us-east-2.rds.amazonaws.com',
                user: 'AdminSQL',
                password: '5i4zyp3f',
                database: 'eventos_cua'
        });
    }*/

    /*private crearConexion():mysql.Connection{
        return mysql.createConnection({
                host: 'mysql7003.site4now.net',
                user: 'a46c0f_geacua',
                password: 'Combomix1',
                database: 'db_a46c0f_geacua'
        });
    }*/

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static ejecutarQuery(query:string,callback:Function){
        this.instance.cnn.query(query, (err, results:Object[], fields)=>{
            if (err){
                console.log(`QUERY ERROR: ${err}"`);
                return callback(err);
            }
            if(results.length === 0)
                callback("El registro asociado no existe");
            else
                callback(null, results, fields);
        });
    }

    private conectarDB(){
        this.cnn.on('error', (err) =>{
            console.log(`CONNECTION ERROR: ${err.code}`);
            setTimeout(() => {
                this.cnn.destroy();
                this.cnn = this.crearConexion()
                this.conectado = false;
                this.conectarDB();
            }, 3000);
        });

        this.cnn.connect((err:mysql.MysqlError)=>{
            if (err){
                console.log(`CONNECTION ERROR: ${err.code}`);
                return this.conectarDB();
            }else{
                this.conectado = true;
                console.log('Conectado a la base de datos');
            }
        });
    }
}