// // const express = require('express')
// // const app = express()
// // const port = 5000
// // const mongoDB = require("./db")

// // mongoDB();

// // app.use((req,res,next)=>{
// //   res.setHeader("Access-Control-Allow-Origin", "https://65df3f590c7658161c232a92--quiet-youtiao-2455ac.netlify.app");
// //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// //   // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   next();
// // })

// // app.use(express.json());
// // app.use('/api', require("./Routes/CreatUser"));
// // app.use('/api', require("./Routes/DisplayData"));
// // app.use('/api', require("./Routes/OrderData"));
// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })


// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })
// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");

// mongoDB();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://food-delivery-app-prince.netlify.app/");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "*"); // Use wildcard to allow any headers
//   next();
// });

// app.use(express.json());
// app.use('/api', require("./Routes/CreatUser"));
// app.use('/api', require("./Routes/DisplayData"));
// app.use('/api', require("./Routes/OrderData"));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");

mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://food-delivery-app-prince.netlify.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
