import mongoose from "mongoose";

const Orders = new mongoose.Schema({
    orderId: {type: String, unique: true, required: true},
    orderNumber: {type: String, unique: true, required: true},
    amount: {type: Number, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    description: {type: String, required: true},
})

export default mongoose.model('Orders', Orders)


