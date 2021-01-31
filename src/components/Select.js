import React from 'react'
import PropTypes from 'prop-types'

const Select = ({selected}) => {
   const handleChange = (event) => {
      //console.log(event.target.value)
      selected(event.target.value)
   }

   return (
      <>
         <select name="" id="" onChange={(event) => handleChange(event)}>
            <option value="sabah">sabah</option>
            <option value="johor">johor</option>
            <option value="kedah">kedah</option>
            <option value="kelantan">kelantan</option>
            <option value="melaka">melaka</option>
            <option value="negeri sembilan">negeri sembilan</option>
            <option value="pahang">pahang</option>
            <option value="perlis">perlis</option>
            <option value="pulau pinang">pulau pinang</option>
            <option value="perak">perak</option>
            <option value="selangor">selangor</option>
            <option value="sarawak">sarawak</option>
            <option value="terengganu">terengganu</option>
            <option value="wilayah persekutuan">wilayah persekutuan</option>
         </select>
      </>
   )
}

Select.propTypes = {
   selected: PropTypes.func
}

export default Select
