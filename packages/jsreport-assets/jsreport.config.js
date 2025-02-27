
module.exports = {
  name: 'assets',
  main: './lib/main.js',
  worker: './lib/worker.js',
  optionsSchema: {
    extensions: {
      assets: {
        type: 'object',
        properties: {
          allowedFiles: { type: 'string' },
          allowAssetsLinkedToFiles: { type: 'boolean' },
          searchOnDiskIfNotFoundInStore: { type: 'boolean' },
          rootUrlForLinks: { type: 'string' },
          publicAccessEnabled: { type: 'boolean' }
        }
      }
    }
  },
  dependencies: ['scripts'],
  requires: {
    core: '3.x.x',
    studio: '3.x.x'
  }
}
