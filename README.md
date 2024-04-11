### Industrial Project 

### Firebase credentials:
Please check - [Google Firebase](https://firebase.google.com/) and create a DB (I have uploaded my DB credentials, not sure if you'll succeed with mines)
& update in Firebase.js file.
### How to run the project:
Start project with: 
<ul>
<li>npm install</li>
<li>npm start</li>
</ul>

### Small Notes:
1. Currently Amazon API used is in fact a fake API, which simulates the JSONs from Amazon. \
Fetch calls this fakeapi, and read the data from there.
2. A fake API server can be easily done with (using https://mocki.io/fake-json-api ) also.
3. JSONs files for real products can be checked by using website scrapper, available at: https://github.com/rusuot/industrial_project_amzn_web_scrapper
4. In oreder to understand CRUD API Firebase, please check: https://github.com/rusuot/industrial_project_crud_api_firebase

   
### Observations:
The DOC for Industrail project says next:
Essential Functionalities:
1. Bulk Import: Enable users to import products in bulk from Amazon and eBay using specified filters.
2. Continuous  Availability   Checks:   Implement   automated   checks   to   ensure   product availability is updated regularly, ideally every minute.
3. Automated   Removal:   Remove   unavailable   or   sold-out   products   automatically, displaying a banner message before deletion.
4. Manual Import: Allow users to manually import individual products outside the bulk import process.
5. Scalability:   Design   the   platform   to   be   scalable,   accommodating   products   from additional companies or partners.6. User   Interface:   Develop   an   intuitive   and   user-friendly   interface   for   seamless navigation and interaction
