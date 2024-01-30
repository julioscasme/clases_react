import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';



function TodoItems(props) {
    return (

<ListGroup>
      <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between',background:'#C3B0AC', color:'white', textAlign:'center'}}>
      <Form>
      <Form.Check // prettier-ignore
      type='radio'  aria-label='radio 1'
      defaultChecked={props.completed ? true : false}
      onClick={props.onCompleted}
      />
    </Form>
        {props.text}<CloseButton
        onClick={props.onDelete}
        /></ListGroup.Item>
    </ListGroup>

);
  }

  
  export { TodoItems }