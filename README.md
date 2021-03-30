# functional-foods

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Functional Foods** is a web app built using a RESTful JSON API, React, and Ruby Rails. Its goal is to empower users by helping them uncover perpetuated myths about what is actually good for their health by understanding how foods affect our energy and what they are actually doing to our bodies. It's a healthier and more intimate approach to food than merely counting calories.


<br>

## MVP

_The **Functional Food** MVP will have full CRUD functionality. Users will only be able to add to the database once they have successfully registered an account. Once registered, they may also choose to edit and delete any of the entries they have made. For added convenience, users will also be able to search by specific food items.

<br>

### Goals

- _Full CRUD functionality_
- _User authentication_
- _Search by keyword_
- _Fully styled with grid and flexbox_

<br>

### Libraries and Dependencies

|     Library      | Description                                 |
| :--------------: | :-----------------------------------------  |
|      React       | _For frontend development_                  |
| JSON Web Tokens  | _To allow user authentication/verification_ |
|      Rails       | _For easier backend development with Ruby_  |
|      Bcrypt      | _For encrypting and securing sensitive data_|
|     Rack-Cors    | _for handling Cross-Origin Resource Sharing_|
|      Axios       | _For making API calls._                     |
| React Router Dom | _For adding links, routes, and other paths._|

<br>

### Client (Front End)

#### Wireframes

![Adobe Wireframes](https://xd.adobe.com/view/b42aa3c7-71ce-4d45-a6ed-27098961ff2d-e179)

#### Component Tree

[My Component Tree](https://whimsical.com/functionalfoods-Rz4KhbyQzfjfzBSrzSfHLP)

#### Component Architecture

``` FE structure

src
|__ components/
      |__ Modal.jsx
|__ containers/
      |__ FoodContainer.jsx
|__ screens/
      |__ FoodItems.jsx
      |__ Effects.jsx
      |__ FoodDetail.jsx
      |__ FoodCreate.jsx
      |__ FoodEdit.jsx
      |__ SignIn.jsx
      |__ SignOut.jsx
|__ layouts/
      |__ Layout.jsx
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create seed data    |    L     |     1 hr       |      hrs     |    TBD    |
| Build BE structure  |    H     |     2 hrs      |      hrs     |     TBD     |
| All BE API requests |    H     |     3 hrs      |      hrs     |     TBD     |
| Routes & Controllers|    H     |     3 hrs      |      hrs     |     TBD     |
| Build FE structure  |    H     |     2 hrs      |      hrs     |     TBD     |
| ALL FE API requests |    H     |     3 hrs      |      hrs     |     TBD     |
| Verify/Auth functions|    H     |     2 hrs      |      hrs     |     TBD     |
| Home Screen         |    H     |     3 hrs      |      hrs     |     TBD     |
| Details Screen      |    H     |     2 hrs      |      hrs     |     TBD     |
| Add/Edit Forms      |    H     |     2 hrs      |      hrs     |     TBD     |
| Sign In/Register screens|    H     |     3 hrs      |      hrs     |     TBD     |
| Basic CSS           |    H     |     4 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     31 hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[My ERD](https://drive.google.com/file/d/1pXgMviF8sdkX51wawPliunrh_52CRXTl/view?usp=sharing)
<br>

***

## Post-MVP

For Post-MVP, my goal is to create a more customized user experience with the ability to add a "Grocery List" section of saved or favorited items. I would also love to integrate healthy recipes based on the healthier "clean" food items.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
