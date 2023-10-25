import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import styles from './TodoItem.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
