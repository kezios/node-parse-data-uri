# Parse Data Uri 

Parse a data uri into mime type and buffer. Typescript version of `junosuarez/node-parse-data-uri` with additionals data parsing.

## Installation
```bash
yarn add @kezios/parse-data-uri
```
## Usage
```js
import parseDataUri from '@kezios/parse-data-uri'

const dataUri = 'data:image/jpeg;name=MyName.png;base64,23423423...'

const parsed = parseDataUri(dataUri)

console.log(parsed)
// {
//   mimeType: 'image/jpeg',
//   data: Buffer < 00 00 00 ... >,
//   name: 'MyName'
// }
```

## contributors


Special thanks to :
 - @tootallnate for writing [data-uri-to-buffer](https://npm.im/data-uri-to-buffer)
 - @jden for the original version [parse-data-uri](https://github.com/junosuarez/node-parse-data-uri)

## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
