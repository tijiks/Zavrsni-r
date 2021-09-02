import { Button, Card } from 'react-bootstrap';
import './TodoItem.css';

export const TodoItem = ({ todo, index, markTodo, removeTodo }) => {
    return (
      <Card className="cardCss">
        <Card.Body>
          <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div className="buttonPosition">
              <Button variant="outline-dark" onClick={() => markTodo(index)}>done</Button>{' '}
              <Button variant="outline-dark" onClick={() => removeTodo(index)}>delete</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }