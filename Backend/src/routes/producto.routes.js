const {Router}=require('express')
const ProductoController = require('../controllers/producto.controller')
const router=Router()
const controller= new ProductoController()

router.get('/', async(req,res)=>{
    const producto = await controller.index()
    res.json({producto})
})

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const producto =await controller.findOne(id)
        res.status(200).json({producto})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.post('/', async (req,res)=>{
    const {name,description,state,price,image,categoria,subasta_id}=req.body
    const producto=await controller.create({name,description,state,price,image,categoria,subasta_id})
    res.status(201).json({producto})
})

router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const {name='',description='',state='',price='',image='',categoria='',subasta_id=''}=req.body
    const values= {}
    if(name) values.name=name
    if(description) values.description= description
    if(state) values.state=state
    if(price)values.price=price
    if(image)values.image=image
    if(categoria)values.categoria=categoria
    if(subasta_id)values.subasta_id=subasta_id
    try{
        const producto= await controller.update(id,values)
        res.status(200).json({producto})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const {id}=req.params
    try{
        const producto = await controller.delete(id)
        res.status(200).json({producto})
    }catch(error){
        res.status(404).json({message: error.message})
    }
})
module.exports= router