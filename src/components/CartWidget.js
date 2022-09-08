import { Cart4 } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap/Button';


const CartWidget = () => {
    return (
    <>
        <Button variant="primary">
        Profile <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
        </Button>
        <Cart4 />
    </>
    );
}

  export default CartWidget;