import Asistencia from '../../classes/asistencia';
import SqlString from 'sqlstring';

export default class Query{

    constructor(){};


    public static getListarTodos(){
        const QUERY:string = `select * from asistencias where asis_status='1'`;
        return QUERY;
    }

    public static getListarActivos(){
        const QUERY:string = `select a.asis_codigo as asis_codigo,a.asis_persona as asis_persona,p.pers_primernombre as pers_primernombre,
                            p.pers_segundonombre as pers_segundonombre,
                            p.pers_primerapellido as pers_primerapellido,p.pers_segundoapellido as pers_segundoapellido,
                            s.seme_semestre as seme_semestre,pro.prog_descripcion as prog_descripcion,a.asis_evento as asis_evento,
                            ev.even_nombre as even_nombre,a.asis_fecha as asis_fecha,a.asis_hora as asis_hora
                            from asistencias a
                            left join personas p on p.pers_documento=a.asis_persona
                            left join eventos ev on ev.even_codigo=a.asis_evento
                            left join estudiantes e on e.estu_documento=a.asis_persona
                            left join programas pro on pro.prog_codigo=e.estu_programa
                            left join semestre s on s.seme_persona=a.asis_persona
                            where a.asis_status in (${1})`;
        return QUERY;
    }

    public static saveAsistencia(asistencia:Asistencia){
        const usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
        const newusetime = new Date(usaTime);
        console.log('USA time: '+usaTime.toLocaleString())
        
        const today = new Date();
        //const n = today.toLocaleDateString();
        const QUERY:string = `INSERT INTO asistencias
                             (asis_persona,
                             asis_evento,asis_fecha,
                             asis_hora, asis_status) VALUES (
                             ${SqlString.escape(asistencia.persona)},
                             ${SqlString.escape(asistencia.evento)},
                             '${today.toISOString().substring(0, 10)} ${today.getDate()}',
                             '${today.toISOString().substring(0, 10)} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}',
                             ${1});`;
                                          
                            
        return QUERY;
    }
}