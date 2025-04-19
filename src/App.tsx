import React from 'react';
import { createClient } from '@supabase/supabase-js';
import './types/vite-env.d.ts';

const supabaseUrl = import.meta.env.SUPA_URL as string;
const apiKey = import.meta.env.API_KEY as string;

const supabase = createClient(supabaseUrl, apiKey);

interface Property {
  name: string;
}

interface PropertyValue {
  value: string;
  property: Property[];
}

interface Task {
  id: number;
  name: string;
  property_values: PropertyValue[];
}

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

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
          <p>{task.property_values[0].property[0]?.name}</p>
          <p>{task.property_values[0].value}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
