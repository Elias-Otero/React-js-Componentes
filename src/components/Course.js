const Course = (props) => {
  
    return (
    <>
        <h2>{props.name}</h2>
        <p>Profesor: Elias Otero</p>
        <p>Duración: {props.duration}</p>
        <hr />
    </> 
    );
}

export default Course;