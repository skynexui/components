# SkynexUI

[<img width="150px" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />](https://vercel.com/?utm_source=skynexui&utm_campaign=oss)

> Use the platform, don't care about how to style there
> 
> ⚠️ Version 1.x.x is **alpha**, trust only in v2

A set of components writen on top of React and React Native (with Expo) made for you deliver code for mobile devices and for the web using the best structures that the React ecossystem can provide with a seamless and standardized API.

> You can see a preview [version here](https://twitter.com/omariosouto/status/1432528844599214080) and the [initial code here](https://github.com/omariosouto/mariosouto.com/tr ee/v1/packages/universal-ui/src/components) and an [app demo](https://github.com/omariosouto/pokedex-skynexui)

![E-Fcs6mWQAQCCK9](https://user-images.githubusercontent.com/13791385/132002310-799ac565-e8ab-4c56-be78-253c1f532d49.jpeg)

## Get Started

> If you just want to try it out, go directly to the examples folder: https://github.com/skynexui/core/tree/main/examples or check this project https://github.com/omariosouto/pokedex-skynexui

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
The project is in alpha and there's no fancy structures for contributing, for now you [just have to check the current issues](https://github.com/skynexui/core/issues) pick one and to run the project in your machine you have to:

```sh
# inside project root
yarn install

yarn build:watch
```

Then go to the `examples` folder, choose some project and then run:

```sh
yarn install && cd ./node_modules/react && yarn link && cd ../../ && yarn link @skynexui/web && yarn link @skynexui/native && yarn link react && yarn dev
```
> `yarn dev` in the monorepo example could be `yarn dev:web` or `yarn dev:native`

## Strongly Inspired by:
- [Flutter](https://flutter.dev/)
- [xStyled](https://xstyled.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [RefactoringUI](https://www.refactoringui.com/)


## Supporters

| Companies that trust in this project |
| --- |
| [<img src="https://www.likeaboss.com.br/wp-content/uploads/2016/02/alura-dark.svg" width="100px" />](https://alura.com.br/) |
