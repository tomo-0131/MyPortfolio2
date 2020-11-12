import React from 'react';
import './SkillCard.css';
import Portfolio from '../images/Portfolio.png';

class SkillCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={ Portfolio }></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">個人開発アプリケーション<i className="material-icons right">more_vert</i></span>
          <p><a href="https://cat-pia.com">LINK</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">ポートフォリオ<i className="material-icons right">close</i></span>
          <p>React.jsを使用したこちらのWEBサイトです。Google Firebaseにデプロイしました。</p>
          <p>
            使用技術<br></br>
            React.js<br></br>
            Google Firebase<br></br>
          </p>
        </div>
      </div>
    )
  }
}

export default SkillCard;
