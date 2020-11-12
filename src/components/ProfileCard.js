import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-card-title">
          <h4>A b o u t　M e !</h4>
        <div className="profile-card-content">
          <div className="profile-card-left">
            <div className="profile-card-img"></div>
              <div className="profile-card-logos">
                <a href="https://github.com/tomo-0131" className="git">
                  <FontAwesomeIcon icon={["fab", "github-square"]}  className="logos" /> </a>
                <a href="https://twitter.com/tk_engineers" className="twitter" >
                  <FontAwesomeIcon icon={["fab", "twitter-square"]}  className="logos" /> </a>
                <a href="https://twitter.com/tk_engineers" className="facebook" >
                  <FontAwesomeIcon icon={["fab", "facebook-square"]}  className="logos" /> </a>
              </div>
          </div>
          <div className="profile-card-right">
            <h4 className="profile-card-right-name">
              Tomoyuki Kumagai
              <div className="info">
                <p>1989 04/24</p>
                <p>趣味：プログラミング, イラスト</p>
              </div>
            </h4>
            <p className="profile-card-right-content">
              前職は市役所で総務・課内のIT推進業務等を担当。日々WEBに触れる中で、WEBサービスを通じて新たな価値観、喜びや楽しみなどを顧客に提供することができるWEBエンジニアの魅力に惹かれ、プログラミングを独習し転職活動開始。
            </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ProfileCard;
