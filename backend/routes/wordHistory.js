const express = require('express');
const router = express.Router();

module.exports = ({
  getUsersWords,
  addPost
}) => {
  // gets the word history of a given user
  router.get('/:id', (req, res) => {
    getUsersWords(req.params.id)
    .then(posts => res.json(posts))
    .catch(err => console.error(err));
  });

  // adds a word into the word history
  router.post('/:id', (req, res) => {
    const {
      user_id,
      engWord,
      transWord,
      definition
    } = req.body
    return addPost( engWord, transWord, definition, user_id );
  })

  return router;
};