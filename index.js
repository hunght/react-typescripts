process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error);
});

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
const {
    getMainTopic,
    createMainTopic,
    deleteMainTopic,
    updateMainTopic,
    topicCreateComment,
    responseCreateComment,
    topicCreateResponse,
    getResponse,
    updateResponse,
    allMainTopics
} = require('./api/handlers');

if (process.env.NODE_ENV == 'production') {
    console.log('web-admin run at port 3000');
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      });
}

app.post('/main-topic/', createMainTopic);
app.post('/main-topic/:topicId/comment', topicCreateComment);
app.post('/main-topic/:topicId/response', topicCreateResponse);
app.get('/main-topic/', allMainTopics);
app.get('/main-topic/:topicId', getMainTopic);
app.delete('/main-topic/:topicId/delete', deleteMainTopic);
app.put('/main-topic', updateMainTopic);
app.get('/response/:responseId', getResponse);
app.put('/response', updateResponse);
app.post('/response/:responseId/comment', responseCreateComment);
app.listen(process.env.PORT || 3000);
