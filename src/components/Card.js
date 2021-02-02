import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({waktuSolat}) => {
   return (
      <div className="card" >
         {waktuSolat.map(item => {
            const masa = item.time
            const waktu = item.name.charAt(0).toUpperCase() + item.name.slice(1)
            
            return (
               <p key={waktuSolat.indexOf(item) + 1}> 
                  <span className="waktu"> {waktu} </span> 
                  <span className="masa"> {masa}  </span>
               </p>
            )
         })}  
      </div>
   )
}

Card.propTypes = {
   waktuSolat: PropTypes.array
}

export default Card
