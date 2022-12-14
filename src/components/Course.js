
import ItemCount from './ItemCount';


const Course = (props) => {
    return (
    <>
        <h2>{props.name}</h2>
        <p>Profesor: Elias Otero</p>
        <p>Duración: {props.duration}</p>
        <ItemCount initial={1} stock={5} />
        <hr />
    </> 
    );
}

export default Course;