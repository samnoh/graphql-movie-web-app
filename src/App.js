import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import('routes/Home'));
const DetailPage = lazy(() => import('routes/Detail'));

const App = () => {
    return (
        <Suspense fallback={null}>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/:id" component={DetailPage}></Route>
        </Suspense>
    );
};

export default App;
