function TodoCounter(props) {
  return (
    <>
      <span className="title-todo">
        Has Completado <b>{props.completed}</b> de <b>{props.total}</b>
      </span>
    </>
  );
}

export { TodoCounter };
