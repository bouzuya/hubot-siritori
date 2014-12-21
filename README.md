# hubot-siritori

A Hubot script to play siritori

## Installation

    $ npm install https://github.com/bouzuya/hubot-siritori/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-siritori/archive/{VERSION}.tar.gz

## Example

    bouzuya> boouzuya emanon001 でしりとりがしたい
      hubot> いいよ。まずは bouzuya ね。
    bouzuya> →りんご
      hubot> つぎは emanon001 ね。「りんご」だよ
    emanon001> りんご→ごりら
      hubot> つぎは bouzuya ね。「ごりら」だよ
    bouzuya> ごりら→らん
      hubot> ざんねん。おわりだよ。
             りんご→ごりら→らん

## Configuration

See [`src/scripts/siritori.coffee`](src/scripts/siritori.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-siritori
[travis-badge]: https://travis-ci.org/bouzuya/hubot-siritori.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-siritori
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-siritori.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-siritori
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-siritori.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
