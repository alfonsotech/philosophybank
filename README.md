# bPhil: A Public Philosophy Platform

A platform for sharing and curating freely available, online philosophy content via "Topics." Via "Paths," a curriculum site for the independent study of Philosophy. Forthcoming "Tribes" will allow people to meet others similarly interested in philosophical study and discussion.


## Getting Started

1. Fork the public-philosophy-platform repo.
2. Clone your forked repo.
3. Set your remote upstream to the original repo.
4. Run server.js file ```node server.js```
5. Change directories into the ```client``` folder, build the public files, then run the React, client side server: ```cd client && yarn build && yarn start```


## Built With

* [axios](https://www.npmjs.com/package/axios)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [material-ui](https://www.npmjs.com/package/material-ui)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
* [react-fontawesome](https://www.npmjs.com/package/react-fontawesome)

## Author

[Rita Alfonso](https://github.com/alfonsotech), former Philosophy professor turned Full-Stack Web Developer.


## Folder Structure

After creation, your project should look like this:

```
bphil/
  client
    public
    src
    package.json  
  controllers
  models
  routes
  README.md
  package.json
  server.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
