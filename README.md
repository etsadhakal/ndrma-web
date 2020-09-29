<h2 align="center">NDRMA</h2>

It contains the following features:

- ParcelJs
- Babel ES6 Compiler
- Bootstrap v4
- JQuery v3.3.1
- PopperJS
- Concatenate and minify JavaScript.
- Compile, minify, autoprefix SASS.
- Hot-Reloading
- Optimize and Cache Images

## Getting Started

### Dependencies

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Parcel Bundler](https://parceljs.org/)

  `npm install -g parcel-bundler`

### Quick Start

1. Clone the repo :

   `git clone https://github.com/abhijithvijayan/parcel-sass-bootstrap-boilerplate.git`

2. In bash/terminal/command line, `cd parcel-sass-bootstrap-boilerplate` into project directory.
3. Run `npm install` to install required files and dependencies.
4. Launch the `development environment` with :

   `npm run dev`

Note: **For Production, Use:**

```
npm run build
```

This will build files and assets to `dist/` directory.

<hr />

## Documentation

### Workflow structure

`src` - > source directory

```
.
├── src
│   ├── assets
│   │   └── trollHuntersArcadia.png
│   ├── sass
│   │   ├── _fonts.scss
│   │   ├── _reset.scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   ├── index.js
│   └── index.html
.
```

### Instructions

- Add your HTML files by inserting or including them in the `src` directory (By default `index.html` is added to the directory, feel free to edit it with the changes seen live.)

  - For the new `HTML` file(s), link the `index.js` (in body tag) file in the `HTML` files as they are created.

    ```
    <head>
        :
        <link href="sass/main.scss" rel="stylesheet" />

    </head>
    <body>
        :
        <script src="index.js"></script>
    </body>
    ```

- Add `sass`(SCSS) files to `src/sass` folder.

  - Make sure you import the scss file in `main.scss`
    ```
    @import "filename";
    ```

- Add `images` to `src/assets` folder.

## Licence

Code released under the [MIT License](LICENSE)
