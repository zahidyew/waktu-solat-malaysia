import React from 'react'
import PropTypes from 'prop-types'

const Table = ({waktuSolat}) => {
   return (
      <table>
         <thead>
            <tr>
               <td>Imsak</td>
               <td>Subuh</td>
               <td>Syuruk</td>
               <td>Zohor</td>
               <td>Asar</td>
               <td>Maghrib</td>
               <td>Isyak</td>
            </tr>
         </thead>
         <tbody>
            <tr>
               {waktuSolat.map(item => {
                  const masa = item.time

                  return (
                     <td key={waktuSolat.indexOf(item) + 1}> {masa} </td>
                  )
               })}
            </tr>
         </tbody>
      </table>
   )
}

Table.propTypes = {
   waktuSolat: PropTypes.array
}

export default Table
