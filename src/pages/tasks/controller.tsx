import { useEffect, useState } from 'react';
import { useDb } from '../../services/supabase/data/client.tsx';
import Tasks from './index.tsx';

export interface Task {
  id: number;
  name: string;
  properties: PropertyValue[];
}

export interface PropertyValue {
  id: number;
  property: string;
  value: string;
}

export interface Property {
  id: number;
  type: string;
  name: string;
}

export interface TasksByStatus {
  status: string;
  tasks: Task[];
}

const TasksController = () => {
  const db = useDb();
  const [data, setData] = useState<TasksByStatus[]>([]);

  useEffect(() => {
    const getTasksByStatus = async () => {
      const { data, error } = await db.rpc('get_tasks_grouped_by_property_value');
      if (error) throw error;
      setData(data);
    };

    getTasksByStatus();
  }, [db]);

  return <Tasks data={data} />;
};

export const GetProperties = (db: ReturnType<typeof useDb>) => {
  const [data, setData] = useState<Property[]>([]);

  useEffect(() => {
    const GetAllProperties = async () => {
      const { data, error } = await db.from('properties').select();
      if (error) throw error;
      setData(data);
    };

    GetAllProperties();
  }, [db]);

  return data;
};

export const UpsertTask =
  (db: ReturnType<typeof useDb>) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    if (!name) {
      return;
    }

    const propertyValues: { propertyId: number; value: string }[] = [];

    const inputs = Array.from(e.currentTarget.elements).filter(
      el => el instanceof HTMLInputElement && el.dataset.property === 'true'
    ) as HTMLInputElement[];

    inputs.forEach(input => {
      const propertyId = parseInt(input.name);
      const value = input.value;
      propertyValues.push({ propertyId, value });
    });

    const { data, error } = await db.from('tasks').insert({ name: name }).select().single();
    if (error) throw error;

    for (const { propertyId, value } of propertyValues) {
      const { error } = await db.from('property_values').insert({
        property_id: propertyId,
        task_id: data.id,
        value: value,
      });

      if (error) throw error;
    }

    location.reload();
  };

export const DeleteTask = (db: ReturnType<typeof useDb>) => {
  const [data, setData] = useState<Property[]>([]);

  useEffect(() => {
    const DeleteSpecificTask = async () => {
      const { data, error } = await db.from('properties').select();
      if (error) throw error;
      setData(data);
    };

    DeleteSpecificTask();
  }, [db]);

  return data;
};

export default TasksController;
