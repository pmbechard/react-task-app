import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPen,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

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
                <button
                  className='btn btn-primary'
                  onClick={(e) => onEdit(e, task.id)}
                >
                  <FontAwesomeIcon className='pr-2' icon={faPen} />
                </button>
                <button
                  className='btn btn-danger'
                  onClick={(e) => onDelete(e, task.id)}
                >
                  <FontAwesomeIcon className='pr-2' icon={faTrashCan} />
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
                <button
                  className='btn btn-success'
                  onClick={(e) => onSubmitTask(e)}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </button>
                <button
                  className='btn btn-danger'
                  onClick={(e) => onDelete(e, task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
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
