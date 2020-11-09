import React from 'react';
import ProfileCard from './ProfileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

class Home extends React.Component {
  render() {
    return(
      <div>
        <ProfileCard />
      </div>
    )
  }
}

export default Home;
