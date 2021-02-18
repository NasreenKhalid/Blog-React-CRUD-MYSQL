const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();

const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM posts", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
}
    );   
});

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    }
    );   
    });

// Route for creating the post
app.post('/api/create', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;

console.log(username,title,text)

db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
       console.log(err)
   } 
   console.log(result)
}
);   
})

// Route for like
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
    console.log(err)
    } 
    console.log(result)
    }
    );    
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
    const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } 
})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})