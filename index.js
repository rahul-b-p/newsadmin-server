const jsonServer = require('json-server')

const Router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const newsServer = jsonServer.create()

newsServer.use(middleware)
newsServer.use(Router)

PORT =3000 || process.env.PORT

newsServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at ${PORT}`);
})