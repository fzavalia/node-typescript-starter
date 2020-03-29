# Node Typescript Starter

## Description 

Initialize your typescript projects with ease.

## Download

Before executing the following command, replace \<my-app-name\> with whatever name you want for your app.

`git clone --depth=1 --branch=master git@github.com:fzavalia/node-typescript-starter.git <my-app-name>`

The repo was cloned with the least amount of history (thank to depth=1) so the download should have been fast.

Now you must remove the current git versioning the cloned project  has so you can replace with one of your own.

Again, before executing the next command, replace \<my-app-name\> with the name you provided before.

`rm -rf ./<my-app-name>/.git`

## Development

All your code must be inside the `./src` folder.

### Run

`npm run build:run:watch`

This command will do the following:

- Lint with the airbnb typescript linter and try to fix anything that is automatically fixable
- Build the project into the `./dist` folder
- Run the compiled files with `nodemon`, any changes detected later in the source files will cause `nodemon` to rebuild and rerun for faster development

### Test

All test files must end with the extension `*.spec.ts` for them to be detected

`npm test`

Will run all tests in the project

`npm run test:watch`

Will run all tests in the project and rerun them whenever there is a change in the code