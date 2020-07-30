const express = require('express');
const fileUpload = require('express');

const app = express();

app.use(fileUpload());

//Upload endpoint
app.post('/upload', (req,res)=>{
    if(req.files === null){
        res.status(404).json({
            err: 'file not found'
        });

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`,err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({filename: file.name, filePath:`/uploads/${file.name}`});
    })
    }
})

app.listen(5000, () => console.log('listening'))