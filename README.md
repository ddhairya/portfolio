# Getting Started with building a [Portfolio](https://ddhairya.github.io/portfolio/) using React.

In this [project](https://ddhairya.github.io/portfolio/) have tried to includes every bits and pieces of technology came across my pathway. 

## Available Use of Libraies and Technologies :
1.  Bootstrap
2.  react-router-dom
3.  firebase

The [project](https://ddhairya.github.io/portfolio/) timeline, how and what is been added:

### `Navigation Bar`

The Navigation Bar compoment is been created and imported in App.js.\
It contains a Brand Logo and two menu i.e. Main Menu and a Social Media Menu.\
On hover a gloal function is been called out and which will change the image src using document.getElementId(), resulting in a better UI.

### `react-router-dom`

The Nav Bar contain react-router-dom links to let react handle the request for the link instead of reaching to the server on every click. Resulting in faster performance and better user experience.

### `firebase`

Implemented **firebase firestore** to get the data from database. To tighten the security, have given only read access in the firestore and in addition to that APIs will be accessible only if it's coming from a particular site.
The implementation is a real time, so whenever any modification is done in firestore without any refresh it will reflect in the site.

**Later stage will add Firebase Authentication**
