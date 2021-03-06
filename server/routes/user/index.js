module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Goods = require('../../models/Goods')
    const User = require('../../models/User')

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
        const items = await Goods.find({ status: '审核通过' }).limit(10)
        res.send(items)
    })
    router.get('/goods/lost', async (req, res) => {
        const items = await Goods.find({ radio: '招领启事', status: '审核通过' })
        res.send(items)
    })
    router.get('/goods/found', async (req, res) => {
        const items = await Goods.find({ radio: '寻物启事', status: '审核通过' })
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
    router.get('/search/:keyword', async (req, res) => {
        const reg = new RegExp(req.params.keyword)
        const items = await Goods.find({ name: reg, status: '审核通过' })
        res.send(items)
    })

    //users
    router.post('/register', async (req, res) => {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            return res.status(422).send({
                message: '用户名已被注册'
            })
        }
        const model = await User.create(req.body)
        res.send(model)
    })

    router.get('/personal/0/:userid', async (req, res) => {
        const model = await Goods.find({ userId: req.params.userid,status:'审核通过' })
        res.send(model)
    })
    router.get('/personal/1/:userid', async (req, res) => {
        const model = await Goods.find({ userId: req.params.userid,status:'待审核' })
        res.send(model)
    })
    router.get('/personal/2/:userid', async (req, res) => {
        const model = await Goods.find({ userId: req.params.userid,status:'未过审' })
        res.send(model)
    })

    app.use('/user/api', router)

    //上传文件
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/user/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    //用户登录
    router.post('/login', async (req, res) => {
        const { username, password } = req.body
        const user = await User.findOne({ username, password })
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
        res.send({ token })
    })

}