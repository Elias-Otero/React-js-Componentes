import { Cart4 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const CartWidget = () => {
    return (
    <>
        
        <Button variant="primary">
        <Cart4 /><Badge bg="secondary">9</Badge>
        <span className="visually-hidden"></span>
        </Button>
        
        
    </>
    );
}

  export default CartWidget;