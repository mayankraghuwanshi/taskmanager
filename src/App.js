import React from 'react';
import './App.css';
import ListItems from './components/ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Provider} from "react-redux";
import store from "./store";
import InputComponent from "./components/InputComponent";

library.add(faTrash)

const App =()=> {
  return (
      <Provider store={store}>
        <div className="App">
          <header>
              <h2 align="center">Task Manager</h2>
            <InputComponent/>
            <ListItems/>
          </header>
        </div>
      </Provider>
  );
 }




export default App;