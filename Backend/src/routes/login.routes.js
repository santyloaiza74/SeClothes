const {Router}=require('express')
const LoginController = require('../controllers/login.controller')
const router=Router()
const controller= new LoginController()

router.get('/', async(req,res)=>{
    const users = await controller.index()
    res.json({users})
})

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const user =await controller.findOne(id)
        res.status(200).json({user})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.post('/', async (req,res)=>{
    const {username,password,status}=req.body
    const user=await controller.create(username,password,status)
    res.status(201).json({user})
})

router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const {username='',password='',status=''}=req.body
    const values= {}
    if(username) values.username= username
    if(password) values.password= password
    if(status) values.status=status
    try{
        const user= await controller.update(id,values)
        res.status(200).json({user})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const {id}=req.params
    try{
        const user = await controller.delete(id)
        res.status(200).json({user})
    }catch(error){
        res.status(404).json({message: error.message})
    }
})
module.exports= router