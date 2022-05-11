# Houm frontend challenge

This is a challenge to get a frontend developer at Houm.com, the challenge as to fetch a public API and show the data
as "hero cards".

To apply I use the [Rick And Morty API](https://rickandmortyapi.com/), a public APi with the character's information
of the popular TV show. The list can be filtered by `name` (by the text input on NavBar) and by `species` (clicking on 
the species Chip on the character's card).

## Considerations on technical decisions:
- [Typescript](https://www.typescriptlang.org/) types are lighted used, just enough to catch silly errors.
- [Vite](https://vitejs.dev/) as dev and build tool: quick and simple defaults.
- [Vercel](https://vercel.com) as hosting provider. It's well integrated with vite, with just a git push on `main` 
the code is deployed.
- No CSS framework or collection of components were used. As it was a very simple page.
- The CSS Variables used are the same used by Houm.com, extracted using the [CSS Overview feature of Chrome](https://developer.chrome.com/docs/devtools/css-overview/).
- The [BEM](http://getbem.com/) methodology was used as naming convention to keep the CSS in order.
- React's [Context Api](https://es.reactjs.org/docs/context.html) is used on `AppContext` to keep a "global" state
for the filters and current page to be fetched. This use can be considered overhead as it's a pretty simple page with 
just a few components. But was intended to prevent [Prop Drilling](https://kentcdodds.com/blog/prop-drilling) it the 
code grows too much (lucky it wasn't the case). 

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
- [Rick And Morty API](https://rickandmortyapi.com/) A public API with canonical information of Rick And Morty TV show. 
- [i want hue](https://medialab.github.io/iwanthue/) "colors for data scientists" a color palette generator for large datasets.

# Screenshots
All the Characters available.
![All the Characters availables](https://user-images.githubusercontent.com/569481/167825195-b47459a7-23f3-4311-aaf6-d2646fc8bf99.png)

Characters filtered by `Specie` and `Name`.
![Characters filtered by Personality and Specie](https://user-images.githubusercontent.com/569481/167826768-7581e201-b152-4abf-9e94-b8ac119ed29c.png)
