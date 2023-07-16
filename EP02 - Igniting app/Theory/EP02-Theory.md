# EP02 => Theory assignment answers:

1) NPM:
=>  It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. 
=>  This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.
=>  npm's alternative is yarn
=>  How to initialize npm:
npm init
npm init -y can be used to skip the setup step, npm takes care of it and creates the package.json json file automatically , but without configurations.

2) Parcel/ Webpack: (Parcel: https://parceljs.org/)
=>  Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.
=> Things that Parcel does:
*) Creating development build
*) Local server hosting - Creating localhost
*) HMR - Hot Module Replacement:
   - When we make any changes to any file & save it; browser is automatically refreshed 
     to refelect those changes.
	- HMR is done by Parcel using  "File watching algorithm"; written in C++
*) Faster builds with caching for development:
   - It saves cache in a file created at the timme of installation of Parcel.
*) Image optimization:
   - Loading images in browser is one of the most expensive things.
*) Minification of file at the time of PROD
*) Compressing files
*) Consistant hashing
*) Code splitting
*) Tree shaking - Removes unused code while creating build for faster performance of an app.
*) Differential bundling:
   - Provides bunding on the basis of browser on which web app is launched.
   - It bundles app so that it can support older browsers & mbile browsers
*) Diagnostics of app behind the scenes
*) Can host app on HTTPS locally for testing SSL features of app

3) .parcel-cache:
=> .parcel-cache is used by parcel(bundler) to reduce the building time. 
=> It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. 
=> It's a key reason why parcel can be so fast in development mode.

4) npx:
=> It's a tool to execute packages from npm registry, that are not even installed
=> gets installed automatically with npm 5.2.0 & later versions

5) Difference between dependencies & devDependencies:
=> Dependencies contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 
=> devDependencies contain modules/packages a developer needs during development. such as, parcel, webpack, vite, mocha. 
=> These packages are necessary only while you are developing your project, not necessary on production. To save a dependency as a devDependency on installation we need to run command, "npm install --save-dev".
=> For creating normal dependencies, we need to run command, "npm install --save"

6) Tree shaking:
=> Tree shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code, while creating a build.

7) Hot Module Replacement:
=> Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.
=> When we make any changes to any file & save it; browser is automatically refreshed to refelect those changes. HMR is done by Parcel using  "File watching algorithm"; written in C++

8) Superpowers of Parcel: please view answer of Q No. 2)

9) .gitignore:
=> The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.

=> The entries in this file can also follow a matching pattern as follows:

* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
This is an example of what the .gitignore file could look like:

# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache

10) Difference between package.json & package-lock.json:
=> package.json:
 - This file is mandatory for every project
 - It contains basic information about the project such as Application name/version/scripts

=> package-lock.json:
 - This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
 - It is generated after an npm install
 - It allows future devs & automated systems to download the same dependencies as the project.
 - It also allows to go back to the past version of the dependencies without actual ‘committing the node_modules folder.
 - It records the same version of the installed packages which allows to reinstall them. Future installs will be capable of building identical description tree.
 - "~" or "^" in package.json file : These are used with the versions of the package installed.

=> For example in package.json file:
 - "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
   }
 - "~" : Approximately equivalent to version, will update you to all future patch versions, without incrementing the minor version.
 - "^" : Compatible with version, will update you to all future minor/patch versions, without incrementing the major version.
 - If none of them is present, that means only the version specified in package.json file is used in the development.

11) Why we should ot modify package-lock.json:
=> contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

12) What is node_modules & why it should not be pushed in git?
=> node_modules folder is like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). 
=> We don't push node_modules in git because it contains a lot of files (more than 100 MB), which will be expensive as well as it can be regenerated from package.json on server.

13) dist folder:
=> The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. 
=> Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

14) browserslist:
=> Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
=> E.g.; we can specify "last 2 version of Chrome", then application will support latest 2 versions of chrome 100%, but it may or may not work with other versions & other browsers.
=> More documentation at: "https://browserslist.dev/"