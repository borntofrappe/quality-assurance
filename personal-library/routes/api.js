/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const mongoose = require("mongoose");

/*
function getRandomId() {
  return Math.random().toString().slice(2);
}
*/

module.exports = function (app) {
  const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    comments: {
      type: [String],
      default: [],
    },
  });

  const Book = mongoose.model("Book", bookSchema);

  /*
  const titles = [
    "Topsy-Turvy",
    "The Survivors of the Chancellor",
    "From the Earth to the Moon",
    "The Child of the Cavern",
  ];

  let books = titles.map((title) => ({
    title,
    _id: getRandomId(),
    comments: [],
  }));
  */

  app
    .route("/api/books")
    .get(function (req, res) {
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]

      Book.find({}, (err, data) => {
        if (err) {
          return res.json({ err });
        }

        res.json(
          data.map(({ title, _id, comments }) => ({
            _id,
            title,
            commentcount: comments.length,
          }))
        );
      });

      /* 
      res.json(
        books.map(({ title, _id, comments }) => ({
          _id,
          title,
          commentcount: comments.length,
        }))
      ); 
      */
    })

    .post(function (req, res) {
      //response will contain new book object including atleast _id and title
      let title = req.body.title;

      if (title === undefined) {
        return res.send("missing required field title");
      }

      const book = new Book({ title });

      book.save((err, data) => {
        if (err) {
          return res.json({
            err,
          });
        }

        const { _id, title } = data;
        res.json({
          _id,
          title,
        });
      });

      /*
      const _id = getRandomId();

      let book = {
        title,
        _id,
        comments: [],
      };

      books.push(book);

      res.json({
        _id,
        title,
      });
      */
    })

    .delete(function (req, res) {
      //if successful response will be 'complete delete successful'
      Book.deleteMany({}, (err) => {
        if (err) {
          return res.json({
            err,
          });
        }

        res.send("complete delete successful");
      });

      /*
      books = [];

      res.send("complete delete successful");
      */
    });

  app
    .route("/api/books/:id")
    .get(function (req, res) {
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}

      Book.findById(bookid, (err, data) => {
        if (err) {
          return res.json({
            err,
          });
        }

        if (!data) {
          return res.send("no book exists");
        }

        const { _id, title, comments } = data;

        res.json({
          _id,
          title,
          comments,
        });
      });

      /*
      const book = books.find(({ _id }) => _id === bookid);

      if (!book) {
        return res.send("no book exists");
      }

      const { _id, title, comments } = book;
      res.json({
        _id,
        title,
        comments,
      });
      */
    })

    .post(function (req, res) {
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get

      if (comment === undefined) {
        return res.send("missing required field comment");
      }

      /* FIND EDIT SAVE
      Book.findById(bookid, (err, data) => {
        if (err) {
          return res.json({
            err,
          });
        }

        if (!data) {
          return res.send("no book exists");
        }

        data.comments.push(comment);
        data.save((err, d) => {
          if (err) {
            return res.json({
              err,
            });
          }

          const { _id, title, comments } = d;
          res.json({
            _id,
            title,
            comments,
          });
        });
      });
      /* */

      // /* FIND UPDATE
      Book.findByIdAndUpdate(
        bookid,
        { $push: { comments: comment } },
        { new: true },
        (err, data) => {
          if (err) {
            return res.json({
              err,
            });
          }

          if (!data) {
            return res.send("no book exists");
          }

          const { _id, title, comments } = data;
          res.json({
            _id,
            title,
            comments,
          });
        }
      );
      /* */

      /*
      const book = books.find(({ _id }) => _id === bookid);

      if (!book) {
        return res.send("no book exists");
      }

      book.comments.push(comment);

      const { _id, title, comments } = book;
      res.json({
        _id,
        title,
        comments,
      });
      */
    })

    .delete(function (req, res) {
      let bookid = req.params.id;
      //if successful response will be 'delete successful'

      Book.findByIdAndDelete(bookid, (err, data) => {
        if (err) {
          return res.json({
            err,
          });
        }

        if (!data) {
          return res.send("no book exists");
        }

        res.send("delete successful");
      });

      /*
      const index = books.findIndex(({ _id }) => _id === bookid);

      if (index === -1) {
        return res.send("no book exists");
      }

      books = [...books.slice(0, index), ...books.slice(index + 1)];

      res.send("delete successful");
      */
    });
};
