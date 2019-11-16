const config = require('../config/config')
const redis_host = process.env.REDIS_HOST ? process.env.REDIS_HOST : config.REDIS_HOST || localhost
const redis_port = process.env.REDIS_PORT ? process.env.REDIS_PORT : config.REDIS_PORT || 6379
const redis_options = process.env.REDIS_OPTIONS ? process.env.REDIS_OPTIONS : config.REDIS_OPTIONS || {}
const redisClient = require('redis').createClient(redis_port, redis_host, redis_options)

/* redisClient.on('ready', (err) => {
    console.log('redis client is ready to connect to ' + redis_host)
}) */
redisClient.on('connect', () => {
    console.log(`redis client connected to ${redis_host}`)
})
redisClient.on('reconnecting', (err) => {
    console.log(`${err} redis client reconnecting while connecting to ${redis_host}`)
})
redisClient.on('warning', (err) => {
    console.log(`${err} redis client warning while connecting to ${redis_host}`)
})
redisClient.on('error', (err) => {
    console.log(`${err} redis client error while connecting to ${redis_host}`)
})
redisClient.on('end', (err) => {
    console.log(`${err} redis client connection ended to ${redis_host}`)
})

module.exports = redisClient
