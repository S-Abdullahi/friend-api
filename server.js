const express = require('express')
const app = express()
PORT = 8000

friend = {
    'qudus': {
        'name': 'Agbaje Abdulqudus',
        'occupation': 'enterpreneur',
        'interest' : 'cycling',
        'staus': 'single'
    },
    'dabiri': {
        'name': 'Dabiri Abdulhameed',
        'occupation': 'Engineer',
        'interest' : 'Sport',
        'staus': 'single'
    },
    'olalekan': {
        'name': 'Ogunsanya Abdulqudus',
        'occupation': 'enterpreneur',
        'interest' : 'software',
        'staus': 'married'
    },
    'unknown' : {
        'name': 'unknown',
        'occupation' : 'unknown',
        'interest' : 'unknown',
        'status' : 'unknown'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res) => {
    friendName = req.params.name.toLowerCase()
    if (friend[friendName]) {
        res.json(friend[friendName])
    }
    else{
        res.json(friend['unknown'])
    }
})
   



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`You are running on port ${PORT}. Go and catch it!`)
})