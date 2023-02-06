const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/",(req,res)=>
{
    res.send("<head</head><body><b><h1>Welcome to AlmaBetter Server</h1><a href='/nextpage'>Next Page</a></b></body>")
})
app.get("/nextpage",(req,res)=>{
    res.send("<html><head><style>body{background-color:yellow}</style></head><body><b><h1>Welcome to AlmaBetter New Page</h1></b></body></html>")
})

app.listen(8080,'0.0.0.0',()=>{
    console.log("Node.js Server Started")
})