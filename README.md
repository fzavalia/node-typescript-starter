# Typescript App Template

Have your Typescript app running with:

- `jest` for testing
- `eslint` for linting with the `airbnb` style
- `nodemon` for watching changes and rebuilding/restaring your app for fast development

## Usage

### Easy way

Just click on the `use as template` button in github

### Easy but with more steps way

Run the following commands, don't forget to replace `<my-app-name>` with the name of your app.

`$ git clone --depth=1 --branch=master git@github.com:fzavalia/typescript-app-template.git <my-app-name>`
`$ rm -rf ./<my-app-name>/.git`

## Development

All your code must be inside the `./src` folder.

To run the app just call

`$ npm run start:watch`

This will:

- Lint with the airbnb typescript linter and try to fix anything that is automatically fixable
- Build the project into the `./dist` folder
- Run the compiled files with `nodemon`, any changes detected later in the source files will cause `nodemon` to rebuild and rerun for faster development

To test the app run

`npm test` or `npm run test:watch`

The first command will collect code coverage inside the `./coverage` directory

The second will watch for changes and continually run tests
