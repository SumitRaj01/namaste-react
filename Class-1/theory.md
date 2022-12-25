Assignment 1 -------Theory------ 1what is Emmet? ans=>1.It is essantial toolkit for web-developers. 2.Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow:

2Differrence between a Library and Framework? ans=>Both libraries and frameworks are reusable code written by someone else. Their purpose is to help you solve common problems in easier ways.There isn’t anything magic about frameworks or library.When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

jQuery =>library
Vue.js =>framework.
3*-what is CDN? Why do we use it? ans=> A CDN, or content delivery network, is a network or collection of servers in locations all over the world. Also known as a content distribution network, a CDN can refer to many types of content delivery services, such as load balancing and video streaming.

A CDN’s network of servers allows companies to deliver content from their websites and mobile applications to people more quickly and efficiently, based on their geographic location. In short, a CDN moves data and applications closer to the end user — increasing speed, enhancing security, and improving the user experience. There are many benefits of a content delivery network, from improved user experience to increased security to lower costs. benefits 1-Reduced page load time. 2-Improved availability. 3-Increased scalability. 4-Increased security.

Both React and ReactDOM are available over a CDN 1-This is Core ReactJs

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
2- This is for to put into DOM

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
4- Why is React known as React?

skip--

5-What is crossorigin in script tag?

The crossorigin attribute is a CORS settings attribute. It controls, for scripts that are obtained from other origins, whether error information will be exposed.The crossorigin attribute is a CORS settings attribute. Its purpose is to allow images from third-party sites that allow cross-origin access to be used with canvas.

6-**What is diference between React and ReactDOM? ans=>To be more concise, react is for the components and react-dom is for rendering the components in the DOM. 'react-dom' acts as a glue between components and DOM. You will be using render() method of the react-dom to render components in the DOM and that's all you have to know when you are starting off with it.

7-What is difference between react.development.js and react.production.js files via CDN? ans=>The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds. The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

8-What is async and defer? ans=>Async - means execute code when it is downloaded and do not block DOM construction during downloading process.

Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.