import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// redux store
import store from './data/redux/store';

// pages and layout components
import BaseLayout from './components/layout/BaseLayout';
import Error404 from './components/pages/Error404';
import Restaurants from './components/pages/Restaurants';
import RestaurantMapView from './components/pages/RestaurantMapView';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Restaurants} />
            <Route path="/map" component={RestaurantMapView} />
            <Route path="/*" component={Error404} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </div>
);

export default App;
