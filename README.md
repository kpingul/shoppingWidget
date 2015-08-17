
# What is Shopping Widget?

Shopping widget is an application I created aimed to serve the users with a very simple shopping experience. It was designed to allow users to customize their own personal shopping carts and even allowed to checkout for their desired orders.

-Using <a href="https://github.com/johnpapa/angular-styleguide">John Papa's Style Guide</a> for creating a maintainable Angular codebase.

<a href="http://kirckpingul.com/shoppingWidget">Live Demo Here</a>

#Application Folder Structure
<img src="http://i84.photobucket.com/albums/k34/kdiggz415/shoppingWidgetFolderStructure_1.png" />

The folder structure for this application is sorted by features rather by type. This way, it makes it a lot easier to navigate through each file as the application starts to grow so that members on the team can work on their own component without figuring out what is what.

#Requirements

-<a href="https://www.npmjs.com">npm</a>

-<a href="http://bower.io">bower</a>

#Dependencies

<b>Package.json</b>

<pre>
"express": "^4.12.4",
"gulp-minify-css": "^1.2.0",
"gulp-rename": "^1.2.2",
"gulp": "^3.9.0",
"gulp-concat": "^2.6.0",
"gulp-concat-css": "^2.2.0",
"gulp-sass": "^2.0.3",
"gulp-uglify": "^1.2.0"
</pre>

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

#Installation

Shopping Widget can be installed simply by:

<ul>
  <li>Cloning this repo</li>
  <li>change directory to shoppingWidget</li>
  <li><a href="https://www.npmjs.com">npm</a> - <code>npm install for dev dependencies</code></li>
  <li><a href="http://bower.io">bower</a> - <code>bower install for front end dependencies</code></li>
</ul>

#Features

<b>The application and UI is built entirely with the <a href="http://angularjs.org">AngularJS</a> Framework (HTML enhanced for web apps!) and <a href="http://foundation.zurb.com/">Foundation</a> CSS Framework(The most advanced responsive 
front-end framework in the world)</b>

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

#Getting Up and Running

Once you've installed the dependencies, you can:

<code>Run <a href="http://www.gulpjs.com">gulp</a></code> and locate to your local host on port 3000 <code>localhost:3000</code>
 

