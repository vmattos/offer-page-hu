import React, { PropTypes } from 'react';

import OptionsHeader from '../OptionsHeader/OptionsHeader';


function OfferOptions(props) {
  const offer = props.offer;

  return (
    <div>
      <OptionsHeader {...props} />

      <div>
        {
          offer.options.map((option) => (
            <div>
              <div>
                <h2>{option.title}</h2>
                <h3>{option.description}</h3>
              </div>

              <div>
                <h2>Saídas:</h2>
                {
                  option.from.map((origin) => (
                    <p>{origin}</p>
                  ))
                }
              </div>

              <div>
                <p>{option.daily} diária{option.daily == 1 ? '' : 's'}</p>
              </div>

              <div>
                <p>Por apenas:</p>
                <p>R$ <span>{option.price}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

OfferOptions.propTypes = {
  offer: PropTypes.object.isRequired,
  originLocations: PropTypes.array.isRequired,
};

export default OfferOptions;
