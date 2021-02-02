import React from 'react'
import PropTypes from 'prop-types'

const Select = ({selected}) => {
   const handleChange = (event) => {
      //console.log(event.target.value)
      selected(event.target.value)
   }

   return (
      <>
         <select id="select-negeri" onChange={(event) => handleChange(event)}>
            <option value="sabah">Sabah</option>
            <option value="johor">Johor</option>
            <option value="kedah">Kedah</option>
            <option value="kelantan">Kelantan</option>
            <option value="melaka">Melaka</option>
            <option value="negeri sembilan">Negeri Sembilan</option>
            <option value="pahang">Pahang</option>
            <option value="perlis">Perlis</option>
            <option value="pulau pinang">Pulau Pinang</option>
            <option value="perak">Perak</option>
            <option value="selangor">Selangor</option>
            <option value="sarSawak">Sarawak</option>
            <option value="terengganu">Terengganu</option>
            <option value="wilayah persekutuan">Wilayah Persekutuan</option>
         </select>
      </>
   )
}

Select.propTypes = {
   selected: PropTypes.func
}

export default Select
