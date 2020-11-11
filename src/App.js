import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ProfileCard from './components/ProfileCard';
import SkillCard from './components/SkillCard';
import Works from './components/Works';
import Contact from './components/Contact';
import styles from './App.css';
import './materialize.css';
import './materialize.js';
import './materialize.min.js';
import './materialize.min.js';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理？

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={Home}/>
            <Route path= '/About' render={ () => <About name={'Tomoyuki Kumagai'}/> }/>
            <Route path= '/Works' component={Works}/>
            <Route path= '/Contact' component={Contact}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
