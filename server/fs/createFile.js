const fs = require('fs-extra')
const path = require('path')
const rootDir = require('./rootDir')

module.exports = async function (directory, name, data) {
  await fs.mkdirp(path.join(rootDir, directory))
  await fs.writeFile(path.join(rootDir, directory, name), data)
  return path.join(rootDir, directory, name)
}
