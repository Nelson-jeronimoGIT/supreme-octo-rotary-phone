import express from "express";
import { conectar } from "../modelo/db_conectar.js"; 

var crud_estudiantes = {};

crud_estudiantes.leer = (req, res) => {
    conectar.query('select * from estudiantes', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error de base de datos');
        } else {
            res.render('estudiantes/index', { resultado: results });
        }
    });
};
crud_estudiantes.cud = (req,res) =>{
    const btn_crear = req.body.btn_crear;
    const btn_agregar = req.body.btn_agregar;
    const btn_modificar = req.body.btn_modificar;
    const btn_eliminar = req.body .btn_eliminar;
    const id_estudiantes= req.body.txt_id;
    const Nombres = req.body.txt_Nombres;
    const Apellidos = req.body.txt_Apellidos;
    const Dirección = req.body.txt_Dirección;
    const Telefono = req.body.txt_Telefono;
    const Fecha_Nacimiento = req.body.txt_Fn;
    if (btn_crear){
        conectar.query('insert into estudiantes set ?', {tipo_de_sangre:tipo_de_sangre,nombres:Nombres,apellidos:Apellidos,Dirección:Dirección,Telefono:Telefono,Fecha_Nacimiento:Fecha_Nacimiento},(error,results)=>{
            if (error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
    }
    if (btn_crear){

        conectar.query('update estudiantes set ? where id_estudiantes = ?',[{tipo_de_sangre:tipo_de_sangre,nombres:Nombres,apellidos:Apellidos,Dirección:Dirección,Telefono:Telefono,Fecha_Nacimiento:Fecha_Nacimiento},id_estudiantes],(error,results)=>{
            if (error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });

    }
    if (btn_eliminar){

        conectar.query('delete from estudiantes where id_estudiantes = ?',[id_estudiantes],(error,results)=>{
            if (error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });

    }
} 
export { crud_estudiantes };
