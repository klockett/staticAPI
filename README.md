# staticAPI
url_shortener

USING: node.js

Installation: (through Terminal) *Key installs
1.	git init
2.	npm init –y
3.	atom  ./ (thru atom you will see the package.json)
4.	mkdir src
5.	mkdir src/models
6.	mkdir src/routes
7.	touch src/server.js
8.	touch  src/routes/index.js
9.	touch src/models/db.js (Database will live here)
10.	 mkdir src/routes/api
11.	 touch src/routes/api/url.js
Next Install:

1.	npm i express body-parser –save (Could be seen in the json-package)
2.	npm i –g nodemon (will help restart server auto/command line access)
3.	create .env file (this will allow your database sensitive log in  and host/port info to be stored and hidden from the user
4.	git add .gitignore
5.	git commit –m ‘Base Ignored’
6.	npm  i –save-dev dotenv
7.	npm i –save sequalize
8.	npm I –save mysql
9.	brew install mysql 
10.	Make sure to create a Database in MysQL Pro to connect
11.	Thru Terminal you could use mysql.server start
           (you can use this instead of (mamp)









Test:
 Use Postman app to test a (post) due to not being able to test thru a browser


