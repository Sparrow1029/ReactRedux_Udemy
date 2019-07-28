import React, { Component } from 'react';
import { connect } from 'react-redux';

import SongDetail from './SongDetail';

class SongList extends Component {
  render() {
    return <SongDetail />;
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return state;
};

export default connect(mapStateToProps)(SongList);

