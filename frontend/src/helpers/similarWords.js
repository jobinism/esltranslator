const datamuse = require('datamuse');

function getSynonyms(word) {

  return datamuse.words({
      rel_syn: word,
      max: 5
  });
}

// Example usage:

getSynonyms('happy').then((json) => {
  for (elem of json) {
      console.log("Word: Happy", "Synonyms:", elem.word, elem.score);
  }
});
