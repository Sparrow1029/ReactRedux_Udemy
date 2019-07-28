import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// import SongDetail from './SongDetail';

class SongList extends Component {
  renderList() {
    const { songs, selectSong } = this.props;

    return songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            type="submit"
            className="ui button primary"
            onClick={() => selectSong(song)}
          >
              Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    // return <SongDetail />;
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

SongList.defaultProps = {
  songs: [],
  selectSong,
};

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.any),
  selectSong: PropTypes.func,
};

const mapStateToProps = state => ({ songs: state.songs });

export default connect(
  mapStateToProps,
  { selectSong },
)(SongList);
