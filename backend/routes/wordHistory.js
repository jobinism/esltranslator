const express = require('express');
const router = express.Router();

module.exports = ({
  getUsersWords,
  addPost
}) => {
  router.get('/:id', (req, res) => {
    console.log(req.params.id);
    getUsersWords(req.params.id)
    .then(posts => res.json(posts))
    .catch((err) => res.json({
      error: err.message
    }));
  });

  router.put('/', (req, res) => {
    const {
      user_id,
      engWord,
      transWord,
      definition
    } = req.body
    addPost
  })

  return router;
};