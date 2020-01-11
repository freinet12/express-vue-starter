# Express + Vue Starter
This is a Full-Stack project starter using Express.js and Vue.js.
This is useful if you have to build similar projects. You can just clone the repo and start bulding your app without having to setup everything from scratch. <br>
<a href="https://laravel-mix.com/docs/5.0/installation">Laravel Mix</a> is used to compile all the front-end assets.
<br>
<br>
# Getting Started
  - Installation:<br><br>
      - Clone this repo<br><br>
      - run <code>npm install</code> to install all dependencies<br><br>
      - Open the .env-example file and copy the contents to a .env file in the root of the project.

  - Run
      - Note: you'll need two ternimal windows open so you can run the below commands, one in each terminal
      - Start the Express server by running : <code>npm start</code> or if you have nodemon installed: <code>nodemon npm start</code>
      - Run <code>npm run watch</code> to compile the front-end assets and vue components
      - Go to http://localhost:3000 to see the app.

  - Database Setup
      - MySQL is the default database server. To use PostgreSQL or another relational database, simply update the environment variables:
        - DEFAULT_DB_CONNECTION=[ your default database server ie: <code>mysql</code>, <code>postgres</code>, <code>sqlite</code>, etc.]
        - mysql2 is already installed and ready to go.
        - This project uses Sequelize as the ORM. Learn how to use Sequelize <a href="https://sequelize.org/v5/manual/getting-started.html">here</a>
        - After you have created and connected a database, go to the main <code>app.js</code> file and uncomment this block: <br>
          <code>
                models.sequelize.sync().then( () => {
                    console.log('Database synced successfully!');
                }).catch( (err) => {
                    console.error(err, "Something went wrong");
                });
          </code>
  
  - Express
      - All express views are located in <code> resources >> assets >> views</code>
      - All API related routes should go in <code> routes >> api.js</code>
      - All user specific routes should go in <code> routes >> users.js </code>
      - All other web routes should go in <code> routes >> web.js </code>
      
  - Vue
      - All Vue components and related scripts are in <code>resources >> assets >> js</code>
  
  
 
       
