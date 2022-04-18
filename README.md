# ProjectBetterWorld
This project demonstrates the basic functionality of a site with react functional components with minimongo and cypress.

## About the project
This project is called "projectBetterWorld" where users can browse and donate to various causes. This idea was developed for 2nd project for PDP class.
The idea for the project was proposed and approved and business requirement document with interface mockup and module diagram can be referred from Business requirement document uploaded and cypress tests are written to test 4 tests.
About the site projoctbetterworld: this is developed using React Functional components. The site has Home page, donation page and Stories Page. Home page displays all the social causes users can view and donate to. The donation page has content about the cause and option to donate money. The stories page has option for the users to share their helping stories with the world. This page shows miniMongo implementation in this site.

## Running the project
1. Clone this repository
2. Navigate to the folder project2
3. npm i
4. npm start

## Business requirement
Business requirement document for this project is uploaded in the git repository, and the file name is Business Requirement_ProjectBetterWorld.

## MiniMongo demo
MiniMongo is demonstrated on the Stories page. Users can input their name and story in the respective text boxes and it will be displayed in the stories section upon clicking "Share" button.

## JSDocs
This project is documented with JS doc library. Please navigate to the index.html file in the doc folder and run http-server to open the file in local browser. If you are using VS code then please install the extension "Live Server". Open index.html file of the doc folder, right click and click on "Open with live server". to view the JS doc generated html file.

## Testing
This project is tested using Cypress and 4 basic tests are written in order to verify.

 ### Test written
 1. Visiting URL
 2. Typing in the textbox
 3. Clicking button
 4. Displaying the content
 
 ### Running tests
 Use the command "npm run cypress:open"

## Deployment
The website is deployed using surge and the URL for the same is : [project-better-world.surge.sh](project-better-world.surge.sh)
