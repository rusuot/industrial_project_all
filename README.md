### Industrial Project 2024 (QHO 634)
The purpose for this project is Industrial Consulting Project (QHO635) - Solent University.

This project is a team work project.

What is currently on this GitHub repo is my part (Ovi) done for the group project.

## Link to hosted web-app (only my part - Ovi, not the entire final project): 
- https://amzn2-7f8b1.web.app/
- https://amzn2-7f8b1.firebaseapp.com/

## Link to hosted web-app (Entire Project - Work Group, Kiros):
- https://nexus-ecommerce-d1cc9.web.app/home   (Kiros)

## Entire project code base can be accessed from: 
(Kiros) GIT Hub link Entire Group - All project files - https://github.com/rusuot/industrial_project_all_latest_version

## Tech
What I have used for this project:
- [Visual Code](https://code.visualstudio.com/)
- [Google Firebase](https://firebase.google.com/)
- [node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
- [React](https://react.dev/)
- [Dillinger - write readme files](https://dillinger.io/)

# How to run the project:
1. Download zip file
2. Create Firebase DB and get detials needed.
3. (Note!) I have a hidden file that I've tried to added on GIT, check it in image below:

![image](https://github.com/rusuot/industrial_project_all/assets/156461904/ecd8430b-4d03-4958-a309-5330ee016fb2)


# Start project with: 
<ul>
<li>npm install</li>
<li>npm start</li>
</ul>




# List/Read Manual Imported products
https://github.com/rusuot/industrial_project_all/blob/c625a69a31b8d97cddde926f7afb3cb9f4ab30d8/src/Components/Category/ManualImportedProducts.js#L35

# Insert/Save Manual Imported products (by user)
https://github.com/rusuot/industrial_project_all/blob/c625a69a31b8d97cddde926f7afb3cb9f4ab30d8/src/Components/ManualImport.js#L85


# JSON EXAMPLE to be used in Manual Import. (**OVI**)
Each time you insert, please change the ID. From 31313 into 31314, and than..31315.. This is required to simulate a unique ID in Firebase Database.
Next JSON format is applicable to:   https://amzn2-7f8b1.web.app/ 
(so, first project version)

```sh
  {
    "id": "31313",
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  }
```

####  JSON EXAMPLE
_Next JSON format is applicable to:   https://nexus-ecommerce-d1cc9.web.app
(so, final project version)_
In here not sure at id if it's with "" or without ""

```sh
  {
    "id": 31313,
    "title": "Mens Cotton Jacket",
    "price": {"current_price": 55.99},
    "category": "men's clothing",
    "thumbnail": "https://res.cloudinary.com/81fPKdAC_SL1500__q6mm2s.jpg",
    "reviews": {
      "total_reviews": 5,
      "rating": 4.6
    }
  }
```




# Fake API URLs used:
Filter products – any category FAKE API called URLs:

- https://fakestoreapi.com/products/category/electronics 
- https://fakestoreapi.com/products/category/men's%20clothing
- https://fakestoreapi.com/products/category/jewelery
- https://fakestoreapi.com/products/category/women's%20clothing 
![image](https://github.com/rusuot/industrial_project_all/assets/156461904/0f665777-8c07-4df7-b2be-b53e8fee0781)

Example in code: 
https://github.com/rusuot/industrial_project_all/blob/c625a69a31b8d97cddde926f7afb3cb9f4ab30d8/src/Components/Category/Electronics.js#L35 
Note: Sometimes GitHub for Fake API is in maintenanance. So, if the website is not loading them, please check it after 1h or so.


__________________________________________________________________________________________________________________________________________________________________
# Firebase 
Note: this is needed if firebase files are not in unzipped folder / expired, or you choosed to use your personal ones.
- Create an account into [Firebase](https://console.firebase.google.com/)
- Into "Your Firebase projects", select "+" sign to "Add project"
- Register Web application on Firebase.
From here, you'll have access to firebase configs.
E.g.:

```sh
Projet ID:  amzn2-7f8b1
```
```sh
npm install firebase
```
And:
```sh
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUwcv90QoQSbzUzS7Wp_QSxuaNJ08BftI",
  authDomain: "amzn2-7f8b1.firebaseapp.com",
  projectId: "amzn2-7f8b1",
  storageBucket: "amzn2-7f8b1.appspot.com",
  messagingSenderId: "651627062839",
  appId: "1:651627062839:web:59bb367adea786511281b2",
};

//init firebase app through configs
initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

//declare db which gets Firestore
const db = getFirestore();

//declare auth which gets the AUTH
const auth = getAuth();

//use timestamp
const timestamp = Timestamp;
// export db, auth & timestamp to use in app
export { db, auth, app, timestamp };
```
And run:
```sh
npm install -g firebase-tools
```
From example above: "apiKey" value must be paste it into root folder, in file: .env.dev as REACT_APP_API_KEY value.
For email & pass auth:
- create db in web app (still on Firebase) in production mode and change rules "Allow read/write" access to any user signed in to the application
```sh
// Set next rules to allow read & write for any user
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null; }}}
```
> Note: `This Firebase db creation must be followed if my values does not work, I'll try to keep them saved in GIT. /or if you choosed to use your personal ones` 

## Firebase Hosting
1. In Firebase website, in left pane, under Project shortcuts, select "Hosting" and click on "Get started".
2. Firebase Hosting provides next commands to be run in Visual Code terminal:
```sh
npm install -g firebase-tools
```
```sh
firebase login
```
Steps to be followed:
```sh
delete .firebase folder
delete your build folder and build it again by "npm run build"
Then again initialize your app by "firebase init"
What do you want to use as your public directory? build // public directly should be build
Configure as a single-page app (rewrite all URLs to /index.html)? Yes // rewrite rules yes
Set up automatic builds and deploys with GitHub? (y/N) n // automatic builds no
File build/index.html already exists. Overwrite? (y/N) n // should not rewrite the index.html most important part
firebase deploy // you are good to go.
```
In Visual Code terminal, Firebase init logs looks like:
```sh
=== Deploying to 'amzn2-7f8b1'...

i  deploying hosting
i  hosting[amzn2-7f8b1]: beginning deploy...
i  hosting[amzn2-7f8b1]: found 33 files in build
+  hosting[amzn2-7f8b1]: file upload complete
i  hosting[amzn2-7f8b1]: finalizing version...
+  hosting[amzn2-7f8b1]: version finalized
i  hosting[amzn2-7f8b1]: releasing new version...
+  hosting[amzn2-7f8b1]: release complete

Project Console: https://console.firebase.google.com/project/amzn2-7f8b1/overview
Hosting URL: https://amzn2-7f8b1.web.app
```

#### Notes/troubleshooting from Firebase Hosting:



- Notes:  When I was running firebase deploy command in Visual Code Terminal, when I was asked about folder to be choosed: default is givven: (public) but I've put "build" folder. I for firebase deploy!!!
As a short hint: have the exactly same content for index.html in both /public and /build folder.
- Firebase Hosting should run without any issues, as the time expiration is set for the end of february, but I will extend as days go by (there is a limit of 30 days), you should not have any issues even with my Firebase details.

- History of commands in Visual Terminal that might help (these commands are for hosting!!!):
  - npm run build
  - firebase deploy
  - firebase init
  - firebase deploy
---







____________________________________________________________________


### Few things for a high-level arhitecture
1. We read list of products from a fake API, very similar with Amazon API, and the contents are real.
2. We can insert in Firebase DB with website project via "Manual Import" or with [project CRUD API run.](https://github.com/rusuot/industrial_project_crud_api_firebase) & list them under manual imported category. (this list is readed from Firebase DB).
3. Once a user pay an order, the order data is saved into DB


### Small Notes:
1. Currently Amazon API used is in fact a fake API, which simulates the JSONs from Amazon. \
Fetch calls this fakeapi, and read the data from there.
2. A fake API server can be easily done with (using https://mocki.io/fake-json-api ) also.
3. JSONs files for real products can be checked by using website scrapper, available at: https://github.com/rusuot/industrial_project_amzn_web_scrapper
4. In order to understand CRUD API Firebase, please check: https://github.com/rusuot/industrial_project_crud_api_firebase
   

   
### Observations:
The DOC for Industrail project says next:
Essential Functionalities:
###### 1. Bulk Import: Enable users to import products in bulk from Amazon and eBay using specified filters.
---> This works with 1 product for manual import. Product is listed as well under manual import category.
###### 2. Continuous  Availability   Checks:   Implement   automated   checks   to   ensure   product availability is updated regularly, ideally every minute.
---> Not done, not having any idea at the moment how to do it, if somebody wants to take a look, please do so.
###### 3. Automated   Removal:   Remove   unavailable   or   sold-out   products   automatically, displaying a banner message before deletion.
---> Not done, same as 3.
###### 4. Manual Import: Allow users to manually import individual products outside the bulk import process.
So this is done, considering point 1.
###### 5.Scalability:   Design   the   platform   to   be   scalable,   accommodating   products   from additional companies or partners.6. User   Interface:   Develop   an   intuitive   and   user-friendly   interface   for   seamless navigation and interaction
---> In here I think we are fine.

!!! Firebase hosting is not yet done, but we will do it, once the project is in final version (if you'll agree with this, of course).
____________________________________
### Notes for team members (guidelines "HOW TO"):
In order to use directly API AMAZON, I think we need to be very experienced developers, and we are students only, in the final year.
My proposal with all this work simulate very well the API Amazon, the website is completly functional (any improvements are more than welcomed), and we have the Manual Import. 
For bulk maybe is just a small think to be done, not sure if I'll have time for it.

### Firebase credentials:
##### Please check - [Google Firebase](https://firebase.google.com/) and create a DB (I have uploaded my DB credentials, not sure if you'll succeed with mines)
& update in Firebase.js file.
For DB auth please sleect both: Email/password & Google


###### Please check collections names:
I think for "Manual Import", in code I've put: \
const productRef = doc(db, 'Testing', JSON.parse(Manualimport).id); \
And we need "products", but I've done so only for testing, please ask if something is not clear. 

At the moment I have in my DB next:
- Users collection (done by website running - user orders payed)
- products collection (done by POST API with [project CRUD API run.](https://github.com/rusuot/industrial_project_crud_api_firebase))
- Testing collection (when testing the Manual Import)

![image](https://github.com/rusuot/industrial_project_all/assets/156461904/5aa8ffa5-5bbe-4bc0-951e-7e27af2f9b87)
![image](https://github.com/rusuot/industrial_project_all/assets/156461904/460f92f4-9aa9-44d0-a0c9-26bbfa9203d5)
![image](https://github.com/rusuot/industrial_project_all/assets/156461904/30dac247-0c85-4566-9a53-cbd1d6d38e6a)

(!!!)So, we can work further with "Users" & "products"




