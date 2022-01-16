const {ApolloServer} = require("apollo-server")
const mongoose = require('mongoose')
const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
const server = new ApolloServer({typeDefs, resolvers});



mongoose.connect(`mongodb+srv://softseekers:soft2588@cluster0.zlbm1.mongodb.net/roomsnearyouadmin?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    server.listen({ port: process.env.PORT || 4009 }).then(({url})=> {
        console.log(`Server is running: ${url}`)
    })
}).catch(err => {
    console.log(err);
});







