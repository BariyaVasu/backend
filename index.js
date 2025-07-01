import express from "express";
import cors from "cors"
const app = express();
const port = 9000;


const allowOrigin = ["https://frontend-ruby-seven-36.vercel.app"];
app.use(cors({
    origin: function (orign, callback) {
        if (!origin || allowOrigin.includes(orign)) {
            callback(null, true);
        } else{
            callback(new error("Not Alllowed By Cors"));
            
        }
    },
    methods :["GET", "POST", "DELETE", "PUT"],
    Credential:true,


}));


//old way to add function
// function abc (){}
// app.get("/", abc)


app.get("/", (req, res) => {
    res.send("Hello");
});

// app.get("/product", (req, res) => {
//     res.send([
//         {
//             "product": 1,
//             "category": "Smart Phone",
//             "product name": "IPhone"

//         },
//         {
//             "product": 2,
//             "category": "TV",
//             "product name": "Samsung LED Tv"

//         },
//         {
//             "product": 3,
//             "category": "Laptop",
//             "product name": "Asus Tuf Gaming Laptop"

//         },
//         {
//             "product": 4,
//             "category": "Accessories",
//             "product name": "Gaming Keyboard"

//         },
//         {
//             "product": 5,
//             "category": "Accessories",
//             "product name": "Gaming Mouse"

//         },
//         {
//             "product": 6,
//             "category": "Laptop",
//             "product name": "Lenova ideapad Gaming Laptop"

//         },
//         {
//             "product": 7,
//             "category": "Smart Phone",
//             "product name": "Samsung Galaxy S24"

//         },
//         {
//             "product": 8,
// "category": "Tablet",
//             "product name": "IPad 10 Pro"

//         },
//         {
//             "product": 9,
//             "category": "Accessories",
//             "product name": "Gaming HeadPhone"

//         },
//         {
//             "product": 10,
//             "category": "Laptop",
//             "product name": "Samsung"

//         },
//     ]);
// })

app.get("/:color", (req, res) => {
    // console.log(req.params.id);
    res.send(req.params.color);
})

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
})