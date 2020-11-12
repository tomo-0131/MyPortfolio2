import React from 'react';
import './About.css';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SkillCard from './SkillCard';

class About extends React.Component {
  render() {
    const skilllist=[
      {
        name:'HTML&CSS',
        image: '',
        description: '',
      },
      {
        name:'Ruby,Ruby on Rails',
        image: '',
        description: '',
      },
      {
        name:'Docker',
        image: '',
        description: '',
      },
      {
        name:'AWS',
        image: '',
        description: '',
      },
      {
        name:'CircleCI',
        image: '',
        description: '',
      },
      {
        name:'React.js',
        image: '',
        description: '',
      },
      {
        name:'HTML&CSS',
        image: '',
        description: '',
      },
    ];
    return (
      <div  className="wrapper">
        <div className="about__main">
          <h4 className="about__title2">ABOUT</h4>
          <div className="about__container">
            <div className="about__container__description">
              <div className="about__name__info">
                <h4 className="about__name">
                  熊谷知幸
                </h4>
                <div className="about__info">
                  <p>1989 04/24</p>
                  <p>趣味：プログラミング, イラスト</p>
                </div>
              </div>
              <div className="about__container__lists">
                <li className="about__container__list">2008/03　愛知県立横須賀高校 卒業</li>
                <li className="about__container__list">2013/03　南山大学法学部法律学科 卒業</li>
                <li className="about__container__list">2013/04　名古屋市役所 入庁</li>
                <li className="about__container__list">2020/05　Ruby on Rails 独習</li>
                <li className="about__container__list">2020/07　名古屋市役所 退職</li>
                <li className="about__container__list">2020/10　WEBサービス「CATPIA」リリース</li>
                <li className="about__container__list">2020/11　React.jsを用いたWEB制作</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
