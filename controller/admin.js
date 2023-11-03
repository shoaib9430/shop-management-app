const Product = require('../model/model');

exports.addProduct = async (req,res,next)=>{
    try{
        const itemData = await Product.create({
            name:req.body.name,
            price :req.body.price,
            description :req.body.description,
            quantity : req.body.quantity
        })
        res.status(200).json(itemData)
    }
    catch(err){
        res.stauts(500).json({message:'Data Not Found'})
    }

};

exports.buyProduct = async(req,res,next) =>{
    try{
        const id = req.params.id;
        const newValue = req.body.newValue;
        const item = await Product.findByPk(id);
        const oldquantity = item.dataValues.quantity;
        const updatedQuantity = oldquantity-newValue;
        let updatedData;
        if(item){
            item.quantity = updatedQuantity;
            updatedData = await item.save()
        }
        res.status(200).json(updatedData);
    }
    catch(err){
        res.status(500).json({message:'Incorect data'})
    }
};

exports.getAllProducts = async(req,res,next) =>{
    try{
        const dbData = await Product.findAll()
        const data = dbData.map(data => data.dataValues);
        res.status(201).json(data);
    }
    catch(err){
        res.status(500).json({ error: 'Error getting data to the database' });
    }
};