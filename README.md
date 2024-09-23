# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. We will use a pre-existing API to build a frontend user experience for users to interact with photos!
## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Database] Connect to the Database

```sh
psql 
connect to the dtabase \c photolabs_development
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## [Screenshots]
![The Homepage Screen where all the photos and topics are visible](photolabs/frontend/screenshots/HomeRoute.png)
![This is the Photo Modal that opens when a Photo is clicked](/photolabs/frontend/screenshots/PhotoModal.png)
![This page shows all the photos from a specific topic](/photolabs/frontend/screenshots/PhotosByTopic.png)