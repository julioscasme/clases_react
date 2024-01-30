import ListGroup from 'react-bootstrap/ListGroup';

function TodoList({children}){
    return(


      <ListGroup>
      <ListGroup.Item>{children}</ListGroup.Item>
    </ListGroup>

    );
  }

export { TodoList }; 