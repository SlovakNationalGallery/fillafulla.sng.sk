Filla Fulla Chat
===

This repo hosts the source code for the browser-based chat application Filla Fulla Chat, which accompanies the exhibition [FILLA – FULLA: The Artist´s Fate](https://www.sng.sk/en/exhibitions/1502_filla-fulla-the-artists-fate).

## Ingredients

The landing page uses:

- [Bootstrap 4](http://getbootstrap.com) (included in source)
- [Font Awesome 5](https://fontawesome.com/)

### Twine powered Chat app

The project includes a static `/chat/index.html` page, exported from [Twine](https://twinery.org/), as well as the source content of the chat 'Story' in `.twee` format, from which `/chat/index.html` can be compiled. To render the Filla Fulla story in the shape and style of a chat app, we use a custom 'Story Format' called 'Trialogue', which is maintained in [it's own repo](https://github.com/phivk/trialogue).

When updating the compiled story at `/chat/index.html`, the following snippets need to be inserted into the HTML for the page to function properly:

- Google Analytics script at the end of `<head>`
- top part of `<head>`, including meta tags, favicons and font
- `<script>` tags at the end of `<body>`