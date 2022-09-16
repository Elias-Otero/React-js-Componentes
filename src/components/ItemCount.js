import { useState } from "react";

const ItemCount = () => {
    const [objects, setObjects] = useState(1); //hook
    

    const take = () => {
    setObjects(objects-1);
}

    const put = () => {
        setObjects(objects+1);
    }


    return (
    <div>
        
        <button disabled={objects <= 1} onClick={take}>-</button> 
            {objects} Productos 
        <button disabled={objects >=5} onClick={put}>+</button>
        <button>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;