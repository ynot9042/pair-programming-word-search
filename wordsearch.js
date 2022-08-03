// Paired Programming With Bailee Doherty

const wordSearch = (letters, word) => {
  if (word === "") {
    return undefined;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let result = false;
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
    }
  }

  let length = letters[0].length;

  for (i = 0; i < length; i++) {
    let verticalArray = [];
    for (j = 0; j < letters.length; j++) {
      verticalArray.push(letters[j][i]);
    }
    let verticalJoin = verticalArray.join("");

    if (verticalJoin.includes(word)) {
      result = true;
    }
  }
  return result;
};

module.exports = wordSearch;
