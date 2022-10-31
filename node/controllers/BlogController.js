import res from "express/lib/response";
import BlogModel from "../models/BlogModel";

//?Metodos para el CRUD
export const getAllBlogs = async (req,res)=>{
    try{
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    }
    catch (error){
        res.json({message: error.message});
    }
}

//*Mostrar
export const getBlog = async (req,res)=>{
    try{
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])        
    }
    catch (error){
        res.json({message: error.message});
    }
}

//*Crear
export const createBlog =async (req,res)=>{
    try{
        await BlogModel.create(req.body)
        res.json({"message":"Registro Creado Exitosamente"})
    }
    catch(error){
        res.json({message: error.message});
    }
}
//*Actualizar
export const updateBlog = async (req,res)=>{
    try{
        await BlogModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"Registro Modificado Exitosamente"})
    }
    catch(error){
        res.json({message: error.message});
    }
}
//*Eliminar
export const deleteBlog = async (req,res)=>{
    try{
        await BlogModel.destroy(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"Registro Eliminado Exitosamente"})
    }
    catch(error){
        res.json({message: error.message});
    }
}