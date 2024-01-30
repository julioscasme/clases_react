import Button from 'react-bootstrap/Button';
function CreateTodoButton(){
    return(
        <Button variant="success" style={{marginTop: '10px'}}
            onClick={
                ()=>console.log('Le diste click')
            }
        >Agregar</Button>
    );
}
export { CreateTodoButton };