import React from 'react'
import PropTypes from 'prop-types'

const SelectZon = ({zon, selected}) => {
   const handleChange = (event) => {
      selected(event.target.value)
      //console.log(event.target.value)
   }

   return (
      <>
         <select onChange={(event) => handleChange(event)}>
            {zon.map(item => {
               return (
                  <option key={zon.indexOf(item)} value={item}> {item} </option>
               )
            })}
         </select>  
      </>
   )
}

SelectZon.propTypes = {
   zon: PropTypes.array,
   selected: PropTypes.func
}

export default SelectZon
