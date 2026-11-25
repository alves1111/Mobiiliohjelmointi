import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './types';

const STORAGE_KEY = 'tasks';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json !== null) setTasks(JSON.parse(json));
      } catch (e) {
        console.log(e);
      } finally {
        setLoaded(true);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)).catch(console.log);
  }, [tasks, loaded]);

  const addTask = (name: string) => {
    const newTask: Task = { id: Date.now().toString(), name, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 16 },
});