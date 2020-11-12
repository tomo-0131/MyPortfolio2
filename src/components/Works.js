import React from 'react';
import './Works.css';
import Portfolio from '../images/Portfolio.png';
import SkillCard from './SkillCard';

class Works extends React.Component {
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
          <span className="card-title grey-text text-darken-4">CATPIA<i className="material-icons right">close</i></span>
          <p>お気に入りの猫カフェを共有できるWEBアプリケーションです。通知機能、DM機能、いいね機能(Ajax),フォロー機能(Ajax)、マップ機能等々、SNS要素を盛り込んだ内容です。
          </p>
          <p>
          [ 使用技術 ]<br></br>
          * HTML<br></br>
          * CSS<br></br>
          * Javascript / JQuery / Ajax<br></br>
          * Ruby 2.5.3 / Slim記法<br></br>
          * Ruby on Rails 5.2.4 (RSpec / Rubocopによる動的静的テスト等も含む)<br></br>
          * MySQL<br></br>
          * Linux (各種コマンド操作)<br></br>
          * Nginx (Web Server)<br></br>
          * Puma (Application Server)<br></br>
          * Git / GitHub (pull request, Issues 等による擬似チーム開発)<br></br>
          * Docker / docker-compose<br></br>
          * AWS各種サービス<br></br>
          * CircleCI/CD<br></br>
          * Capistrano<br></br>
          * AWS<br></br>
          * EC2 ( Amazon Linux 2 ) / RDS(MySQL) / S3 / VPC / IAM / Route53 / ACM / ALB<br></br>
          </p>
        </div>
      </div>
    )
  }
}

export default Works;
