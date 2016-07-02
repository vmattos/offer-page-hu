import React, { PropTypes, Component } from 'react';

class OptionsBody extends Component {
  render() {
    const offer = this.props.offer;

    return (
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
    );
  }
}

OptionsBody.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default OptionsBody;
