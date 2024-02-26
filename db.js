const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Princekumar15032003:Prince6205@cluster0.fst0uaj.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();

        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();

        global.food_items = data;
        global.food_categories = catData;

        // console.log("Data fetched successfully:", global.food_items);
        // console.log("Food categories fetched successfully:", global.food_categories);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = mongoDB;











































// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://Princekumar15032003:Prince6205@cluster0.fst0uaj.mongodb.net/gofoodmern?retryWrites=true&w=majority'

// const mongoDB = async () => {
//     await mongoose.connect(mongoURI,{useNewUrIparser: true},async(err,result)=>{
//         if(err) console.log("---",err)
//         else{
//            console.log("connected to mongodb");
//            const fetched_data = await mongoose.connection.db.collection("food_items");
//            fetched_data.find({}).toArray(async function(err, data){
//             const foodCategory = await mongoose.connection.db.collection("foodCategory");
//             foodCategory.find({}).toArray(function(err, catData){
//                 if(err) console.log(err);
//                 else{
//                     global.food_items = data;
//                     global.foodCategory = catData;

//                 }
//             })
//            })
//         }
//     });
// }

// module.exports = mongoDB;

