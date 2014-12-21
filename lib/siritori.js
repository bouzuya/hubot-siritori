
var Siritori, Word;

Word = require('./word').Word;

Siritori = (function() {
  function Siritori(members) {
    this.members = members;
    this.memberIndex = 0;
    this.words = [];
    this.last = null;
  }

  Siritori.prototype.isValidWord = function(s) {
    var lastWord, word, _ref;
    try {
      word = new Word(s);
      if (this.words.length === 0) {
        return true;
      }
      _ref = this.words, lastWord = _ref[_ref.length - 1];
      return lastWord.lastChar() === word.firstChar();
    } catch (_error) {
      return false;
    }
  };

  Siritori.prototype.nextWord = function(s) {
    var word;
    if (this.isOver()) {
      return;
    }
    if (!this.isValidWord(s)) {
      return;
    }
    word = new Word(s);
    if (word.lastChar() === 'ン') {
      this.last = s;
      return;
    }
    if (this.words.filter(function(i) {
      return i.toString() === word.toString();
    }).length > 0) {
      this.last = s;
      return;
    }
    this.words.push(word);
    return this.memberIndex = (this.memberIndex + 1) % this.members.length;
  };

  Siritori.prototype.allWords = function() {
    var words;
    words = this.words.map(function(w) {
      return w.toString();
    });
    if (this.last != null) {
      return words.concat([this.last]);
    } else {
      return words;
    }
  };

  Siritori.prototype.lastWord = function() {
    var last, _ref, _ref1;
    _ref = this.words, last = _ref[_ref.length - 1];
    return (_ref1 = last != null ? last.toString() : void 0) != null ? _ref1 : '';
  };

  Siritori.prototype.nextMember = function() {
    return this.members[this.memberIndex];
  };

  Siritori.prototype.isOver = function() {
    return this.last != null;
  };

  return Siritori;

})();

module.exports.Siritori = Siritori;
