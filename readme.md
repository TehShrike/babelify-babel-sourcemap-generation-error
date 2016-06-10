Reproduction of an issue in browserify/babelify/babel.

The error occurs when:

- using babelify
- babel is producing source maps
- the code contains a line with an expression, followed by a comment
- the package.json contains a `browserify` section like so:

```json
"browserify": {
	"transform": [
		[
			"babelify"
		]
	]
}
```

## To reproduce

- `git clone https://github.com/TehShrike/babelify-babel-sourcemap-generation-error.git`
- `cd babelify-babel-sourcemap-generation-error`
- `npm install`
- `node transpile.js`

### Expected:

Browserified JavaScript (with source map) to spew to stdout.

### Observed:

```
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: /Users/josh/git/babel-sourcemap-error/index.js: Invalid mapping: {"generated":{"line":1,"column":0,"lastColumn":null},"source":null,"original":{"line":null,"column":null},"name":null}
    at SourceMapGenerator_validateMapping [as _validateMapping] (/Users/josh/git/babel-sourcemap-error/node_modules/source-map/lib/source-map-generator.js:277:13)
    at SourceMapGenerator_addMapping [as addMapping] (/Users/josh/git/babel-sourcemap-error/node_modules/source-map/lib/source-map-generator.js:101:12)
    at /Users/josh/git/babel-sourcemap-error/node_modules/babel-core/lib/transformation/file/index.js:450:29
    at Array.forEach (native)
    at SourceMapConsumer_eachMapping [as eachMapping] (/Users/josh/git/babel-sourcemap-error/node_modules/source-map/lib/source-map-consumer.js:155:14)
    at /Users/josh/git/babel-sourcemap-error/node_modules/babel-core/lib/transformation/file/index.js:443:26
    at File.mergeSourceMap (/Users/josh/g
```
