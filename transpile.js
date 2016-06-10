const browserify = require('browserify')

const b = browserify({
	entries: ['./index.js'],
	debug: true
}).transform('babelify')

b.bundle().pipe(process.stdout)
