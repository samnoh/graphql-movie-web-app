import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('routes/Home'));
const Detail = lazy(() => import('routes/Detail'));

const App = () => {
    return (
        <Suspense fallback={null}>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/:id" component={Detail}></Route>
        </Suspense>
    );
};

export default App;
