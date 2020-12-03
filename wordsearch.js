//Peer Programmed with Jared Mosher


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(l => l.join(''))
    const verticalJoin = transpose(letters).map(l => l.join(''));
    

    for (let row of horizontalJoin) {
        if (row.includes(word)) {
            return true;
        }
    };

    for (let col of verticalJoin) {
        if (col.includes(word)) {
            return true;
        }
    };
    return false;
};

const transpose = function(letters) {
let arr = [];
    for (let i = 0; i < letters[0].length; i++) {
      arr.push([]);
    }
    for (let row = 0; row < letters.length; row++) {
      for (let col = 0; col < letters[row].length; col++) {
        arr[col][row] = letters[row][col];
      }
    }
    return arr;
  };

module.exports = wordSearch;