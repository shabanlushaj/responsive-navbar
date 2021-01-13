import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Profile } from './components/pages/Profile'

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>
            </Router>

        </>
    )
}

render(<App />, document.getElementById("root"))