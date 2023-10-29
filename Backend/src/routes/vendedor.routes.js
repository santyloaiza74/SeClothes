const {Router}=require('express')
const VendedorController = require('../controllers/vendedor.controller')
const router=Router()
const controller= new VendedorController()

router.get('/', async(req,res)=>{
    const vendedors = await controller.index()
    res.json({vendedors})
})

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const vendedor =await controller.findOne(id)
        res.status(200).json({vendedor})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.post('/', async (req,res)=>{
    const {name,lastname,email,addres,phone}=req.body
    const vendedor=await controller.create({name,lastname,email,addres,phone})
    res.status(201).json({user})
})

router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const {name='',lastname='',email='',addres='',phone=''}=req.body
    const values= {}
    if(name) values.name=name
    if(lastname) values.lastname= lastname
    if(email) values.email=email
    if(addres)values.addres=addres
    if(phone)values.phone=phone
    try{
        const vendedor= await controller.update(id,values)
        res.status(200).json({vendedor})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const {id}=req.params
    try{
        const vendedor = await controller.delete(id)
        res.status(200).json({vendedor})
    }catch(error){
        res.status(404).json({message: error.message})
    }
})
module.exports= router