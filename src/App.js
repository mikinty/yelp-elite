import React from 'react';
import BADGES from './badges.json';

class App extends React.Component {
  generate_badges_list () {
    let badges_list = [];

    for (let i = 0; i < BADGES.length; i++) {
      badges_list.push(
        <div className='badges-list-row' key={`badge_${i}`}>
          <div className='badges-list-icon'></div>
          <div className='badges-list-info'>
            <div className='badges-list-title'>
              {BADGES[i].name}
            </div>
            <div className='badges-list-description'>
              {BADGES[i].description}
            </div>
            <div className='badges-list-requirement'>
              {BADGES[i].requirement}
            </div>
          </div>
        </div>
      );
    }

    return badges_list;
  }

  render () {
    return (
      <div className='badges-list'>
        {this.generate_badges_list()}
      </div>
    );
  }
}

export default App;