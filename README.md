Filla Fulla Chat
===

This repo hosts the source code for the browser-based chat application Filla Fulla Chat, which accompanies the exhibition [FILLA – FULLA: The Artist´s Fate](https://www.sng.sk/en/exhibitions/1502_filla-fulla-the-artists-fate).

## In-gallery mode (disable external links)

In the gallery space, we'd like to prevent people from following links to external websites. To access the project page with external links disabled, add the `disable-links=true` URL parameter like so:

https://fillafulla.sng.sk/?disable-links=true

The app sets a cookie to remember whether links should be disabled. Simply visit `https://fillafulla.sng.sk/?disable-links=false` to revoke this behaviour.

## Ingredients

The landing page uses:

- [Bootstrap 4](http://getbootstrap.com) (included in source)
- [Font Awesome 5](https://fontawesome.com/)

### Twine powered Chat app

The project includes a static `/chat/index.html` page, exported from [Twine](https://twinery.org/), as well as the source content of the chat 'Story' in `.twee` format, from which `/chat/index.html` can be compiled. To render the Filla Fulla story in the shape and style of a chat app, we use a custom 'Story Format' called 'Trialogue', which is maintained in [it's own repo](https://github.com/phivk/trialogue).

When updating the compiled story at `/chat/index.html`, the following snippets need to be inserted into the HTML for the page to function properly:

- `head-start.html`, including meta tags, favicons and font, at the start of `<head>`
- `head-end.html`, including stylesheets and Google Analytics, at the end of `<head>`
- `scripts.html`, including 'disable links' and 'image popup' scripts, at the end of `<body>`