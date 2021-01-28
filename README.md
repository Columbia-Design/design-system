# React App for building static design system site

## Up and Running
- install node, npm, yarn (optional) `npm install yarn -g`
- optional install serve package globally `npm install serve -g`
- clone this repo
- cd into cloned repo
- run `yarn install` or `npm install`
- see `package.json` for modules that are being included and commands
- run `yarn start` or `npm start`

## Building static files when done

- run `yarn snap` or `npm run snap` this will output static files into build folder
- to verify that everything was build correctly run `yarn serve` or `serve -s build` that is if you have serve globally installed
- deploy to github pages run folowing command `npm run deploy` or `yarn deploy`


## Remaining Items to Address

- 404 page, need to address redirect loop
- in some occasions images are not loading properly in local dev (https://designsystem.columbia.edu/content/images)
- font-awsome icons are not rendering properly
- generate dynamic css and js export
- create environment for testing manual/dynamic export

