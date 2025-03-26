const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }))
app.get('/', (req, res)=>{
    res.send("congratulation you are connected to Express backend!")
})
app.get('/api', (req, res)=>{
    res.status(200).json({status: "Success", message: "If you see this message, congratulation you received this message from Express backend!"})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
