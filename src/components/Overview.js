const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <li key={task.id}>
            {i + 1}. {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
