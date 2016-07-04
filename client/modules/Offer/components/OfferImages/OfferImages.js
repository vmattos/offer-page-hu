import React, { PropTypes, Component } from 'react';
import ImageGallery from 'react-image-gallery';

import style from './OfferImages.css';

class OfferImages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.images = this.mountGallery(this.props.images);
  }

  mountGallery(images) {
    return images.map((i) => { return {original: i, thumbnail: i}})
  }

  render() {
    return (
      <div className={style.Gallery}>
        <ImageGallery
          items={this.images}
          slideInterval={2000}
        />
      </div>
    );
  }
}

OfferImages.PropTypes = {
}

export default OfferImages;
