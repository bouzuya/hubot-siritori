
var Word;

Word = (function() {
  function Word(s) {
    if (!s.match(/^[\u3041-\u3096\u30A1-\u30F6\u30FB\u30FC]+$/)) {
      throw Error();
    }
    if (!s.match(/^[\u3041-\u3096\u30A1-\u30F6]/)) {
      throw Error();
    }
    if (!s.match(/[\u3041-\u3096\u30A1-\u30F6]$/)) {
      throw Error();
    }
    this.s = s;
  }

  Word.prototype.toString = function() {
    return this.s;
  };

  Word.prototype.firstChar = function() {
    return this._siritoriChar(this.s[0]);
  };

  Word.prototype.lastChar = function() {
    return this._siritoriChar(this._lastChar(this.s));
  };

  Word.prototype._lastChar = function(s) {
    var c;
    c = s[s.length - 1];
    if (c.match(/[\u30FB\u30FC]/)) {
      return this._lastChar(s);
    } else {
      return c;
    }
  };

  Word.prototype._siritoriChar = function(c) {
    var dst, k, src, table;
    src = 'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ'.split('');
    dst = 'カキクケコサシスセソタチツテトハヒフヘホハヒフヘホ'.split('');
    table = {};
    src.forEach(function(c, index) {
      return table[c] = dst[index];
    });
    k = c.match(/[\u3041-\u3096]/) ? String.fromCharCode(c.charCodeAt(0) + 0x0060) : c;
    return k.replace(/./g, function(c) {
      if (table[c] != null) {
        return table[c];
      } else {
        return c;
      }
    });
  };

  return Word;

})();

module.exports.Word = Word;
