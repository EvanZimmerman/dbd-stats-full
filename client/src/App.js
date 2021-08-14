import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import './App.css';
import Home from './Components/Home';
import Leaderboards from './Components/Leaderboards';
import Characters from './Components/Characters';
import MyStats from './Components/MyStats';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Perks from './Components/Perks';
import Offerings from './Components/Offerings';
import Character from './Components/Character';
import News from './Components/News';

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return (alert(`Graphql error ${message}`));
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/* main class on div below to have background picture */}
        <div className="h-screen flex flex-col text-white">
          <Menu />
          <div className="flex-1 overflow-y-auto">
            <Route path="/" exact component={Home} />
            <Route path="/leaderboards" exact component={Leaderboards} />
            <Route path="/characters" exact component={Characters} />
            <Route path="/perks" exact component={Perks} />
            <Route path="/mystats" exact component={MyStats} />
            <Route path="/offerings" exact component={Offerings} />
            <Route path="/characters/:id" exact component={Character} />
            <Route path="/news" exact component={News} />
          </div>
          <Footer />
        </div>    
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
