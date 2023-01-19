# Weather Appliction

> DEPLOYED URL [weather app](https://weather-live.onrender.com)

## Stack Used

---

<div >
<img src="https://i.ibb.co/nnsSxg3/Screenshot-2023-01-19-185722.png" alt="Screenshot-2023-01-19-185722" border="0"  height="35px">
<img src="https://i.ibb.co/0BBT8tG/Screenshot-2023-01-19-185749.png" alt="Screenshot-2023-01-19-185749" border="0" height="32px">
<img src="https://i.ibb.co/L06yRKx/Screenshot-2023-01-19-185828.png" alt="Screenshot-2023-01-19-185828" border="0" height="50px">

<img src="https://i.ibb.co/Y3HCKq1/Screenshot-2023-01-19-185850.png" alt="Screenshot-2023-01-19-185850" border="0">
<img src="https://i.ibb.co/Qnd0MMy/Screenshot-2023-01-19-190402.png" alt="Screenshot-2023-01-19-190402" border="0">

<img src="https://i.ibb.co/jGBz0XW/Screenshot-2023-01-19-185447.png" alt="Screenshot-2023-01-19-185447" border="0">
</div>

---

## features

### Search Page

- Input field where the user can search for a specific city.
- In the absence of a search query, there is a placeholder where the queried result would go
- On successfull query weather information is displayed
- add to fav button that add city to favourite list

### Favourites Page

- On this page, the list of favourited cities is visible in a card format.
- The city card show's the current weather for each city.
- At end it has delete button , to remove city from list

### optimization

- uses local storage to save result
- redux implemented for favourite city list

---

## Screenshot

<img src="https://i.ibb.co/N1hHcZ8/React-App-mobi.png" alt="React-App-mobi" border="0" height=600>
<img src="https://i.ibb.co/gFH2tBN/React-App-1.png" alt="React-App-1" border="0" >
<img src="https://i.ibb.co/gvWkxZj/w2.png" alt="w2" border="0">
<img src="https://i.ibb.co/HX6pGkd/w5.png" alt="w5" border="0">

---

## Weather app working explained

> If you just want to use application you can use live url
> [Live URL](https://weather-live.onrender.com)

> For Devs first clone current git repo to your local system
> Afer that to use API use need api key from [OPEN WEATHER API]()
> create .env file in project folder and add following

        REACT_APP_API_KEY="your api key"

> To install all packages

        npm i

> To start DEV server

        npm start

### Folder structure Explained

- src folder contains everything
- all components lies in Components folder
- Components/Pages --> contains components that acts as page

- Components/Weather folder contains two component --> CityWeather and InfoIcon
- CityWeather is used to display weather info in card format
- InfoIcon contains meta info and actual icon

---

---

> BELOW IS GUIDE FOR REACT SETUP

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
