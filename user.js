// ~/Library/Application\ Support/Ferdi/recipes/discord/user.js
module.exports = (config, Ferdi) => {
  console.log('prevent discord using option+horizontal_arrow');
  window.addEventListener('keydown', (ev) => {
    if (ev.altKey && !ev.metaKey && ['ArrowLeft','ArrowRight'].includes(ev.key)){
      ev.stopPropagation()
    }
  }, true)
}
