const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');

app.use(express.static("Security"));
app.use(formidable());

// app.post('/create-post', function (req, res) {
//     const filePath = __dirname + '/data/posts.json';
//     const postContent = fs.readFileSync(filePath);
//     const posts = JSON.parse(postContent);
//     posts[Date.now()] = req.fields.blogpost;
    
//     fs.writeFileSync(filePath, JSON.stringify(posts));
//     res.send(200, posts);
// });
// app.get('/get-posts', function (req, res) {
//     const filePath = __dirname + '/data/posts.json';
//     res.sendfile(filePath);
// });


app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});