const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://Admin:Admin@cluster0-kyhjx.mongodb.net/albumDB?retryWrites=true&w=majority";

mongoose.connect(mongoDB,{useNewUrlParser:true});

//DELETE THIS AFTER PRODUCTION BUILD, AFTER EXPRESS LINES HAVE BEEN ADDED
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Add location to the build folder
//FINISH LINE

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title:String,
    artist:String,
    year:String,
    artwork:String
})

const AlbumModel = mongoose.model('album', albumSchema);

app.get('/albumDB', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/myAlbums', (req, res) => {

    AlbumModel.find((error, data) =>{
        res.json({myAlbums:data});
    })
})

app.get('/api/myAlbums/:id', (req, res)=>{
    console.log(req.params.id);

    AlbumModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.delete('/api/myAlbums/:id', (req, res)=>{
    console.log(req.params.id);

    AlbumModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.post('/api/myAlbums', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.title);
    console.log(req.body.artist);
    console.log(req.body.year);
    console.log(req.body.artwork);

    AlbumModel.create({
        title:req.body.title, 
        artist:req.body.artist,
        year:req.body.year, 
        artwork:req.body.artwork
    });

    res.json('post recieved!');
})

app.get("/api/myAlbums/:id", (req,res)=>{
    console.log("GET: " + req.params.id);
    
    AlbumModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})

app.put("/api/myAlbums/:id", (req, res)=>{
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    AlbumModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
        res.json(data);
    })
})


app.listen(port, () => console.log("Listening on port ${port}!"))

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/../build/index.html'));
// });
