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

## Screenshots
<img  width="400" alt="Screenshot 2024-04-07 at 18 14 42" src="https://github.com/senaoz/covid-tracker/assets/66164676/41e725d4-f01f-4919-bb7e-ddc167a8b061">
<img  width="400" alt="Screenshot 2024-04-07 at 18 14 30" src="https://github.com/senaoz/covid-tracker/assets/66164676/5bebe0bb-bbdf-4c67-a83f-fc2ad0dcbe8b">
<img width="1708" alt="Screenshot 2024-04-07 at 18 14 04" src="https://github.com/senaoz/covid-tracker/assets/66164676/aedf3974-83a2-4d34-99a8-0a08ee952752">
<img width="1708" alt="Screenshot 2024-04-07 at 18 14 12" src="https://github.com/senaoz/covid-tracker/assets/66164676/844854cb-423c-40d1-b46c-7718a7e1a6ff">

### Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
