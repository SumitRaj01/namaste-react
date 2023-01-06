/* ** PARCEL IS DOING ALL THE THINGS MENTIONED BELOW
*Creates a server 
*HMR: Hot Module Replacement: parcel keeps a track of all the changes made in a file and it tells the server to reload
*File Watcher Algorithm(FWA): Using FWA parcel does HMR. FWA is written in C++
*dist folder: Keeps the file minified for us. When we write npx parcel index.html it just creates faster devdelopment version of our project and serves it on the server. When we write npx parcel build index.html , a production build, it creates a lot of things it will minify your file and it will push this build to dist folder
*BUNDLING
*MINIFY
*Cleaning our code
*Dev and Production Build
*Super fast build algorithm
*Image Optimization
*Caching while development
*Compression
*Compatible with older version of browser
*TO enable HTTPS on dev like npx parcel index.html --https
*manages port number
*Consistent hashing Algorithm
*Zero Config: you dont need a lot of configuration
*Tree Shaking: Removing un-wanted code
*
*
*Tranisitive dependency: We have our package manager which handles and takes care of our transitive dependency of our code
*/



import React from "react";
import ReactDOM  from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
      id: "title",
      key:"h1"
    },
    "Raj"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      key:"h2"
    },
    "Software Developer"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    //this is an array
    [heading, heading2]
  );
  console.log(heading);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing a react element inside the root
  
  root.render(container);