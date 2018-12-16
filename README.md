### ![PWA Fire App](https://github.com/mayeedwin/pwafireapp/blob/master/app/src/images/others/pwafireapp.png) [PWA Fire App *Beta*](https://pwafire.org/developer/app/)

Project [PWA Fire Bundle](https://github.com/mayeedwin/pwafire) is an open source javascript and json bundle that allows you to convert your existing website into a progressive web app or build one in a few.


![PWA Fire App 100% Audit Pass](https://raw.githubusercontent.com/mayeedwin/pwafireapp/master/.github/images/pwafireappreport.png)

***

### [What is PWA Fire App?](https://github.com/mayeedwin/pwafireapp)

Progressive Web App starter App designed with  [progressive web app best practices](https://developers.google.com/web/progressive-web-apps/checklist) and packaged ready for your [PWA Project](https://pwafire.org/developer/app/)

It has two versions; 

1. For project with build process, npm ; [as in this guide here](https://github.com/mayeedwin/pwafireapp/tree/master/docs)

2. For project without any build process; [config guide is here](https://pwafire.org/developer/pwa/started/)

***

### [App Structure]()

Here is the basic skeleton for **PWA Fire App**  that each of the two starter PWA Kits will conform to:

   - [ ] **For node-module or build process** 
   
For **node modules,**  follow the setup guide as curated in [the doc folder here](https://github.com/mayeedwin/pwafireapp/tree/master/docs) to get started building a scalable progressive web app with **PWA Fire App.** 

```bash
├── app
│   ├── build
│   ├── node_modules
│   ├── src
│       ├── assets
|          ├── css
|          ├── js
|          ├── scss
│       ├── images
|          ├── icons
|          ├── others
|       ├── pages
│       ├── index.html
│       ├── manifest.json
│       ├── service-worker.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── sw-config.js

```

 - [ ] **For without any build process like npm** 

If you do not have or do not want to use any build process such as ** npm**, make sure to 
remove all other files and that your app structure looks as below. Configure your **service-worker.js** 
file as in [this codelab here](https://pwafire.org/developer/pwa/started/#sw-config)

```bash
├── app
│   ├── src
│       ├── assets
|          ├── css
|          ├── js
|          ├── scss
│       ├── images
|          ├── icons
|          ├── others
|       ├── pages
│       ├── index.html
│       ├── manifest.json
│       ├── service-worker.js

```

***

#### [Getting started](https://pwafire.org/developer/codelabs/cloud-firestore-for-web)
Get started on how to set up PWA Fire App [ in this setup guide ](https://github.com/mayeedwin/pwafireapp/tree/master/docs).

***

#### [Engage us](https://twitter.com/pwafire)
Donate a star, like, follow and contribute in any way. If you use [PWA Fire Developer Resources](https://pwafire.org/developer), kindly let us know. JUST simply [Tweet us](https://twitter.com/pwafire).
