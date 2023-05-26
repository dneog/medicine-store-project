import React from 'react'
import axios from 'axios'
const InputDataForm = () => {
  const handleSubmit=(e)=> {
        e.preventDefault();

        const newTasks= {       
          productName: e.target.productName.value,
          description: e.target.description.value,
          price: e.target.price.value,
          quantity: e.target.quantity.value
        }

        console.log(newTasks)
      
        // setTasks([...tasks, newTasks])
        axios.post('https://crudcrud.com/api/ebd05f1305a7494585acd940d32ea558/products', newTasks)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Medicine Name</label>
    <input type="text" name="productName" id=""  />

    <label htmlFor="">Description</label>
    <input type="text" name="description" id=""  />

    <label htmlFor="">Price</label>
    <input type="number" name="price" id="" autoComplete='off' />

    <label htmlFor="">Quantity</label>
    <input type="number" name="quantity" id="" autoComplete='off' />

    <button type='submit'>Add Product</button>

        </form>
    </div>
  )
}

export default InputDataForm