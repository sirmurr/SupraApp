# SupraApp
## Description
The SupraApp CRUD Application was built for consideration to be given the Z-prefix designation to become a USSF Supra Coder. This assessment is testing my ability to:
* Write my own React front-end code
* Implement a server not using an existing service, for example - ExpressJS
* Implement my own database
* Implement basic CSS (styling, layout)
* Have a full stack application communicating between the front-end and back-end
## Requirments
* The code must be made available to instructors for grading. Instructors should be able to see your front-end and back-end code.
* The application must be compatible with the Google Chrome browser
* The application must use a front-end, back-end, and database
* The database should contain at least two entities, a User and a Item, in a one-to-many relationship, as shown in the ERD below
* The front-end should be styled to lay out components in a sensible way
## User Stories
|**Role**|**Intent**|**Desire**|**Notes**|
| -------- | ------- | -------- | -------- |
|As an *inventory manager*|I want to be able to create an account|so that I can track my inventory.| |
|As an *inventory manager*|I want to be able to log into my account|so that I can track my inventory.|After logging in, the inventory manager should be redirected to their inventory of items.|
|As an *inventory manager*|I want to be able to create a new item|so that I can share my item details with the world.|After the item is created, the inventory manager should be redirected to their inventory of items. An item displays name, description, and quantity.|
|As an *inventory manager*|I want to be able to see my entire inventory of items.| |The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.|
|As an *inventory manager*|I want to be able to see any individual item I have added.| |The full item information should be displayed.|
|As an *inventory manager*|I want to be able to edit an item |so that I can fix any mistakes I made creating it.|When the user toggles edit mode, the page remains the same, and the fields become editable.|
|As an *inventory manager*|I want to be able to delete an item|so that I can remove any unwanted content.|When the user deletes the item, they should be redirected to their inventory of items.|
|As an *inventory manager*|I want to be able to view all items created by every inventory manager |so that I can browse every item.|Unauthenticated users should be able to view all items and any single item.|
|As a *visitor*, who is not logged in| I want to be able to view all items created by every inventory manager|so that I can browse every item.|Unauthenticated users should be able to view all items and any single item. The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.|
|As a *visitor*, who is not logged in|I want to be able to view a specific item created by any user|so that I can see all of its details.|Unauthenticated users should be able to view all items and any single item.|


## Database
### ERD
![image](https://github.com/sirmurr/SupraApp/assets/168887360/43dcd9fb-3d5d-4065-9456-538efe084fca)
### Created Tables in psql
![image](https://github.com/sirmurr/SupraApp/assets/168887360/9cb4c14a-0c85-4183-b267-d0934596ca6d)


## Tech Stack
This application utilizes a PERN tech stack consisting of the following:
* PostgreSQL: An open-source object-relational database system.
* Express.js: A minimalist web framework for Node.js, used for building web applications and APIs.
* React: A JavaScript library for building user interfaces, which allows developers to create web applications that can update and render efficiently in response to data changes.
* Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  
This reliable combination allows for the use of JavaScript for both the client-side and server-side of the SupraApp.


