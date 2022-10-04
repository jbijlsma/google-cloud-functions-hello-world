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

# Deploying

```
pnpm run deploy
```

# Pnpm basics

Update all packages to latest versions:

```
pnpm up -L -r
```

# Issues

I had the following requirements setting this up:

1. use typescript libraries to share code
2. hot reload in the emulator when developing locally
3. deploy a single js file to google cloud

Getting all the pieces of this puzzle working turned out to be quite challenging for several reasons:

1. package versions. Pnpm makes updating everything to their latest versions easy, but in the js ecosystem even minor version updates often break things.
2. hot reload. Hot reloading with webpack --watch works fine when the ts-loader is configured with 'projectReferences: true'. The new index.js file in the ./dist folder is not automatically reloaded by @google-cloud/functions-framework emulator though. This project uses the npm-watch package to simply re-run the serve script when the ./dist folder content changes.
3. exclusing package.json dependencies from the webpack bundle. Dependencies should hardly ever be part of the created bundle. The webpack-node-externals webpack plugin makes it easy to exclude them. But here there is one exception: references to our own ts libraries. Luckily webpack-node-externals allows us to configure which packages should be included in the bundle by specifying an allowList.
4. deployment to google cloud. When using 'gcloud functions deploy' gcloud needs 2 files at a minimum: 1) a js file with the code, 2) a package.json file with the runtime dependecies. It will first run 'npm install --production', which makes sense because the runtime dependencies are not included in our bundle. That will fail with our package.json though because it contains workspace devDependencies (@myscope/). It would be nice if npm would not look at the devDepencies at all when running with --production, but apparently it does. Npm install can be run with a switch that ignores these errors, but google cloud does not add that switch. Locally we use pnpm, which can handle this. The workaround I chose is to create a ./static folder with a package.json specifically meant to be deployed to google cloud. Note that this package.json could be generated from the original package.json as well, but at the moment it is not. The publish script in the original package.json builds webpack bundle and then copies that bundle (index.js) and the package.json in the ./static folder to the ./publish folder and uploads only that folder to google cloud. For that it uses some .gcloudignore trickery.

See the root README for a bit more background info on the use of .gcloudignore.

# \_\_dirName

When running 'functions-framework --source ./dist/' reading a file like this './words.csv' did not work. Even though \_\_dirName is now set correctly to the absolute path of the ./dist/ folder.
