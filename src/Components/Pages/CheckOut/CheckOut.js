import React from 'react';

const CheckOut = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className='container m-5 d-flex flex-column justify-content-center align-items-center'>

        <form onSubmit={handleSubmit} method="POST" id="checkout-form">
          
          <div className ="my-3">
              <label className ="mx-3" for="creditCard">Card Number : </label>
              <input type="text" name="creditCard" id="creditCard" />
          </div>
         
          <div className ="my-3">
              <label className ="mx-3" for="cvv">Security Code : </label>
              <input type="text" name="cvv" id="cvv" />
          </div>
          
          <div className ="my-3">
            <label className ="mx-3" for="Expiration">Exp. (MM/YYYY) : </label>
              <input type="text" name="exp-month" id="exp-month" size="2" />
              <span> / </span>
              <input type="text" name="exp-year" id="exp-year" size="4" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
          <button type="submit" id="submit-button">Buy Now</button>
          </div>
        </form>
        </div>
    );
};

export default CheckOut;