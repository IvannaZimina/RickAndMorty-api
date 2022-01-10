# Task
Create a basic web-app with Rick and Morty characters.

## Stack
### Backend
The data were getting from (https://rickandmortyapi.com/documentation .)
### Frontend
JavaScript, React, Redux, localStorage via redux-persist, Sass (SCSS).
### Libraries
Material UI, redux-persist.

## Description 
There was created a basic React-app with Create React App. 
There were developed the following pages:
-  the main page with a list of characters and autocomplete selection field;
-  a page with info about a character from a list.
On the main page, there was created a list of characters and autocomplete field with Material UI library. The name and status of characters are the link to the character info page (an ID of the character used for navigation in url).
The autocomplete on the main page allows to filter the one of characters and reset the filter (back to a list of characters). The list of characters is transformed via Redux. The actions with autocomplete update the array of characters in redux store. Also, it changes in local Storage automatically because of using redux-persist library.
The page with info of characters was created with a card component from Material UI library. It contains the following information:
-  name of character;
-  status of character;
-  date of creation;
-  avatar of character;
-  gender and species fields;
-  like icon;
-  list of episodes as links.
The like icon is functional to click. It changes color to red or grey if the user clicks on it – one of examples of UI of like/dislike. The episode also has its functional – roll down and roll up the list with link to episodes.
Also, as a required parameter, the preload of the list of characters was added. You can see the gif with snail if the list is loading. If it takes more than one minute, because the work of api – please, update the page.

## The next level of upgrading:
-	SignIn by Facebook or Linkedin using Passport.js;
-	Make it possible to like/dislike any of the characters using Redux;
-	Show the list of liked characters with filter Box using Redux;
-	Make it possible to add a character's photo using Redux.

## Environment
Clone this repository to your machine. Use the npm or yarn install to install the dependensies of app. Use VS-Code to work with the app.

## View 
![image](https://user-images.githubusercontent.com/46706194/148694140-484734c9-ce3a-4b52-af3b-2eb6c333159b.png)
![image](https://user-images.githubusercontent.com/46706194/148694152-606a54e5-c472-4f12-8c16-075421fc2252.png)
