import mongoose from 'mongoose';

const user = process.env.MONGO_USER;
const psw = process.env.PILTDB_PASS;

const uri = `mongodb+srv://${user}:${psw}@cluster0.iaiel.mongodb.net/piltover?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

export const connection = mongoose.connection;