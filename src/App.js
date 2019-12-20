import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path="/" component={CharacterList}/>
      <Route path="/characters/:id" component={CharacterCard}/>
      {/* <SearchForm /> */}
    </main>
  );
}

