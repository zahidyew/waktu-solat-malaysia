import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetDefaultBtn = ({setDefault}) => {
   const handleClick = () => {
      setDefault();
      showToast();
   }
   
   const showToast = () =>
      toast.dark("Default location saved.", {
         position: "bottom-center",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
      });

   return (
      <> 
         <button onClick={handleClick}> Set as default </button>
         <ToastContainer limit={1} transition={Flip}/>
      </>
   )
}

SetDefaultBtn.propTypes = {
   setDefault: PropTypes.func,
}

export default SetDefaultBtn
