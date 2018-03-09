# React Calendar

![React Calendar](./docs/react-calendar.png)


## Introduction

A calendar built using React that shows all dates in a month in a grid and allows changing the date by using dropdowns for selecting a month and year.


## Demo

A demo of the app can be found [here](https://react-calendar-app.netlify.com/)


## Project Features

- View built using React
- Date parsing, validation and manipulation using [Moment.js](http://momentjs.com/)
- Overflow dates at the start and end of the month, where applicable
- Dropdown for changing the month
- Dropdown for changing the year
- Previous and next arrows for moving between months
- Defaults to the current calendar month
- Routing and navigation using [React Router](https://reacttraining.com/react-router/)
- URL updates when moving between dates
- Props down, events up data flow

## Sudo Code

### Calculate days for a month (including overflow days)

1. Get a month and year
2. Calculate the date for the start of the month
3. Calculate the date for start of the first week (ISO) of the month
4. Calculate the date for the end of the month
5. Calculate the date for the end of the last week (ISO) of the month

6. Create an array to store Day elements
7. Start with the date for start of the first week (ISO) of the month
8. Create a Day element for this date, with the day number for the month
9. Check whether date is in current month
    - If date is within the current month, style as normal day
    - If date is not within the current month, style as an overflow day
10. Add the Day element to the array of days
11. Increment the date by one day
12. Check whether the incremented date is equal to the date for the end of the last week (ISO) of the month plus one day
    - If the dates match, exit and set the array of days to component state
    - If the dates don't match, return to step 8 with incremented date.


## How to Use

### Develop

```sh
npm start
```

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### Build

```sh
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Technology Used

- [React](https://reactjs.org)
- [Moment](http://momentjs.com/)
- [React Router](https://reacttraining.com/react-router/)


## Contributors

### Development

- [Ashley Davis](https://github.com/ashdavis)
