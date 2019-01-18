import React, { Component } from 'react';
import 'firebase/auth';

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const boardName = document.getElementById('boardName').value;
    if (boardName) {
      // this.props.firebase.database().ref('games/' + boardName).once('value').then((game) => {
      //   console.log('game', game);
      //   //window.location = 'google.com'
      // });
      window.location.search = `game=${boardName}`;
    }

    e.preventDefault();
  }

  render() {
    return (
      <div className='tc'>
        <header className='white'>
          <h1>Bingo Buddies</h1>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <h2>Ready to join a game?</h2>
            <div>
              <label htmlFor='boardName' className='f6 b db mb2'>Board Name</label>
              <input
                  style={{'backgroundColor': '#f6f7fa'}}
                  className='input-reset pa3 ma2 ba bw1 b--black'
                  id='boardName'
                  placeholder='Enter your board name' />
              <input
                className='tc fw8 blue-button white pa3 ba bw1 b--black'
                value='Play!'
                type='submit'
              />
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default WelcomeScreen;
