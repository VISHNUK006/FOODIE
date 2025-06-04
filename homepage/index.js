import express from "express";

const app = express();
const port = 3000;


app.use(express.static('public'));


app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/login", (req, res)=>{
    res.render("login.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});


app.get("/locations", (req, res)=>{
    res.render("locations.ejs");
});

app.get("/menu", (req, res)=>{
    res.render("menu.ejs");
});

app.get("/orderonline", (req, res)=>{
    res.render("orderonline.ejs");
});

app.get("/orderonline", (req, res)=>{
    res.render("orderonline.ejs");
});

app.listen(port, () => {
    console.log('listening on port 3000.');
});
