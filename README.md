# portfolio-front
Developed as the final project of my web programming bootcamp at Ironhack Barcelona.
It's a MERN Stack application, check the backend repository [here](https://github.com/afabregasm/portfolio-back).

## About
Hi! My name is Andrea. I'm a designer and a web developer. This project constitutes my own portfolio, a platform that makes it easier for me to promote my work to the public and at the same time makes it easier for users interested in my services to place an order or contact directly with me.  

![Project Image](https://i.imgur.com/6k3J5gW.png "Project Image")

## Deployment
You can check the app fully deployed [here](https://afabregasm.herokuapp.com/).
If you wish to view the API deployment instead, check [here](https://afabregasm-back.herokuapp.com/api/).

## Work structure
I developed this project alone and used [Trello](https://trello.com/home) to organize my workflow.

## Installation guide
- Fork this repo
- Clone this repo 

```shell
$ cd portfolio-front
$ npm install
$ npm start
```

## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | HomePage                 |
| /signup              | public          | SignupPage               |
| /login               | public          | LoginPage                |
| /about               | public          | ResumePage               |
| /coding-projects     | public          | CodingProjectListPage    |
| /design-projects     | public          | DesignProjectListPage    |
| /coding-projects/:id | public          | CodingProjectDetailsPage |
| /design-projects/:id | public          | DesignProjectDetailsPage |
| /all-orders          | private (admin) | AllOrdersPage            |
| /all-orders/:id      | private (admin) | EditOrderPage            |
| /profile             | private (user)  | UserProfilePage          |

## Components

- AddCodingProject
- AddDesignProject
- AddOrder
- AnonRoute
- CodingProjectCard
- DesignProjectCard
- EditCodingProject
- EditDesignProject
- Navbar
- OrderCard
- PrivateRoute

---

Contact me!
<a href="https://www.behance.net/afabregasm"><img align="right" width="20px" src="https://simpleicons.now.sh/behance/495f7e" alt="Andrea's Behance" /></a>
<a href="https://www.linkedin.com/in/afabregasm"><img align="right" width="20px" src="https://simpleicons.now.sh/linkedin/495f7e" alt="Andrea's LinkedIn" /></a>
<a href="mailto:contact@afabregasm.com"><img align="right" width="20px" src="https://simpleicons.now.sh/maildotru/495f7e" alt="Andrea's Facebook" /></a>
