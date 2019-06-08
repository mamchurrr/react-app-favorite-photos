/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPhotosAction } from './actions';
// import { dispatch } from 'rxjs/internal/observable/pairs';

function Gallery(props) {
  const { photos, fetchPhotos } = props;

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const list = photos.map(({ id, created_at }) => (
    <li key={id}>
      {created_at}
    </li>
  ));

  return (
    <div id="gallery" className="page">
      <div className="page__wrap">
        <h1>Gallery</h1>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = ({ gallery: { photos } }) => ({
  photos,
});
const mapDispatchToProps = {
  fetchPhotos: fetchPhotosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
