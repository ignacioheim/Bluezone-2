const express = require('express');
let mysql = require('mysql');

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
        console.log("Conección exitosa")
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

connection.query('SELECT * FROM party_id', function(error, rows){
    if(error) {
        throw error
    } else {
        //let client = rows.forEach(row=>{
          //  console.log(row)
          let cliente = rows.filter(function(p){return p.id == 30});
          console.log(cliente.id)
            //   return n.id==8;
           //});
        
       // let cliente = rows.filter(function (i,n){
         //   return n.id==8;
        //});
        //let cliente = rows.filter(function(p){return p.id == 8}); 
        //console.log(client)
    }
})


// connection.query('SELECT * from party_id', (error, resultado)=>{
//     if(error) {
//         throw error
//     } else {
//         let ultimoProyecto = resultado.slice(-1)
//         res.redirect('cliente/razon-social/:id');
//     }                    
// })