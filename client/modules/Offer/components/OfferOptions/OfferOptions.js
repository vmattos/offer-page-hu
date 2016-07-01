import React, { PropTypes } from 'react';

function OfferOptions(props) {
  const offer = props.offer;

  return (
    <div>
      <div>
        <h1>Escolha sua melhor opção</h1>
      </div>
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
};

export default OfferOptions;
