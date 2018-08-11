### [Overview](https://pwafire.org/app)

Before we get started; let us make sure everything is ready and we have all tools needed.

#### [What you should already know]()

    - Basic HTML, CSS, and JavaScript (ofcourse you are)
    - How to run commands from the command line
    - Some familiarity with service workers is recommended
    - Familiarity with Node.js is recommended

#### [What you will need]()

This lab requires Node.js. Install the latest long term support (LTS) version if you have not already.
Make sure you have all this checked before we start;

  - Connection to the internet
  - A [browser that supports service worker](https://pwafire.org/developer/tools/browser-test/)
  - A text editor; preferbly [VS Code](https://code.visualstudio.com/)
  - [Node.js](https://nodejs.org/en/) installed
  - [Firebase](https://pwafire.org/developer/codelabs/firebase-hosting-web/) if you need to deploy it
  
#### [Get the app](https://github.com/mayeedwin/pwafireapp/archive/master.zip)

The important directory for our web app is going to be the **src** folder in which you will place all of your project files or start your new progressive web app project from.

Download [PWA Fire App here](https://github.com/mayeedwin/pwafireapp/archive/master.zip)

#### [Install project dependencies and start the server]()

 1. Navigate to the app directory via the command line:

        cd pwafireapp-master/app
     
 2. Run the following commands to install the project dependencies:

        npm install
        
 3. Then build and serve the app with these commands:

        npm run build
        npm run start
        
The *npm install* command installs the project dependencies based on the configuration in **package.json.** Open project/package.json and examine its contents. Get the [explanation here](https://pwafire.org/developer/pwa/started/#sw-config-for-node)

Once you have started the server, open the browser and navigate to http://localhost:8081/ to view the app. The app is a simple one page progressive web app which just showcases a working PWA Fire App.

Open the **src** folder in your text editor. The **src** folder is where you will be building your progressive web app or copy all your projects source files as in the app structure.

│   ├── src
|       ├── css
│       ├── images  
|          ├── icons 
|          ├── others 
│       ├── js 
│       ├── scss 
|       ├── pages 
│       ├── index.html 
│       ├── manifest.json 
│       ├── service-worker.js 



