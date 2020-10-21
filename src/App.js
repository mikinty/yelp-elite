import React from 'react';
import BADGES from './badges.json';
import rookie_img from './images/rookie.png';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class App extends React.Component {
  get_icon (raw_name) {
    let key_name = raw_name.replace(' ', '').toLowerCase() + '.png';
    if (images[key_name]) {
      return images[key_name].default;
    } else {
      return rookie_img;
    }
  }

  generate_badges_list () {
    let badges_list = [];

    for (let i = 0; i < BADGES.length; i++) {
      let is_last_row = (i == BADGES.length - 1) ? 'last-row' : 'middle-row';

      badges_list.push(
        <div className={`badges-list-row ${is_last_row}`} key={`badge_${i}`}>
          <div className='badges-list-left'>
            <div className='badges-list-title'>
              {BADGES[i].name}
            </div>
            <div className='badges-list-icon'>
              <img src={this.get_icon(BADGES[i].name)}/>
            </div>
          </div>
          <div className='badges-list-info'>
            <div className='badges-list-description'>
              {BADGES[i].description}
            </div>
            <div className='badges-list-requirement'>
              <i>
                {BADGES[i].requirement}
              </i>
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