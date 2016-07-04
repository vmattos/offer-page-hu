import React, { PropTypes } from 'react';

import Option from '../Option/Option';

function OptionsBody(props) {
  return (
    <div>
      {
        props.visibleOptions.map((option) => (
          <Option option={option} />
        ))
      }
    </div>
  );
}

OptionsBody.propTypes = {
  offer: PropTypes.object.isRequired,
  visibleOptions: PropTypes.array.isRequired,
};

export default OptionsBody;
