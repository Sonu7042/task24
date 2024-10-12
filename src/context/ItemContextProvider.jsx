import React, {useState} from 'react'
import ItemContext from './ItemContext'


const ItemContextProvider = ({children}) => {

    const [selectedData, setSelectedData]=useState([])
    const [total, setTotal] = useState(0);
    const [show, setShow]=useState(true)

    


  return (
    <ItemContext.Provider value={{ selectedData, setSelectedData, total, setTotal, show, setShow }}>
        {children}
      
    </ItemContext.Provider>
  )
}


export default ItemContextProvider
