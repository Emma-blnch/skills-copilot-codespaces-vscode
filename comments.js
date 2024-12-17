// Create web server
var express = require('express');
var app = express();

// Create a new comment
app.post('/comments', function(req, res) {
    // Get the comment text from the request
    var comment = req.body.comment;
    // Save the comment to the database
    db.saveComment(comment, function(err) {
        if (err) {
            // If there was an error saving the comment, send an error response
            res.status(500).send('Error saving comment');
        } else {
            // If the comment was saved successfully, send a success response
            res.status(201).send('Comment saved');
        }
    });
});

// Get all comments
app.get('/comments', function(req, res) {
    // Get all comments from the database
    db.getComments(function(err, comments) {
        if (err) {
            // If there was an error getting the comments, send an error response
            res.status(500).send('Error getting comments');
        } else {
            // If the comments were retrieved successfully, send the comments in the response
            res.status(200).send(comments);
        }
    });
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});