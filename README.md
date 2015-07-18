# Shopping Widget

#Update


-Using <a href="https://github.com/johnpapa/angular-styleguide">John Papa's Style Guide</a> for creating a maintainable Angular codebase.

#The Goal

In this project, I really wanted to create a simple personal shopping experience. At most, I wanted to keep it very simple and highlight the fruit so that the user could easily navigate through each section of the page without not having to browse around looking for specific things. Also, I wanted to design the UI to be responsive and easily used on mobile since most sites today are being viewed on mobile. All in all, simplicity and elegance is what I wanted to go for.

#The Approach

Since it was my first time creating a full on application with Angular, I knew that I had to at least showcase what they had to offer in terms of the framework. So, for one, I wanted to try out Angular's UI router that they had added because I seen that the router they had out of the box didn't have what I needed in order to fully have nested states. Two, I wanted to test out the-way binding to give the users a much more responsive feel. Three, get used to the idea of extending HTML through directives creating resuable components. Lastly, dependency injection, in which really got my attention in terms of how it can be used for dataservices, encapsulating all the data logic in this self contained singleton pattern object. 


#Setting Up

For the application structure itself, I started out making sure the folder structure was nicely organized by feature than by type. Why? Well, last project I created aka Music App, I structured it by type such as directives, services, controllers, but what I found out was how much searching I had to go through in order to find specific files. So, with that in mind, keeping the folders by feature allows me to work by each section so that I could focus on that paritcularly part of the page without having to navigate through all the folders. On the other hand, my approach to getting Angular's MVW pattern still gets to me since it doesn't neccessarily follow the typical MVC pattern like Ember but, as for now, I am still figuring out the best practices to get conventions as the app grows. 

#Build ( Here's what Im using so far )

#Client

1). JS Framework : <a href="http://angularjs.org">Angular JS</a> + <a href="https://github.com/angular-ui/ui-router">Angular 
UI Router</a>

2). CSS Frameworks : <a href="http://getbootstrap.com">Bootstrap</a> and <a href="http:/foundation.zurb.com">Foundation</a>


#Server

1).<a href="http://nodejs.org">Node Js</a> + <a href="http://expressjs.com">Express</a>
