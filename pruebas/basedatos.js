const express = require('express');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'login_node',
    user: 'root',
    password: ''
})

// connection.connect(function(error){
//     if(error){
//         throw error;
//     } else {
//         console.log("Conección exitosa")
//     }
// })
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

connection.query('Select *, par.id_cliente from party_id as par left join transacciones as tra on tra.id_cliente = par.id_cliente', function(error, rows){
    if(error) {
        throw error
    } else {
        console.log(rows)
    }
})

// let array = [100, -50, 200, -100]
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
 
// console.log(array.reduce(reducer));


