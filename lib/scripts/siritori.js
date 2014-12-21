// Description
//   A Hubot script to play siritori
//
// Configuration:
//   None
//
// Commands:
//   hubot <members>でしりとりがしたい - play siritori
//
// Author:
//   bouzuya <m@bouzuya.net>
//
var Siritori;

Siritori = require('../siritori').Siritori;

module.exports = function(robot) {
  var siritori;
  siritori = null;
  robot.respond(/(.+?)で?しりとりが?したい$/, function(res) {
    var members;
    members = res.match[1].split(/\s+/).filter(function(i) {
      return i.length > 0;
    });
    siritori = new Siritori(members);
    return res.send("いいよ。まずは " + (siritori.nextMember()) + " ね。");
  });
  return robot.hear(/^(.*)→(.+)$/, function(res) {
    var next, prev;
    if (siritori == null) {
      return;
    }
    if (siritori.isOver()) {
      return;
    }
    prev = res.match[1];
    next = res.match[2];
    if (prev !== siritori.lastWord()) {
      return;
    }
    if (!siritori.isValidWord(next)) {
      return;
    }
    siritori.nextWord(next);
    if (siritori.isOver()) {
      return res.send('ざんねん。おわりだよ\n' + siritori.allWords().join('→'));
    } else {
      return res.send("つぎは " + (siritori.nextMember()) + " ね。「" + (siritori.lastWord()) + "」だよ");
    }
  });
};
