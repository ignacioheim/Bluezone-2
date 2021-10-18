// 1 - Invoco a express
const express = require('express');
const path = require('path');
const moment = require('moment');
moment.locale('es')

const app = express();
const PORT = 5000;
const server = app.listen(PORT, () =>{
    console.log(`Estoy escuchando en el puesto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en el servidor ${error}`))

// 2 - Seteamos urlencoded para capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 3 - Invocar a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

// 4 - configurar el directorio public para que no haya problemas con rutas cuando se cambia de pc
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use("/public", express.static('./public/'));

// 5 - Se establece el motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

// 6 - Se invoca a bcryptjs

const bcryptjs = require('bcryptjs');

// 7 - Se configuran las variables de sesión
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// 8 - Se invoca al módulo de conexión a la BD
const connection = require('./database/db');
const { render } = require('ejs');

// 9 - Estableciendo rutas
app.get('/login', function(req,res) {
    res.render('login')
});
app.get('/register', function(req,res) {
    res.render('register')
});
 
// 10 - Registración
app.post('/register', async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const confirmPass = req.body.passconfirm;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    // PRIMERO CONSULTO SI EL MAIL EXISTE
    connection.query('SELECT distinct email FROM users', async (error, rows) => {
        let emails = []
        rows.forEach(row => {
            emails.push(row.email)
        })
        let emailRegister = emails.includes(email)
        if(emailRegister) {
            res.render('register', {
                alert: true,
                alertTitle:"Registro",
                alertMessage:"Email ya registrado.",
                alertIcon:"error",
                showConfirmButton:false,
                timer:1000,
                ruta:'register' 
            })  
        // SI NO EXISTE, CREO EL USUARIO                                  
        } else {
            connection.query('INSERT INTO users SET ?', {email:email, name:name, pass:passwordHaash}, async (error, results) => {
                if(error || pass != confirmPass){
                    let message = "Constraseñas incocorrectas"    
                    console.log(message)
                }  else {
                            res.render('register', {
                                alert: true,
                                alertTitle:"Registro",
                                alertMessage:"Registro correcto!",
                                alertIcon:"success",
                                showConfirmButton:false,
                                timer:2000,
                                ruta:'login' 
                            })
                        }                
                    });
        }
    });
});

// 11 - Autenticación 
app.post('/auth', async (req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    if (email && pass) {
        connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
                res.render('login', {
                    alert:true,
                    alertTitle: "Error",
                    alertMessage:"Usuario y/o contraseña incorrecta.",
                    alertIcon:"error",
                    showConfirmButton:true,
                    timer:false,
                    ruta:'login'
                });
            } else {
                req.session.loggedin = true;
                req.session.name = results[0].name;
                res.redirect('home');
            }
        })
    } else {
        res.render('login', {
            alert:true,
            alertTitle: "Advertencia",
            alertMessage:"¡Por favor ingrese un usuario y/o contraseña!",
            alertIcon:"warning",
            showConfirmButton:true,
            timer:false,
            ruta:'login'
        });
    }
});

// 11 - Auth páginas
app.get('/home', function(req,res) {
    if(req.session.loggedin){
        connection.query('SELECT par.id_cliente, par.razon_social, par.responsable_empresa, sum(ifnull(TRA.monto, 0)) as Saldo FROM party_id as PAR left join transacciones as TRA on TRA.id_cliente = PAR.id_cliente group by 1,2,3', function(error, rows){   
            if (error) {
                throw error
            } else {
                let proyectos = rows.map(function(e) {return e});        
                console.log(proyectos.length)
                res.render('dashboard',{
                login:true,
                name:req.session.name,
                proyectos: proyectos
               })
            }
        });
    } else {
        res.send('login',{
            login:false,
            name:'Debe iniciar sesión'
        })
    }
});

// 12 - Logout
app.get('/logout', (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('login')
    })
})

// 13 - Nuevo cliente
app.get('/nuevo-cliente', (req,res)=>{
    if(req.session.loggedin) {
        res.render('new-client',{
            login:true,
            name:req.session.name
        });
    } else {
        res.send('login',{
            login:false,
            name:'Debe iniciar sesión'
        })
    }
});

// 14 - Plantilla de cliente
app.get('/cliente/:id', (req,res)=>{
    if(req.session.loggedin) {
        const id = parseInt(req.params.id);
        if (id > 0) {
            connection.query('SELECT *, par.id_cliente FROM party_id as PAR left join transacciones as TRA on TRA.id_cliente = PAR.id_cliente left join etapa_tfa as ETA on ETA.id_cliente = PAR.id_cliente where par.id_cliente = ?', [id], function(error, rows){   
                if (error) {
                    throw error
                } else {
                let cliente = rows.filter(function(p){return p.id_cliente == id});   
                //console.log(cliente)
                console.log(id)
                console.log(cliente[0].id_cliente)
                // DATOS GENERALES DEL CLIENTE
                let razonSocial = cliente[0].razon_social;
                //console.log(razonSocial)
                let fecha_inicio = cliente[0].fecha_inicio;
                let id_cliente = cliente[0].id_cliente;
                let responsable = cliente[0].responsable_empresa
                let dd = fecha_inicio.getDate();
                let mm = fecha_inicio.getMonth()+1; 
                let yyyy = fecha_inicio.getFullYear();
                if(dd<10) {
                    dd='0'+dd;
                    } 
                if(mm<10) {
                    mm='0'+mm;
                } 
                // DATOS DE TRANSACCIONES
                let movimientos = cliente.map(e=>e.monto)
                const reducer = (previousValue, currentValue) => previousValue + currentValue;
                let saldo = movimientos.reduce(reducer)
                //let concepto = cliente.map(e=>e.destinatario)
                // console.log(movimientos)
                // console.log(saldo)
                
                // DATOS ETAPAS y TFA
                let etapa = rows.filter(function(p){return p.tipo == 'etapa'})
                let tfa = rows.filter(function(p){return p.tipo == 'tfa'})

                res.render('cliente', {
                    razon : razonSocial,
                    fecha : `${dd+'/'+mm+'/'+yyyy}`,
                    id : id_cliente,
                    login:true,
                    name:req.session.name,
                    saldo: saldo,
                    cliente: cliente,
                    //movimientos: movimientos,
                    //concepto: concepto,
                    responsable: responsable,
                    etapa: etapa,
                    moment: moment,
                    tfa: tfa
                })
            }
        })      
        }  
     
    } else {
        res.send('login',{
            login:false,
            name:'Debe iniciar sesión'
        })
    }
});

// 15 - Nuevo cliente
app.post('/create', (req,res)=>{
    const companyName = req.body.companyName;
    const responsableName = req.body.responsableName;
    const date = req.body.date;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const twitter = req.body.twitter;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const googleDrive = req.body.googleDrive;
    const otherLinks = req.body.otherLinks;
    const web = req.body.web;
    const tipo_proyecto = req.body.proyectos;
    const imagen = req.body.archivo;
    connection.query('INSERT INTO party_id SET ?', {
        razon_social:companyName, 
        responsable_empresa:responsableName,
        fecha_inicio:date, 
        facebook:facebook,
        instagram:instagram,
        twitter:twitter,
        email:email,
        number: phoneNumber,
        google_drive: googleDrive,
        other_links: otherLinks,
        web:web,
        tipo_proyecto: tipo_proyecto,
        imagen: imagen
        },
         async (error, result) => {
            if(error) {
                console.log(error);
            } else {
                let resultId = result.insertId
                console.log(result);
                res.redirect(`/cliente/${resultId}`); 
            }        
    });
});

// 16 - Creo el el post de una nueva transacción
app.post('/transaccion/:id', (req,res)=>{
    if(req.session.loggedin) {
        const id = parseInt(req.params.id);
        if (id > 0) {
            connection.query('SELECT * FROM party_id where id_cliente = ?', [id], function(error, rows){   
                if (error) {
                    throw error
                } else {
                    let cliente = rows.filter(function(p){return p.id_cliente == id});   
                    let transaccion = req.body.transaccion;
                    let destinatario = req.body.destinatario;
                    let fecha = req.body.fecha;
                    let monto = req.body.monto;
                    connection.query('INSERT INTO transacciones SET ?', {
                        id_cliente: cliente[0].id_cliente,
                        transaccion: transaccion,
                        destinatario: destinatario,
                        fecha_tran: fecha,
                        monto:monto
                    },
                    async (error, result) => {
                       if(error) {
                           console.log(error);
                       } else {
                        let resultId = result.insertId;
                        console.log(result);
                        res.redirect(`/cliente/${id}`); 
                       } 
                    });
            }
        })      
        }       
    } else {
        res.send('login',{
            login:false,
            name:'Debe iniciar sesión'
        })
    }
});

// 17 - Creo el el post de una nueva Etapa o TFA --> UNA SOLA TABLA PARA AMBOS CONCEPTOS <---
app.post('/etapa_tfa/:id', (req,res)=>{
    if(req.session.loggedin) {
        const id = parseInt(req.params.id);
        if (id > 0) {
            connection.query('SELECT * FROM party_id where id_cliente = ?', [id], function(error, rows){   
                if (error) {
                    throw error
                } else {
                    let cliente = rows.filter(function(p){return p.id_cliente == id});   
                    let tipo = req.body.tipo;
                    let titulo = req.body.titulo;
                    let fecha = req.body.fecha;
                    let descripcion = req.body.descripcion;
                    connection.query('INSERT INTO etapa_tfa SET ?', {
                        id_cliente: cliente[0].id_cliente,
                        tipo: tipo,
                        fecha_eta: fecha,
                        titulo: titulo,                        
                        descripcion:descripcion
                    },
                    async (error, result) => {
                       if(error) {
                           console.log(error);
                       } else {
                        let resultId = result.insertId;
                        console.log(result);
                        res.redirect(`/cliente/${id}`); 
                       } 
                    });
            }
        })      
        }       
    } else {
        res.send('login',{
            login:false,
            name:'Debe iniciar sesión'
        })
    }
});