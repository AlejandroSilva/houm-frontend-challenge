# Houm frontend challenge

This is a challenge to get a frontend developer at Houm.com, the challenge as to fetch a public API and show the data as "hero cards".

To apply I use a public API get the Villages of [Animal Crossing](https://animal-crossing.com/es/), a popular Nintendo Switch game.

In the game you can invite 9 of 487 villagers available to your island, every one with his own personality, look, 
likes, and background stories, this page is intended to show all the villagers and help to find the perfect ones for
your island.

## Considerations on technical decisions:
- [Typescript](https://www.typescriptlang.org/) definitions are lighted used.
- [Vite](https://vitejs.dev/) as dev and build tool: quick and simple defaults.
- [Vercel](https://vercel.com) as hosting. Its well integrated with vite, with a git push on `main` the code is deployed.
- No CSS framework or collection of components were used. As it was a very simple page.
- The CSS Variables used are the same used by Houm.com, extracted using the [CSS Overview feature of Chrome](https://developer.chrome.com/docs/devtools/css-overview/).
- The [BEM](http://getbem.com/) methodology was used as naming convention to keep the CSS in order.
- Deep in the development I notice that the api takes soo much time when certain filters changes, sadly there's no time left 
to find other public API, so please take it in consideration.

## Local development
```bash
$ npm run install
$ npm run dev
$ open http://localhost:3000
```

## Deploy to "production"
The code is deployed to Vercel servers on git push. Vercel has a pretty good integration with vite, and the default
settings works perfect on the first try for this project. A full deploy is made in less than a minute.
```bash
$ git checkout main
$ git push
```

The "production" site is hosted on [https://houm-frontend-challenge-alejandrosilva.vercel.app](https://houm-frontend-challenge-alejandrosilva.vercel.app).

## Other useful tools and links
- [Nookpedia](https://nookipedia.com/wiki/Main_Page) A community-driven wiki for Animal Crossing data. They were kindly enough to allow me to use his Api. 
- [i want hue](https://medialab.github.io/iwanthue/) "colors for data scientists" a color palette generator for large datasets.
- [color hex](https://www.color-hex.com/color-palettes/?page=1) a curated list of handpicked color palettes.


# To-Do list
[] make the NavBar responsibe
[] the api return data in English, add i18n to the front-end to parse a few fields

# Screenshots

All the Villagers availables
![All the Villagers availables](https://user-images.githubusercontent.com/569481/167540544-6006d0fe-179d-498d-b803-fb201a73bfc2.png)

Villagers filtered by Personality and Specie
![Villagers filtered by Personality and Specie](https://user-images.githubusercontent.com/569481/167540535-675e81c1-d3d1-4820-a96d-2c9e5df8de51.png)