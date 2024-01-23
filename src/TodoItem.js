function TodoItem({ text, completed }) {
  return (
    <div className="dv-Item">
      <input type="checkbox" checked={completed} readOnly />
      <span className={`${completed && `span-item-completed`}`}>{text}</span>
      <button className="btnDeleteItem">X</button>
    </div>
  );
}

export { TodoItem };
