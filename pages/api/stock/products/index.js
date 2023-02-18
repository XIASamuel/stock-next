import { connect, model, models, Schema } from "mongoose"
const connectionString = 'mongodb+srv://user1:wsxcj123456@cluster0.yfyaxmj.mongodb.net/stock'

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const docs = await Products.find()
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        console.log(req.body)
        // res.status(200).json(req.body)
        const doc = await Products.create(req.body)
        res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



const ProductsSchema = new Schema({
    code: String,
    name: String,
    price: Number
});

console.log("Mongoose Models", models)
const Products = models?.Products || model('Products', ProductsSchema);