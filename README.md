# Hero App

This is a responsive React application that allows users to view a list of heroes on the main page, navigate to a specific hero's page, and perform actions such as deleting, editing, or adding a new hero. The menu enables customization of specific text fields and pictures for each hero. Images are stored in a simple base64 string format, omitting the need for third-party storage services like Cloudinary to simplify the app’s design. Tailwind CSS is used for the UI, and the server side is powered by Express.js, MongoDB, and Mongoose.

### Link: [Live Demo](https://react-toi.netlify.app/) 

### Note: When visiting the site after some inactivity, please wait 30-60 seconds for the hosting to initialize.

<p align="center">  
   <img src="https://github.com/user-attachments/assets/12f6600f-e7da-47bb-b0d7-4948a6b79eb2" alt="Screenshot_1"> 
</p>

### Assumptions:

Image Storage: Hero images are stored as base64 strings in the application state, which simplifies implementation and eliminates the need for cloud storage services.<br/>

Component Optimization: Efforts were made to remove unnecessary component re-renders for performance.<br/> 

No Cloudinary Integration: Base64 storage was used for simplicity, which may affect app performance with large images.<br/> 

UI Libraries: Tailwind was used for styling, alongside Material UI and Flowbite React for additional UI components where needed.<br/>  

Database Management: MongoDB is used for storing heroes’ data, and Mongoose is used to handle the database models and queries.<br/>

### Features

- **Main page:** Displays a list of heroes with a drop-down menu allowing you to edit, delete, or view details about individual heroes.
- **Hero details:** Each hero has a dedicated page with editable text fields and images.
- **Pagination:** Allows no more than 5 heroes to be on the page at the same time
- **Image handling:** Images are stored as base64 strings to simplify storage and loading.
- **Optimized Rendering:** Component re-renders are minimized to ensure optimal app performance.
- **UI:** Built with Tailwind CSS for a clean and modern look.
- **Database:** MongoDB is used for storing hero data, with Mongoose handling the data models.

### Technology Stack

- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Express.js, MongoDB (with Mongoose)
- **Form Validation:** Formik, Yup
- **Package Manager:** npm
- **API Management:** Axios

### Database Setup

The backend uses **MongoDB** to store and manage hero data. The data is managed using **Mongoose**, which provides a simple schema-based solution for modeling data in MongoDB.

1. **MongoDB Setup:**
   - You will need to have a running MongoDB instance.
   - Create a `.env` file in the `server` directory with the following MongoDB URI:
     ```env
     MONGODB_URI='...'
     ```

2. **Mongoose Models:**
   - Mongoose is used for defining the data structure for the heroes.
   - The schema includes different fields like nick_name, origin_description, etc...

### Client Installation & Run

1. Navigate to the `client` directory.
2. Install dependencies:
   ```env
   npm install
    ```
3. Start the client: nodemon
   ```env
   npm start
    ```
Start the client: npm start

### Server Installation & Run
1. Navigate to the `server` directory.
2. Install dependencies:
   ```env
   npm install
    ```
3. Start the client: nodemon
   ```env
   nodemon
    ```

<br/>

<p align="center"> 
   <img src="https://github.com/user-attachments/assets/6655d4a7-ee00-4746-9cdf-968b514c1cf3" alt="Screenshot_7"> 
   <img src="https://github.com/user-attachments/assets/0ef32bd6-9a21-47ff-b669-bd954e59b391" alt="Screenshot_6"> 
   <img src="https://github.com/user-attachments/assets/1445c84c-b87b-429c-813e-8b337d53349b" alt="Screenshot_5"> 
   <img src="https://github.com/user-attachments/assets/d15e586b-817f-424f-9527-9821652ca4c3" alt="Screenshot_4"> 
   <img src="https://github.com/user-attachments/assets/c1334930-9b14-4cee-814d-a515a9650a4c" alt="Screenshot_2"> 
   <img src="https://github.com/user-attachments/assets/12f6600f-e7da-47bb-b0d7-4948a6b79eb2" alt="Screenshot_1"> 
</p>
