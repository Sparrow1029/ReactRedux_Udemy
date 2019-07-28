import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:
        {' '}
        {song.title}
        <br />
        Duration:
        {' '}
        {song.duration}
      </p>
    </div>
  );
};


SongDetail.defaultProps = {
  song: { title: '', duration: '' },
};

SongDetail.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    duration: PropTypes.string,
  }),
};

const mapStateToProps = state => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetail);
