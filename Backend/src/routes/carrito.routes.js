const {Router}=require('express')
const CarritoController = require('../controllers/carrito.controller')
const router=Router()
const controller= new CarritoController()

router.get('/', async(req,res)=>{
    const carrito = await controller.index()
    res.json({carrito})
})

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const carrito =await controller.findOne(id)
        res.status(200).json({carrito})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.post('/', async (req,res)=>{
    const {comprador_id,producto_id}=req.body
    const carrito=await controller.create(comprador_id,producto_id)
    res.status(201).json({carrito})
})

router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const {comprador_id='',producto_id=''}=req.body
    const values= {}
    if(comprador_id) values.comprador_id= comprador_id
    if(producto_id) values.producto_id= producto_id
    try{
        const carrito= await controller.update(id,values)
        res.status(200).json({carrito})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const {id}=req.params
    try{
        const carrito = await controller.delete(id)
        res.status(200).json({carrito})
    }catch(error){
        res.status(404).json({message: error.message})
    }
})
module.exports= router