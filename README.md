#<a href="http://angularjs.org">AngularJS</a> Application

***

####The sample demo can be found <a href="http://kirckpingul.com/shoppingWidget"><b>here</b></a>

##Purpose

The idea is to build an application <b>to serve the users with a very simple shopping experience using AngularJS</b>. It was designed to allow users to customize their own personal shopping carts and even allowed to checkout their items and place an order. The application tries to show best practices when it comes to: <b>folders structure</b>, <b>using modules</b>, <b>organizing navigation</b>, and building <b>a simple interface</b>.


##Stack

* Client: <a href="http://angularjs.org">AngularJS</a> Framework (HTML enhanced for web apps!)
* CSS: <a href="http://foundation.zurb.com/">Foundation</a> (The most advanced responsive 
front-end framework in the world)
* Backend: none, just mock data.

###Build

* powered by [Gulp.js](http://www.gulpjs.com/)
* build supporting JavaScript and CSS  minification.

##Installation

###Platform & Tools

You need to install [Node.js](http://nodejs.org/) and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js => v0.12.7)
* [Install bower](http://bower.io/), a depedency package manager.

###Grabbing the code

Either clone this repository or fork it on GitHub

<pre>
* git clone https://github.com/kpingul/shoppingWidget.git

* cd shoppingWidget
</pre>

### Dependencies

Since the client application is built using AngularJS and other 3rd party libraries, we need to install the local dependencies using [Bower](http://bower.io/) and [npm](http://npmjs.org).

<b>Bower.json</b>
<pre>
"jquery": "~2.1.4",
"angular": "~1.4.3",
"scrollup": "~2.4.1",
"angular-ui-router": "~0.2.15",
"angular-foundation": "~0.6.0",
"foundation": "~5.5.2",
"angular-ui-view-spinner": "~1.0.0",
"spin": "~1.1.6",
"slick-carousel": "~1.5.6",
"angular-ladda": "~0.3.1",
"components-font-awesome": "~4.3.0"
</pre>
* To Install the front end dependencies run:
<pre> <a href="http://bower.io">bower</a> install</pre>

(This will install the dependencies declared in the /bower.json file)

<b>Package.json</b>
<pre>
"express": "^4.12.4",
"gulp-minify-css": "^1.2.0",
"gulp-rename": "^1.2.2",
"gulp": "^3.9.0",
"gulp-concat": "^2.6.0",
"gulp-uglify": "^1.2.0"
</pre>

* To install our npm dependencies for our build system and server, run: 
<pre><a href="https://www.npmjs.com">npm</a> install </pre>

(This will install the dependencies declared in the /package.json file)

##Running the server

* Once you've installed the dependencies, you can start the server by running the gulp default task: 

<pre><a href="http://www.gulpjs.com">gulp</a></pre>

* Once it brings up the server, you can start browsing through the application at http://localhost:3000
 
 
##Browser Support
 
AngularJS and Foundation will work with the latest versions of Chrome, Firefox, Safari, and Opera, as well as Internet Explorer version 9, 10, and 11. As for IE8 and below, you might have to work some magic.

##Development

###Folders Structure

<img src="http://i84.photobucket.com/albums/k34/kdiggz415/shoppingWidgetFolderStructure_1.png" />

The folder structure for this application is sorted by features rather by type. This way, it makes it a lot easier to navigate through each file as the application starts to grow so that members on the team can work on their own component without figuring out what is what.

###Features

Features include:
 
<ul> 
<li>Navigate from state to state with the loading spinner for a better user experience.</li>
<li>Scrolling mechanism that allows the user to quickly scroll to the top of the main page.</li>
<li>Loading buttons/bars that give the user instant feedback when customizing their carts and checkout form.</li>
</ul>

Here are the dependencies that I'm using to make those features come alive: 
<pre>
angular.module('myApp', [
	'ui.router', 
	'slickSlider',
	'angular-ladda',
	'angularSpinner', 
	'angular-ui-view-spinner',
	'mm.foundation'
]);

</pre>
<ul>

<li><a href="https://github.com/angular-ui/ui-router">angular-ui-router</a> to allow the dyamic routing and SPA experience.</li>

<li><a href="http://kenwheeler.github.io/slick/">slickSlider</a> by <a href="https://github.com/Ken Wheeler">Ken Wheeler</a> for the image carousel provided throughout the application.</li>

<li><a href="https://github.com/remotty/angular-ladda">angular-ladda</a> which is An angular directive wrapper for <a href="https://github.com/hakimel/Ladda">Ladda</a>.(Buttons with built-in loading indicators, effectively bridging the gap between action and feedback -hakimel)</li>

<li><a href="https://github.com/urish/angular-spinner">angularSpinner</a> & <a href="https://github.com/rpocklin/angular-ui-view-spinner">angular-ui-view-spinner</a> by <a href="https://github.com/rpocklin"> Robert Pocklington</a> and <a href="https://github.com/urish">Uri Shaked</a> </li>

<li><a href="http://pineconellc.github.io/angular-foundation/#/accordion">mm Foundation</a> which is used for the accordion drop down for the comment area displayed in each item page.</li>
</ul>

<b>jQuery Plugins</b>

<ul>
  <li><a href="https://github.com/markgoodyear/scrollup">scrollUp</a> created by <a href="https://github.com/markgoodyear">Mark Goodyear</a>(a jQuery plugin to create a customisable 'Scroll to top' feature that will work with any website)</li>
</ul>

##License 

MIT
