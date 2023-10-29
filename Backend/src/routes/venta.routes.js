const {Router}=require('express')
const VentaController = require('../controllers/venta.controller')
const router=Router()
const controller= new VentaController()

router.get('/', async(req,res)=>{
    const ventas = await controller.index()
    res.json({ventas})
})

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const venta =await controller.findOne(id)
        res.status(200).json({venta})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.post('/', async (req,res)=>{
    const {date,price,producto_id,vendedor_id,comprador_id}=req.body
    const venta=await controller.create({date,price,producto_id,vendedor_id,comprador_id})
    res.status(201).json({user})
})

router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const {date='',price='',producto_id='',vendedor_id='',comprador_id=''}=req.body
    const values= {}
    if(date) values.date=date
    if(price) values.price= price
    if(producto_id) values.producto_id=producto_id
    if(vendedor_id)values.vendedor_id=vendedor_id
    if(comprador_id)values.comprador_id=comprador_id
    try{
        const venta= await controller.update(id,values)
        res.status(200).json({venta})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const {id}=req.params
    try{
        const venta = await controller.delete(id)
        res.status(200).json({venta})
    }catch(error){
        res.status(404).json({message: error.message})
    }
})
module.exports= router