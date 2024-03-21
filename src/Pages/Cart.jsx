import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../redux/cartSlice';
export default function Cart() {
  const cart = useSelector(state=>state);
  const dispatch = useDispatch();
  return (
    <div className='container mx-8'>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => {
                    dispatch(removeProduct(index))
                    
                  }}>Remove</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
