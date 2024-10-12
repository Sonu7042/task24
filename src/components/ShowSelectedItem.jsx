import React, { useContext, useState, useEffect } from "react";
import ItemContext from "../context/ItemContext";
import { Link } from "react-router-dom";


const ShowSelectedItem = () => {


  const { setSelectedData, selectedData, total, setTotal, show, setShow} = useContext(ItemContext);


 




  const increaseItem = (cartItem) => {
    const updatedCart = selectedData.map((item) =>
      item.name === cartItem.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setSelectedData(updatedCart);
    setTotal(total + cartItem.price);
  };


  const decreaseItem = (cartItem) => {
    const updatedCart = selectedData.map((item) =>
      item.name === cartItem.name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setSelectedData(updatedCart);
    setTotal(total - cartItem.price);
  };


  useEffect(() => {
    let fitterData = selectedData.filter((item) => item.quantity !== 0);
    setSelectedData(fitterData);
    console.log("filterdata", fitterData);
  }, [total]);


 

  return (
    <>
      <div className="AddToCart">
        <h2>Cart</h2>
        {selectedData.map((cartItem, index) => (
          <div className="addItemDiv" key={index}>
            <div className="imgAndname">
              <img src={cartItem.img} alt="img" />
              <h3>{cartItem.name}</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>{`$ ${cartItem.price}`}</p>

              <div className="buttonDiv">
                <button onClick={() => decreaseItem(cartItem)}>-</button>
                <p>{cartItem.quantity}</p>
                <button onClick={() => increaseItem(cartItem)}>+</button>
              </div>
            </div>
          </div>
        ))}

        <p> Total: $ {total} </p>



        <div className="paymentDiv">
          
             <Link to={show?"/payment":"/"}> <button className="paymentBtn" onClick={()=>setShow(true)}>Proceed to Payment</button></Link>
             
          
        
          
      
        </div>
      </div>
    </>
  );
};

export default ShowSelectedItem;
