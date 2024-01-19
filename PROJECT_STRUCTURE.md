# PROJECT_STRUCTURE

this document is the guide for new developers if you need modify this application you can find infos about the project files here;

### ./src

here you find all folders that you need to modify pages and components in the project.


### ./src/__tests__

This folder contain all unit and integration tests using @testing-library/react and Jest.
the tests folder behavior are apart in folders that are equals the "./src";

### ./src/components

The components directory contains all elements and templates.
Each folder are declared with the component name in the React Style guide.
the folder contains your code in .jsx or .tsx and the style of the component,
using modules architecture.


### ./src/interfaces

Interfaces are types for objects or props, serve to type the code and to organize the code architecture.


### ./src/pages

All the routes of this application will be placed in this directory.
For each route, you will have a separate file, which is named as the route.
You will get more information about the routing in the official documentation from Next.js.


### ./src/styles

here you can access and modify the globals style files.
