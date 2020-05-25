# Run:
    npm start
it'll run a server and the app together.


## Backend
 https://data-mock-278118.wl.r.appspot.com/api/exams
 https://data-mock-278118.wl.r.appspot.com/api/exams/ID

# healthcare_dashboard
Healthcare Dashboard is a management system of clinical laboratory tests that provides a track of your results.

 ## convention
 CSS BEM
 ## Dependencies:

 ### Production Dependencies:
    react (Lib help us to )
    react-dom (Lib help us to render DOM elements)
    @babel/core ()
    @babel/preset-env ()
    @babel/preset-react ()
    babel-loader ()
    react-router-dom (define some routes needed)
    redux (to states management)
    react-redux (to get the provider, who's provide the whole app)
    redux-thunk (allow the actions storage funcs, in this case we need asyncronous funcs)

### Dev Dependencies:
    babel-eslint (ECMAScript-6 transpilator to JS easy to browser)
    enzyme-adapter-react-16 ()
    eslint (code rules)
    eslint-config-airbnb (code rules)
    eslint-plugin-import (code rules)
    eslint-plugin-react (code rules)
    enzyme (for testing)
    jest (testing)
    webpack ()
    webpack-cli ()
    webpack-dev-server ()
    html-loader (webpack loader)
    html-webpack-plugin (webpack plugin)
    file-loader (to render images from code)
    sass-loader (webpack loader)
    node-sass (SASS loader does not work witout this )
    json-server (it deploys a fake-server to mock data)
    npm-run-all (to have everything running in an unique console)
    
    

## Developing questions found


regex: "id": \{\n\s+("\$oid":.*$)\s*\}