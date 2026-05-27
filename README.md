# She Can Foundation Website

A responsive NGO website created as part of the Web Development Internship selection task for She Can Foundation.

## Features

- Home section
- About section
- Volunteer registration section
- Responsive design
- Volunteer form submission
- Backend integration with Node.js and Express
- Data stored in MySQL database

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

## Project Structure

she-can-foundation/
├── public/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── imges.avif
├── server.js
├── db.js
├── package.json

## How to Run Locally

1. Install dependencies

npm install

2. Start server

node server.js

3. Open browser

http://localhost:3000

## Database

Volunteer submissions are stored in MySQL table:

volunteers

Fields:
- id
- name
- email
- message
- created_at
