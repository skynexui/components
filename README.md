# SkynexUI

> Use the platform, don't care about how to style there
> 
> ⚠️ Version 1.x.x is **alpha**, trust only in v2

A set of components writen on top of React and React Native (with Expo) made for you deliver code for mobile devices and for the web using the best structures that the React ecossystem can provide with a seamless and standardized API.

> You can see a preview [version here](https://twitter.com/omariosouto/status/1432528844599214080) and the [initial code here](https://github.com/omariosouto/mariosouto.com/tree/v1/packages/universal-ui/src/components) with a [app demo](https://github.com/omariosouto/mariosouto.com/tree/v1/packages/universal-ui/src/patterns/qrcode-generator)

## Get Started
This repo exports 2 packages `@skynexui/web` and `@skynexui/native`
- Always use `@skynexui/native` for imports
- If you are writing a web project, please use [`babel-plugin-skynexui`](https://www.npmjs.com/package/babel-plugin-skynexui)
```js
// # babel.config.js
module.exports = {
  presets: ['next/babel'], // Eg: using NextJS
  plugins: [['babel-plugin-skynexui', { commonjs: true }]],
}
```


## But why?
Recently I see that there's many people trying to use CrossPlatform alternatives for Mobile and Web (eg. Flutter Web) for web development, and based in it's current perfomance, a11y and support for breakpoints I truly believe that we already have nice structures and this repo starts with the idea to prove that we have tooling for delivery the great part of the apps that we have in today's development with high quality developer experience considering tools like [NextJS](https://nextjs.org/) for the web and [Expo](https://expo.dev/) for mobile development.  

## Contributing?
Right now the project is not open for contributors but soon will be. For now, [leave your ideas and questions as an issue](https://github.com/skynexui/core/issues)!

## Strongly Inspired by:
- [Flutter](https://flutter.dev/)
- [xStyled](https://xstyled.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [RefactoringUI](https://www.refactoringui.com/)


## Supporters

| Companies that trust in this project |
| --- |
| [<img src="https://www.likeaboss.com.br/wp-content/uploads/2016/02/alura-dark.svg" width="100px" />](https://alura.com.br/) |
