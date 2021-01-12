# fix-discord-caret

Discord updated and started overriding <kbd>option</kbd>+<kbd>←</kbd> and <kbd>option</kbd>+<kbd>→</kbd> preventing the macOS default behavior of moving the caret by one word. To fix this, we can use Ferdi's `user.js` (or you could use the same code in a browser's userscripts extension/plugin).

1. In Ferdi, press <kbd>command</kbd>+<kbd>,</kbd> to open Ferdi's preferences. 
1. Choose `Your Services` in the left navigation of the settings window.
1. Click on the `Discord` service.
1. Scroll to the bottom of the window.
1. Click `Open user.js`
1. Open the file now shown in Finder in a text editor.
1. paste the code from [this repository's `user.js`](https://github.com/hcientist/fix-discord-caret/blob/main/user.js) into the text editor (replacing the existing content).
1. Save the file from the text editor
1. Restart Ferdi and you should now be able to use all of Discord's keyboard shortcuts except for <kbd>option</kbd>+<kbd>←</kbd> and <kbd>option</kbd>+<kbd>→</kbd>, which shoudl instead perform the usual macOS action of moving the caret by 1 word.