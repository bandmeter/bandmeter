const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('index', '/')
.add('newBand', '/bands/new', 'bands/new')                                    