import React, { Fragment } from 'react';
import './styles/App.scss';
import history from './history';
import Login from './components/LoginPage/Login/Login';
import WrongPath from './components/WrongPath/WrongPath';
import ProductList from './components/ProductListPage/ProductList/ProductList';
import ProductItemPage from './components/ProductItemPage/ProductItemPage';
import Profile from './components/Profile/Profile';
import { Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from './components/CommonComponents/ErrorBoundary/ErrorBoundary';
import Loading from './components/CommonComponents/Loading/Loading';
import { Store } from './store';
import { fetchProducts } from './actions/products';


const App = () => {
  const { state: { products }, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    products.data.length === 0 && fetchProducts(dispatch);
  }, []);

  if (products.isLoading) {
    return (
      <Fragment>
        <Loading />
      </Fragment>
    )
  } else {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/login' component={() => <ErrorBoundary><Login /></ErrorBoundary>} />
          <Route path='/' exact component={() => <ErrorBoundary><ProductList {...products} /> </ErrorBoundary>} />
          <Route path='/product/:id' component={ProductItemPage} />
          <Route path='/profile' component={Profile} />
          <Route component={() => <ErrorBoundary><WrongPath /></ErrorBoundary>} />
        </Switch>
      </Router>
    )
  }
}

export default App;
