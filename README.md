# Houm frontend challenge

This is a challenge to get a frontend developer at Houm.com, the challenge as to fetch a public API and show the data as "hero cards".

To apply I use a public API get the Villages of [Animal Crossing](https://animal-crossing.com/es/), a popular Nintendo Switch game.

In the game you can invite 9 of 400 villagers available to your island, every one with his own personality, look, 
likes, and background stories, this page is intended to show all the villagers and help to find the perfect ones for
your island.

## Considerations on technical decisions:
- [typescript](https://www.typescriptlang.org/) definitions are lighted used
- [vite](https://vitejs.dev/) as dev and build tool: quick and simple defaults
- [vercel](https://vercel.com) as hosting. Its well integrated with vite, with a git push on `main` the code is deployed 

## Local development
```bash
npm run install
npm run dev
open http://localhost:3000
```

## "Production"
The code is deployed to vercel servers on git push. Vercel has a pretty good integration with vite, and the default
settings works perfect on the first try for this project.

The "production" site is on [https://houm-frontend-challenge-alejandrosilva.vercel.app](https://houm-frontend-challenge-alejandrosilva.vercel.app).
