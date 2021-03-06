module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Goods = require('../../models/Goods')
    const AdminUser = require('../../models/AdminUser')

    //goods
    router.post('/goods', async (req, res) => {
        const model = await Goods.create(req.body)
        res.send(model)
    })
    router.put('/goods/:id', async (req, res) => {
        const model = await Goods.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.get('/goods', async (req, res) => {
        const items = await Goods.find()
        res.send(items)
    })
    router.get('/goods/lost', async (req, res) => {
        const items = await Goods.find({ radio: '招领启事',status: '审核通过' })
        res.send(items)
    })
    router.get('/goods/found', async (req, res) => {
        const items = await Goods.find({ radio: '寻物启事',status: '审核通过' })
        res.send(items)
    })
    router.get('/goods/:id', async (req, res) => {
        const model = await Goods.findById(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/goods/:id', async (req, res) => {
        await Goods.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    
    //check
    router.get('/check', async (req, res) => {
        const items = await Goods.find({ status: '待审核' })
        res.send(items)
    })
    router.put('/check/0/:id', async (req, res) => {
        const model = await Goods.findByIdAndUpdate(req.params.id, {status: '审核通过'})
        res.send(model)
    })
    router.put('/check/1/:id', async (req, res) => {
        const model = await Goods.findByIdAndUpdate(req.params.id, {status: '未过审'})
        res.send(model)
    })
    router.put('/check/1/:id', async (req, res) => {
        const model = await Goods.findByIdAndUpdate(req.params.id, {status: '未过审'})
        res.send(model)
    })

    //admin_users
    router.post('/admin_users', async (req, res) => {
        const model = await AdminUser.create(req.body)
        res.send(model)
    })
    router.put('/admin_users/:id', async (req, res) => {
        const model = await AdminUser.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.get('/admin_users/list', async (req, res) => {
        const items = await AdminUser.find()
        res.send(items)
    })
    router.get('/admin_users/:id', async (req, res) => {
        const model = await AdminUser.findById(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/admin_users/:id', async (req, res) => {
        await AdminUser.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })

    //上传文件
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    router.post('/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    //管理员登录
    router.post('/login', async (req, res) => {
        const { username, password } = req.body
        const user = await AdminUser.findOne({ username, password })
        if (!user) {
            return res.status(422).send({
                message: '用户名或密码错误'
            })
        }
        //返回token  npm i jsonwebtoken
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send(token)
    })

    app.use('/admin/api', router)

}