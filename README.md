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
A web-app was created with Create React App and Node.js (express-generator). The latter was used for the configuration and connection of passport.

#### Backend
There was created Node.js app with Express.js using MVC. The next modules were created:
-	Server module: contains main app file with base configurations of app, “cookieSession” and “passport”;
-	Configuration module: contains configuration of: PORT, passport Strategies, deepfreeze;
-	Routes module: built REST API architecture using GET methods for response of social API.
The passport.js was employed to authorize users via Google and GitHub.
LinkedIn connection was not implemented because it required to create a Company page in LinkedIn.
However, the connection Strategy is the same for this case.

#### Frontend
The following pages were developed:
- the main page with a list of characters, autocomplete and filter;
- the login page with authorization via Google and GitHub;
- the page with info about a character from a list (unable only for authorized users).
There is the Header block fixed on the top of web-app with two functional options:
-	logo of web-app serving as navigation to home page;
-	authorization block where the user can press Login / Logout buttons.
-	
Redux was used as store of information of characters and for making some functions with action creators and reducer.
The logic of authorization is that unknown user can see only the main page. Only authorized users can navigate to the character’s web-page. If unauthorized user tries to click on the character in the list on the main page, the web-app redirects him to the login page. The avatar and name of the user are displayed in the Header block after the user logs in.

On the main page, a list of characters, an autocomplete field and a checkbox were created. The checkbox is used to filter the characters which were marked*. The Material UI library was used for the UI components. The name and status of a character leads to the character info page (an ID of the character is used for navigation in url). The heart icon shows the like status of character: like or dislike. 

The autocomplete on the main page allows to filter one of the characters or reset the filter (back to a list of characters). The list of characters is transformed via Redux. The actions with autocomplete update the array of characters in redux store*. Local storage is synchronized with the redux-store via redux-persist library.
The page with info of characters was created with a card component from Material UI library. It contains the following information: name of character, status of character, date of creation, avatar of character, gender and species fields, like icon, list of episodes as links.

The like icon is responsive to click. It changes color to red or grey if the user clicks on it – one of examples of UI for like/dislike. The episode arrow button also has its functionality – roll down and roll up the list with links to episodes.

Also, as a required parameter, the preload of the list of characters was added. You can see the gif with snail if the list is loading. If it takes more than one minute, because the work of api, please update the page.

*when autocomplete of filter is canceled, the initial state of the list is uploaded without “like” statuses because these statuses are not stored in a DB.

#### Future goals
Employ a DB to save the like status of characters and show them in list.
Make it possible to add a character's photo and save it to the DB using multer library.


### View 
![image](https://user-images.githubusercontent.com/46706194/149407829-4abb7a05-2a40-42fc-92b3-8e7061131898.png)
![image](https://user-images.githubusercontent.com/46706194/149407840-343a584e-e8c3-4500-9f4c-4b804b4ee9c8.png)
![image](https://user-images.githubusercontent.com/46706194/149407858-e05be9cf-4867-4ed4-a03d-78302d98d3eb.png)


