module.exports = {
    "globDirectory": "build/", // The base directory you wish to match globPatterns against, 
    // relative to the current working directory.
    "globPatterns": [
    // edit to add all file to cache; configure for your project below
    // e.g cache all .css files in the root folder
    "index.html",
    "manifest.json",
    "images/*.png",
    "images/*.svg",
    "images/*.jpg",
    "images/*.gif",
    "images/icons/*.png",
    "pages/*.html",
    "assets/js/*.js",
    "assets/css/*.css",
    "assets/scss/*.scss"
    ],
    // The path and filename of the service worker file that will be created by the build process.
    "swSrc": "src/service-worker.js", 
    // The path to the source service worker file that can contain your own customized code,
    "swDest": "build/service-worker.js", 
    // In addition to containing a match for injectionPointRegexp.
    "globIgnores": [
    "../sw-config.js"
    ]
    };