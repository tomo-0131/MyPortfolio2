import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Skill.css";

class Skill extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
              <div className='modal-introduction'>
                <h2>{this.props.name}</h2>
                <p>{this.props.introduction}</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
