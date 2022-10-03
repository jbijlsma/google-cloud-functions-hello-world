# Intro

Example of how to use pnpm (Performant npm), typescript references, (npm / yarn) workspaces and webpack together to create a pleasant development workflow.

# Running locally

In the project root run:

```
yarn install
```

In the /apptest folder run:

```
yarn install
```

Then to build:

```
npm run build
```

And to run:

```
npm start
```

Note that changing code in the referenced projects will hot-reload the app!

# Pnpm basics

Update all packages to latest versions:

```
pnpm up -L -r
```
