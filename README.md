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

_**Functional Foods** is a web app built using a RESTful JSON API, React, and Ruby Rails. Its goal is to empower users by helping them rethink the way they look at food and uncover perpetuated myths about what is actually good for their health by understanding how foods affect our energy and what they are actually doing to our bodies. It's a healthier and more intimate approach to food than merely counting calories.


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

[Adobe Wireframes](https://xd.adobe.com/view/b42aa3c7-71ce-4d45-a6ed-27098961ff2d-e179)

#### Component Tree

[My Component Tree](https://whimsical.com/functionalfoods-Rz4KhbyQzfjfzBSrzSfHLP)

#### Component Architecture

``` FE structure

src
|__ components/
      |__ Modal.jsx
      |__ Search.jsx
|__ containers/
      |__ FoodContainer.jsx
|__ screens/
      |__ FoodItems.jsx
      |__ Effects.jsx
      |__ FoodDetail.jsx
      |__ FoodCreate.jsx
      |__ FoodEdit.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Footer.jsx
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create seed data    |    L     |     1 hr       |     1 hr       |     1 hr   |
| Build BE structure  |    H     |     2 hrs      |     1 hr       |    1 hr       |
| All BE API requests |    H     |     3 hrs      |     3 hrs      |    3 hrs      |
| Routes & Controllers|    H     |     3 hrs      |     3.5 hrs    |   3.5 hrs     |
| Build FE structure  |    H     |     2 hrs      |      2 hrs     |     2 hrs     |
| ALL FE API requests |    H     |     3 hrs      |      3 hrs     |     3 hrs     |
| Verify/Auth functions|    H     |     2 hrs      |      2 hrs     |     2 hrs      |
| Home Screen         |    H     |     3 hrs      |      3 hrs     |     3 hrs     |
| Details Screen      |    H     |     2 hrs      |      2.5 hrs   |     2.5 hrs   |
| Add/Edit Forms      |    H     |     2 hrs      |      2 hrs     |     2 hrs     |
| Sign In/Register screens|    H     |     3 hrs      |      2 hrs     |     2 hrs     |
| Basic CSS           |    H     |     4 hrs      |     4 hrs     |     4 hrs     |
| Social Features     |    H     |     3 hrs      |     2 hrs     |     2 hrs     |
| TOTAL               |          |     34 hrs      |      31 hrs     |     31 hrs     |

<br>

### Server (Back End)

#### ERD Model

[My ERD](https://drive.google.com/file/d/1pXgMviF8sdkX51wawPliunrh_52CRXTl/view?usp=sharing)
<br>

***

## Post-MVP

For Post-MVP, my goal is to create recipe recommendations based on the effects of different food items, e.g. Recipes to give you a mental power boost, recipes for physical energy, or just recipes for a rejuvenating day off.

***

## Code Showcase

The below piece of code was quite complex to put together as it does a few things at once for efficiency. It takes the result of a previous filter function (saved in state), maps them out with links to each food item, but also only displays the edit/delete buttons for those items created by the signed in user. After trialing different ways to incorporate these elements together, I was surprised that it took no more than 15 lines.

```
const searchJSX = queriedFoods.map((food) => (
    <div className="food-item" key={food.id}>
      <Link to={`/food_items/${food.id}`}>
        <p>{food.name}</p>
        <img src={food.img_url} alt="Item of food"/>
      </Link><br />
      {currentUser?.id === food.user_id && (
        <>
          <Link to={`/food_items/${food.id}/edit`}>
            <button>Edit</button>
          </Link><button onClick={()=> handleOpen(food.id)}>
            Delete
          </button>
        </>
      )}
      ```
