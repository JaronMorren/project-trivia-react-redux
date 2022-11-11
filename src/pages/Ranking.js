import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import ButtonLogin from '../components/ButtonLogin';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      playersData: [],
    };
  }

  componentDidMount() {
    this.getPlayersData();
  }

  getPlayersData = () => {
    const playersData = JSON.parse(localStorage.getItem('playersData'));
    const playerDataSort = playersData.sort((a, b) => b.score - a.score);

    this.setState({ playersData: playerDataSort });
  };

  render() {
    const { playersData } = this.state;
    return (
      <>
        <h2 data-testid="ranking-title">Ranking</h2>
        <section>
          {
            playersData.map((playerData, index) => (
              <div key={ index }>
                <img
                  src={ `https://www.gravatar.com/avatar/${md5(playerData.email).toString()}` }
                  alt="perfil"
                />
                <p
                  data-testid={ `player-name-${index}` }
                >
                  { playerData.name }
                </p>
                <p
                  data-testid={ `player-score-${index}` }
                >
                  { playerData.score }
                </p>
              </div>
            ))
          }
        </section>
        <ButtonLogin />
      </>

    );
  }
}

export default connect()(Ranking);
