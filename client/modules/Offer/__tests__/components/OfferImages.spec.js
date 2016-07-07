import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import OfferImages from '../../components/OfferImages/OfferImages';

const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
];

test('should render properly', t => {
  const wrapper = shallow(
    <OfferImages images={images} />
  );

  t.is(wrapper.find('div').length, 1);
});

test('mountGallery should mount gallery objects', t => {
  const component = new OfferImages();
  const gallery = component.mountGallery(images);
  t.deepEqual(gallery, [
    { original: 'images/photo1.jpg', thumbnail: 'images/photo1.jpg'},
    { original: 'images/photo2.jpg', thumbnail: 'images/photo2.jpg'},
    { original: 'images/photo3.jpg', thumbnail: 'images/photo3.jpg'},
  ]);
});
