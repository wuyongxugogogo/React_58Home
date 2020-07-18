import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import config from './assets/js/conf/config.js';
const HomeComponent = lazy(() => import('./pages/home/home/index'));

export default function RouterComponent() {
    return (
        <React.Fragment>
            <Router>
                <React.Fragment>
                    <Suspense fallback={<React.Fragment />}>
                        <Switch>
                            <Route path={config.path + "home"} component={HomeComponent} ></Route>
                            <Redirect to={config.path + "home/index"}></Redirect>
                        </Switch>
                    </Suspense>
                </React.Fragment>
            </Router>
        </React.Fragment>
    )
}