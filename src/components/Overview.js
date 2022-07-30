import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const Overview = (props) => {
  const { tasks, onDelete, onEdit, onSubmitTask, editing } = props;

  return (
    <ListGroup className='list-group-flush container mt-2'>
      {tasks.map((task, i) => {
        if (editing !== task) {
          return (
            <ListGroupItem
              as='li'
              className='d-flex justify-content-between align-items-center list-group-item-action'
              key={task.id}
            >
              <div className='ms-2 me-auto'>
                <p style={{ display: 'inline' }}>
                  {i + 1}. {task.text}
                </p>
              </div>
              <div>
                <Button className='btn btn-primary'>
                  <FontAwesomeIcon
                    className='pr-2'
                    icon={faPen}
                    onClick={(e) => onEdit(e, task.id)}
                  />
                </Button>
                <button className='btn btn-danger'>
                  <FontAwesomeIcon
                    className='pr-2'
                    icon={faTrashCan}
                    onClick={(e) => onDelete(e, task.id)}
                  />
                </button>
              </div>
            </ListGroupItem>
          );
        } else {
          return (
            <ListGroupItem
              as='li'
              className='d-flex justify-content-between align-items-center list-group-item-action'
              key={task.id}
            >
              <div className='ms-2 me-auto'>
                <input type='text' placeholder={task.text} />
                <button className='btn btn-success'>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    onClick={(e) => onSubmitTask(e)}
                  />
                </button>
                <button className='btn btn-danger'>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={(e) => onDelete(e, task.id)}
                  />
                </button>
              </div>
            </ListGroupItem>
          );
        }
      })}
    </ListGroup>
  );
};

export default Overview;
