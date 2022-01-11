/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

function getRandomId() {
  return Math.random().toString().slice(2);
}

module.exports = function (app) {
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

  app
    .route("/api/books")
    .get(function (req, res) {
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]

      res.json(
        books.map(({ title, _id, comments }) => ({
          _id,
          title,
          commentcount: comments.length,
        }))
      );
    })

    .post(function (req, res) {
      //response will contain new book object including atleast _id and title
      let title = req.body.title;
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
    })

    .delete(function (req, res) {
      //if successful response will be 'complete delete successful'
      books = [];
      res.send("complete delete successful");
    });

  app
    .route("/api/books/:id")
    .get(function (req, res) {
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}

      const book = books.find(({ _id }) => _id === bookid);

      if (!book) {
        return res.send("no book exists");
      }

      const { _id, title, comments } = book;
      return res.json({
        _id,
        title,
        comments,
      });
    })

    .post(function (req, res) {
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get

      if (comment === undefined) {
        return res.send("missing required field comment");
      }

      const book = books.find(({ _id }) => _id === bookid);

      if (!book) {
        return res.send("no book exists");
      }

      book.comments.push(comment);

      const { _id, title, comments } = book;
      return res.json({
        _id,
        title,
        comments,
      });
    })

    .delete(function (req, res) {
      let bookid = req.params.id;
      //if successful response will be 'delete successful'

      const index = books.findIndex(({ _id }) => _id === bookid);

      if (index === -1) {
        return res.send("no book exists");
      }

      books = [...books.slice(0, index), ...books.slice(index + 1)];

      res.send("delete successful");
    });
};
