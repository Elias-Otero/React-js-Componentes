import { useState } from "react";

const ItemCount = () => {
    const [objects, setObjects] = useState(0); //hook
    

    const take = () => {
    setObjects(objects-1);
}

    const put = () => {
        setObjects(objects+1);
    }


    return (
    <div>
        
        <button onClick={take}>-</button> 
            {objects} Productos 
        <button onClick={put}>+</button>
        <button>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;