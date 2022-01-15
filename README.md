# Task
Create a web-app with Rick and Morty characters and authorization via Google and GitHub.

## Stack
### Backend:
JavaScript, Node.js, Express.js, the data were getting from (https://rickandmortyapi.com/documentation .)
### Frontend
JavaScript, React, Redux, localStorage via redux-persist, Sass (SCSS).
### Libraries
Material UI, redux-persist, passport.js, immutability-helper, cookieSession

### Description
There was created a web-app with Create React App and Node.js (express-generator). The last was used for the configuration and connection of passport.

#### Backend
There was created Node.js app with Express.js using MVC. The next modules were created:
-	Server module: contain main app file with base configurations of app, “cookieSession” and “passport”;
-	Configuration module: contain configuration of: PORT, passport Strategies, deepfreeze;
-	Routes module: built REST API architecture using GET methods for response of social API.
The passport.js was connected to authorize users via Google and GitHub. LinkedIn connection was not realized because it need to create own Company page in LinkedIn. But the Strategy of connection is the same.

#### Frontend
There were developed the following pages:
- the main page with a list of characters, autocomplete and filter;
- the login page with authorization via Google and GitHub;
- the page with info about a character from a list (unable only for authorized users).

There is the Header block fixed on the top of web-app with two functional options:
-	logo of web-app as navigation to home page;
-	authorization block where user can press Login / Logout buttons.

The Redux was used as store of information of characters and for making some functions with action creators and reducer.
The logic of authorization is that unknown user can see only main page. And authorized user can follow the page with the separate character additionally. If unknown user tries to click on the character in the list on the main page – web-app redirect him to the login page. There are avatar and name of user are in the Header block after user log in.

On the main page, there were created a list of characters, autocomplete field and checkbox to filter the characters which were marked as like*. The Material UI library was used for the formalization components. The name and status of characters are the link to the character info page (an ID of the character used for navigation in url). The heart icon shows the status like of character: like or dislike.

The autocomplete on the main page allows to filter the one of characters and reset the filter (back to a list of characters). The list of characters is transformed via Redux. The actions with autocomplete update the array of characters in redux store*. Also, it changes in local Storage automatically because of using redux-persist library.

The page with info of characters was created with a card component also from Material UI library. It contains the following information: name of character; status of character; date of creation; avatar of character; gender and species fields; like icon; list of episodes as links.

The like icon is functional to click. It changes color to red or grey if the user clicks on it – one of examples of UI of like/dislike. The episode arrow button also has its functional – roll down and roll up the list with link to episodes.

Also, as a required parameter, the preload of the list of characters was added. You can see the gif with snail if the list is loading. If it takes more than one minute, because the work of api – please, update the page.
*when autocomplete of filter is canceled – the first state of list uploads without likes mark because the DB is absent.

#### The next level of upgrading
-	Make it possible to add a character's photo and save it to the DB using multer library.
-	Connect the DB to save the like status of characters and show them in list.

### View 
![image](https://user-images.githubusercontent.com/46706194/149407829-4abb7a05-2a40-42fc-92b3-8e7061131898.png)
![image](https://user-images.githubusercontent.com/46706194/149407840-343a584e-e8c3-4500-9f4c-4b804b4ee9c8.png)
![image](https://user-images.githubusercontent.com/46706194/149407858-e05be9cf-4867-4ed4-a03d-78302d98d3eb.png)


