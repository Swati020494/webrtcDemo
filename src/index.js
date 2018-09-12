import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', function (req, res) {
 res.send('Hello Swati!')
});
app.listen(PORT, function () {
 console.log(`Example app listening on port ${PORT}!`);
});