import React from 'react'
import PropTypes from 'prop-types'

const SetDefaultBtn = ({setDefault}) => {
   const handleClick = () => {
      //console.log('clicked');
      setDefault();
   }

   return (
      <button onClick={handleClick}> Set as default location </button>
   )
}

SetDefaultBtn.propTypes = {
   setDefault: PropTypes.func,
}

export default SetDefaultBtn
