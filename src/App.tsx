import React from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPA_URL as string;
const apiKey = import.meta.env.SUPA_URL as API_KEY;

const supabase = createClient(supabaseUrl, apiKey);

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const { data, error } = await supabase.from('tasks').select(`
        id,
        name, 
        property_values ( value, property:properties (*) )
      `);

    if (error) throw error;
    console.log(data);
    setTasks(data);
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.property_values[0].property.name}</p>
          <p>{task.property_values[0].value}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
