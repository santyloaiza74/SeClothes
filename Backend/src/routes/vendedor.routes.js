const {Router}=require('express')
const VendedorController = require('../controllers/vendedor.controller')
const router=Router()
const controller= new VendedorController()

router.get('/', async(req,res)=>{
    const vendedor = await controller.index()
    res.json({vendedor})
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
    const {name,lastname,email,address,phone}=req.body
    const vendedor=await controller.create(name,lastname,email,address,phone)
    res.status(201).json({vendedor})
})

router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const {name='',lastname='',email='',address='',phone=''}=req.body
    const values= {}
    if(name) values.name=name
    if(lastname) values.lastname= lastname
    if(email) values.email=email
    if(address)values.address=address
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