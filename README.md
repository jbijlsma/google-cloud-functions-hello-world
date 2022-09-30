# Intro

Plain javascript example of a Google Cloud Function.

./js: plain javascript version
./ts: typescript version
./ts-webpack: version using typescript and webpack to bundle things

# Good to know

## Google Cloud Function Deployment

When deploying to google cloud the simplified process is more or less like this:

1. the function code is uploaded to google cloud
2. google cloud deploys the (updated) function

The .gcloudignore file specifies what code is uploaded in step 1. The default .cloudignore file that is generated when you first deploy contains a line that includes the content of your .gitignore file. That is not what we want here. We just want to deploy the result of the local (webpack) build which is in the ./dist folder.

You can check which files will be uploaded:

```
gcloud meta list-files-for-upload
```

In step 2 'npm install --production' is run automatically. That makes sense and since we have configured webpack to not bundle external modules (the dependencies in package.json) it is also necessary. You can also run custom command in google cloud by adding a script with the key 'gcp-build' in package.json:

```
"gcp-build": "npm run build"
```

As an alternative to this approach to build locally (or on a webserver) you could also upload the ./src folder and let google cloud run the (webpack) build. To do that you would add the 'gcp-build' script to your package.json:

```
"gcp-build": "npm run build"
```

When google cloud finds a 'gcp-build' script in your package.json, it first runs 'npm install' to include your devDependencies.

You also need to update the .gcloudignore file now so the ./src folder is included in the upload and the content of the .gitignore file is used, so e comment out these 2 lines:

```
#src
#!include:.gitignore
```

## VSCode formatting issues

If your file is automatically formatted in a wrong way (extra spaces in .gcloudignore file in my case) look at the type of file that was detected (right hand bottom corner in vscode). Chances are it is set to 'Markdown'. Set to to the correct type (in this case Ignore like for .gitignore files).
