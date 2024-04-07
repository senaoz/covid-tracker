# Covid-19 Tracker

This is a simple Covid-19 tracker that shows the number of cases, recoveries and deaths in the world and in each country.

*The data is fetched from the [RapidAPI]( https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/).

### Technologies
- Tailwind CSS
- React
- Redux
- TypeScript

## Docker Image

You can run the app in a Docker container by running the following command:

```bash
docker build -t covid-19-tracker .
docker run -d -p 3000:3000 covid-19-tracker
```

Then, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<hr />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
