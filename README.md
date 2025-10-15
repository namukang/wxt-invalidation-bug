# WXT Invalidation Bug

This repository reproduces a bug in WXT where all content scripts are incorrectly invalidated when it is injected into the same tab multiple times. This is caused by the asynchronous nature of `window.postMessage`.

### Description

The extension injects the same content script twice into the active tab when the extension icon is clicked.

The content script logs a `hello` message to the console and an `invalidated` message when it is invalidated.

### Steps to reproduce:

1. Run `wxt dev`
2. Navigate to http://example.com
3. Open the console
4. Click the extension icon

### Expected behavior

Only the first content script is invalidated.

### Actual behavior

Both content scripts are invalidated.
