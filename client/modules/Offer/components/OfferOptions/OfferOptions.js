import React, { PropTypes } from 'react';

function getAvailableDailies(offer) {
  return offer.options
    .reduce((p, o) => [...p, o.daily], [])
    .reduce((p, o) => p.indexOf(o) === -1 ? [...p, o] : p, [] );
}

function OfferOptions(props) {
  const offer = props.offer;
  const availableDailies = getAvailableDailies(offer);

  return (
    <div>
      <div>
        <h1>Escolha sua melhor opção</h1>
        <div>
          <p>Saídas:</p>
          <select>
            {
              props.originLocations.map((location) => (
                <option value={location}>{location}</option>
              ))
            }
          </select>
        </div>
        <div>
          <p>Nº de diárias::</p>
          <select>
            {
              availableDailies.map((daily) => (
                <option value={daily}>{daily}</option>
              ))
            }
          </select>
        </div>
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
