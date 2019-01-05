module.exports = {
    /* The base directory you wish to match globPatterns against, 
     relative to the current working directory.
    */
    "globDirectory": "build/",
    "globPatterns": [
    /* Edit to add all file to cache; configure for your project as shown below 
    e.g cache all .css files in the root folder
    */
    "index.html",
    "manifest.json",
    "images/home/*.gif",
    // Pre-cache the default app icon needed for app installation
    "images/icons/icon-144x144.png",
    // Pre-cache app assets i.e css, scss, js
    "assets/js/*.js",
    "assets/css/*.css",
    "assets/scss/*.scss"
    ],
    /* The path and filename of the service worker file that will 
    be created by the build process
    */
    "swSrc": "src/service-worker.js", 
    /* The path to the source service worker file that can contain 
    your own customized code e.g cache strategies for different app resources
    */
    "swDest": "build/service-worker.js", 
    /* In addition to containing a match for 
    injectionPointRegexp
    */
    "globIgnores": [
    "../service-worker-config.js"
    ]
    };