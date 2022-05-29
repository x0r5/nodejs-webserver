# NodeJS Webserver

## NPM Commands
- `npm i <modeule>`
- `npm i --save-dev <packagename>`
- `npm install <packagename>`: to locally install a module
- `npm install -g <packagename>`: to globally install a module  ( to the node library node_modules folder)
- `npm install <packagename>@<version>`: install a specified version of a package
- `npm list`: list locally installed packeges
- `npm list -g`: list globally installed packages
- `npm list --depth=0`: list only top level packages
- `npm list <packagename>`: get package version
- `npm view <packagename> version`: show the latest version
- `npm outdated`: show new releases
- `npm update`: update minor and patch version (not major releases)
- `npm uninstall -g <package>`
- `npm run <scriptName>`: run script defined in package.xml


## Express Basics
```js
 app = express();
 app.get('/', (req, res)=>{
    res.status(200).json("{name: 'soma'}")
})
```


### Express Router

`const router = express.Router()` : initialize the router
`app.use('/users', router)`: use a router from a separate module 
`router.get('/path', (req, res)=>{})`
`router.route('/path').get((req, res)=>{}).put((req,res)=>{})`
`router.param('id', (req, res, next, id)={}`: middleware that runs before the start of the request and the end the request
- check if the path has a param with the name "id"
- must call next() function to go on

#### Middleware
- Function that can be run before every request
- example use case: logger function
    - eg: `logger(req, res, next){console.log(req.originalUrl)}`
    - `app.use(logger)`: should be defined to the top, beacuse routing is top to bottom
    - or use: `app.get('/path', logger, logger, (req, res)=>{})`
        - middleware applied to a specific url
    
- `express.static('folderName')` : to server static files with the express built in middleware

#### Request
- `req.quer.paramName`: to access request query paramaters

### Response Methods
- `status(200)`
- `json(<json>)`
- `download('server.js')`
- `render('index')`

### EJS syntax
```html
Hello <%= 2+2 %>
Hello <%= locals.text %>
```