import express from "express";
import  cors  from "cors";
//?Importando la conexión a la base de datos
import db from "./database/db";
//?Importando rutas
import router from "./routes/routes";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs',router)

try{
    await db.authenticate()
    console.log('Conexion completada')
}
catch(error){
    console.log('Error en la Conexión')
}
/* 
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
}) */

app.listen(8000,()=>{
    console.log('Server Up Running in http://localhost:8000/')
})