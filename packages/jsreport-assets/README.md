# @jsreport/jsreport-assets

[![NPM Version](http://img.shields.io/npm/v/@jsreport/jsreport-assets.svg?style=flat-square)](https://npmjs.com/package/@jsreport/jsreport-assets)

**jsreport extension embedding static assets like fonts or helpers into the templates**

See https://jsreport.net/learn/assets

## Changelog

### 3.6.1

- fix resolving assets as links

### 3.6.0

- add support for specifying what are the main document properties of assets entitySet

### 3.5.0

- errors from asset logic should be weak
- validate that passed asset path is string

### 3.4.4

- asset not found is marked as weak error

### 3.4.3

- fix {#asset} resolving when there is leading/trailing space in asset name

### 3.4.2

- changes to enable new `trustUserCode` option
- changes to enable caching of system helpers

### 3.4.1

- make asset editor component's code active display configurable

### 3.4.0

- fix asset link click from xlsx template preview
- update to improve the display of templates with xlsx in studio

### 3.3.0

fix studio usage of old property `scope`, new one: `sharedHelpersScope`

### 3.0.1

- use relative path to the currently evaluated entity (for example relative asset inside script should be relative to the script)

### 3.0.0-beta.1

Initial release for jsreport v3
New templating engine helpers introduced
```
{{#asset pathOrName}}
```
jsreport proxy extended with additional functions
```
const jsreport = require('jsreport-proxy')
jsreport.assets.read(path)
jsreport.assets.require(path)
jsreport.assets.registerHelpers(path)
```

