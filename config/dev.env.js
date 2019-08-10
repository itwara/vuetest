'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE: '"https://test.mellicapen.com"',
  SUB_VER: '"' + process.env.SUB_VER + '"'
})
