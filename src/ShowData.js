import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ShowData = () => {
    const [userData, setUserData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const showUserDatas= ()=> {
        setIsLoading(true)
        axios.get('https://crudcrud.com/api/ebd05f1305a7494585acd940d32ea558/products').then(response => {
            setUserData(response.data)
            setIsLoading(false)
        }).catch(err=> {
            console.log(err);
            setUserData(false)
        })
    }
    useEffect(()=> {
        showUserDatas()
    },[])

   const handleDelete=(id)=> {
    axios.delete(`https://crudcrud.com/api/ebd05f1305a7494585acd940d32ea558/products/${id}`);
    const updateDelete= userData.filter(item => item.id !== id)
    setUserData(updateDelete)
   }
 
  return (
    <div>
    {isLoading ? (
        <p>Loading...</p>
    ):(
        <ul>
        {userData.map(data=> (
            <li key={data._id}>{data.productName} - {data.description} - {data. price}$  <input type="number" value={data.quantity} />  <button onClick={() => handleDelete(data._id)}>Delete</button></li>
        ))}
      </ul>
    )
    }
      
    </div>
  )
}

export default ShowData