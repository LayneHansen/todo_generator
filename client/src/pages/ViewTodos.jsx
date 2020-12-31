import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../utils/GlobalContext';

const ViewTodos = () => {
    const globalContext = useContext(GlobalContext);
    console.log({globalContext});
    useEffect(() => {
        async function fetchTodos() {
            console.log('hit fetchTodos');
          try {
            const response = await fetch("/api/todo");
            const data = await response.json();
            console.log({ data });
    
          } catch (err) {
            console.log({ err });
          }
        }
      }, []);
    

    return (
        <>
            <h2>View Todos Page</h2>
        </>
    );
};

export default ViewTodos;