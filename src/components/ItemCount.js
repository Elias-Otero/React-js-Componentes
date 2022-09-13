import { useState } from "react";

const ItemCount = () => {
    const [objects, setRate] = useState(0); //hook
    

    const take = () => {
    setRate*(objects+1);
}


    return (
    <>

        <Button onClick={take}>-</Button> {objects} Productos <Button onClick={put}>+</Button>
    
    </>
  );
}

export default ItemCount;