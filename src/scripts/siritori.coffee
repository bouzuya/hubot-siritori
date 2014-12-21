# Description
#   A Hubot script to play siritori
#
# Configuration:
#   None
#
# Commands:
#   hubot <members>でしりとりがしたい - play siritori
#
# Author:
#   bouzuya <m@bouzuya.net>
#
{Siritori} = require '../siritori'

module.exports = (robot) ->
  siritori = null

  robot.respond /(.+?)で?しりとりが?したい$/, (res) ->
    members = res.match[1].split(/\s+/).filter (i) -> i.length > 0
    siritori = new Siritori(members)
    res.send "いいよ。まずは #{siritori.nextMember()} ね。"

  robot.hear /^(.*)→(.+)$/, (res) ->
    return unless siritori?
    return if siritori.isOver()
    prev = res.match[1]
    next = res.match[2]
    return unless prev is siritori.lastWord()
    return unless siritori.isValidWord(next)
    siritori.nextWord(next)
    if siritori.isOver()
      res.send 'ざんねん。おわりだよ\n' + siritori.allWords().join('→')
    else
      res.send """
      つぎは #{siritori.nextMember()} ね。「#{siritori.lastWord()}」だよ
      """
