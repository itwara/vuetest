'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  API_BASE: '"https://test.mellicapen.com"',
  NODE_ENV: '"testing"'
})
