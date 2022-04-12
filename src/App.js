/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppContext } from './libs/context-lib';
import { useAppReducer } from './libs/reducer-lib';
import NotFound from './components/NotFound';
import ProductSearch from './components/ProductSearch';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import AppLayout from './components/AppLayout';

import {
  AppContainer,
} from './components/Common.styled';

function App() {
  const [state, dispatch] = useAppReducer();
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <AppContainer>
        <Router>
          <Routes>
            <Route exact path="/" element={<AppLayout><ProductSearch /></AppLayout>} />
            <Route
              path="/items"
              element={
                (
                  <AppLayout>
                    <ProductSearch />
                    <ProductList />
                  </AppLayout>
                )
              }
            />
            <Route
              path="/items/:id"
              element={
                (
                  <AppLayout>
                    <ProductSearch />
                    <ProductDetail />
                  </AppLayout>
                )
              }
            />
            <Route path="*" element={<AppLayout><NotFound /></AppLayout>} />
          </Routes>
        </Router>
      </AppContainer>
    </AppContext.Provider>
  );
}

export default App;
