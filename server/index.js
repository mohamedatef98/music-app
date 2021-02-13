require('dotenv').config()
const { readFile } = require('fs-extra')
const { join } = require('path')
const ImageFile = require('./db/models/ImageFile')

async function main () {
  const data = await readFile(join(__dirname, '../', 'package.json'))
  const res = await ImageFile.create({ name: 'another.json', file: data })
  console.log(res)
}
main ()
