[Getting started with traceur compiler](https://github.com/google/traceur-compiler/wiki/GettingStarted)

[ES6 Compatibility table](http://kangax.github.io/compat-table/es6/)

[Nightly firefox](https://nightly.mozilla.org/)

[Addy Osmani's github repo for es6 tools](https://github.com/addyosmani/es6-tools)


Chrome - Enable Experimental features at chrome://flags/

Using Traceur in Production:-
1. Commandline
    a. npm install traceur -g
    b. traceur --block-binding true --dir ./app/scripts ./app/scripts/out - to compile all files in app/scripts into app/scripts/out  
       traceur --out app/scripts/build.js app/scripts/main.js app/scripts/main2.js app/scripts/main3.js - compile main, main1, main2 into build.js
    
