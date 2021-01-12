// ==UserScript==
// @name        Fix Move Caret by Word in Discord on macOS
// @namespace   hcientist
// @description Fixes issue where Discord updated and started overriding <kbd>option</kbd>+<kbd>←</kbd> and <kbd>option</kbd>+<kbd>→</kbd>, preventing the macOS default behavior of moving the caret by one word.
// @match       https://discord.com/*
// @version     0.0.1
// @license     MIT
// @grant       none
// @supportURL  https://github.com/hcientist/fix-discord-caret/issues
// ==/UserScript==

console.log('prevent discord using option+horizontal_arrow');
window.addEventListener('keydown', (ev) => {
  if (ev.altKey && !ev.metaKey && ['ArrowLeft','ArrowRight'].includes(ev.key)){
    ev.stopPropagation()
  }
}, true)
