import React, { PropTypes } from 'react';

import Option from '../Option/Option';

function OptionsBody(props){
  const { visibleOptions } = props;
  return (
    <div>
      {
        visibleOptions.map((option) => (
          <Option key={option.id} option={option} />
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
