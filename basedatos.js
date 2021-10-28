const express = require('express');
let mysql = require('mysql');
const moment = require('moment');
moment.locale('es');

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'login_node',
    user: 'root',
    password: ''
})

connection.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log("Conexión exitosa")
    }
})
// connection.query('SELECT distinct email FROM users', function(error, rows){
//     if(error){
//         throw error;
//     } else {
//         //console.log(rows)
//         //console.log(rows[0].email)
//         //console.log(rows.email)
//         let email = 'juan@email.com'
//         let emails = []
//         rows.forEach(row => {
//             emails.push(row.email)
//         })
//         console.log(emails)
//         console.log(emails.includes(email))

//         //filas.forEach()
//     }
// })

// connection.query('SELECT * FROM party_id', function(error, rows){
//     if(error) {
//         throw error
//     } else {
//         //let client = rows.forEach(row=>{
//           //  console.log(row)
//           let cliente = rows.filter(function(p){return p.id == 30});
//           console.log(cliente.id)
            //   return n.id==8;
           //});
        
       // let cliente = rows.filter(function (i,n){
         //   return n.id==8;
        //});
        //let cliente = rows.filter(function(p){return p.id == 8}); 
        //console.log(client)
//     }
// })


// connection.query('SELECT * from party_id', (error, resultado)=>{
//     if(error) {
//         throw error
//     } else {
//         let ultimoProyecto = resultado.slice(-1)
//         res.redirect('cliente/razon-social/:id');
//     }                    
// })

connection.query('SELECT par.id_cliente, par.razon_social, par.fecha_inicio, par.email, par.number, par.responsable_empresa, tra.transaccion, tra.destinatario, tra.fecha_tran, tra.monto, eta.tipo, eta.fecha_eta, eta.titulo, eta.descripcion FROM party_id as PAR left join (select distinct id_cliente, monto, destinatario, transaccion, fecha_tran from transacciones) as TRA on TRA.id_cliente = PAR.id_cliente left join (select id_cliente, tipo, fecha_eta, titulo, descripcion from etapa_tfa) as ETA on ETA.id_cliente = PAR.id_cliente', function(error, rows){   
//connection.query('SELECT * from transacciones', function(error, rows){   
    if (error) {
        throw error
    } else {
    //    console.log(rows)
        //let tfa = rows.filter(function(p){return p.tipo == 'tfa'})
        let cliente = rows.filter(function(p){return p.id_cliente == 61})
        console.log(cliente)
         //let imagen = cliente.map(e=>e.imagen)
         //console.log(imagen);
         let movimientos = cliente.map(e=>e.monto)
         console.log(movimientos)
        // let order = fechas.sort(function(a,b){return a.getTime() - b.getTime()});
        // console.log(fechas)
        // // let etapaRow = cliente.map(function(value){
        // //          let dates = moment(value.fecha_eta).format('l');
        // //          //console.log(moment().min(dates));
        // //         //  let today = moment().format('l');
        // //         //  let menorFecha = moment().subtract(dates, today);
        // //         //  console.log(menorFecha.format('l'));
        // //      })
        // //let etapaRow = etapa.map(e=>e.titulo)
        // // let etapaFecha = etapa.map(e=>e.fecha_eta)
        // // let etapaRow = etapa.forEach(function(value){
        // //     console.log(`${value.titulo} - ${value.fecha_eta}`)
        // // })
        // //console.log(etapaRow)
        // //console.log(etapaFecha)
    }
}); 