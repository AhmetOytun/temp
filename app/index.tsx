import ToDo from "@/components/ToDo";
import { Button, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState([{ id: 1, title: "Bomba Todo", completed: false }]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (title: string) => {
    if(title == "") return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, title, completed: false },
    ]);
    setTaskTitle("");
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View className="flex h-full bg-gray-300 p-5 py-10">
      <Text className="font-bold text-2xl mb-5">Today's Tasks</Text>
      <ScrollView className="flex-1" keyboardShouldPersistTaps="handled">
        {tasks.map((task) => (
          <ToDo
            key={task.id}
            task={task.title}
            completed={task.completed}
            handleChange={() => handleChange(task.id)}
            handleRemove={() => removeTask(task.id)}
          />
        ))}
      </ScrollView>
      <View className="flex flex-row justify-between mt-5">
        <TextInput
          value={taskTitle}
          onChangeText={setTaskTitle}
          className="w-[230px] h-12 rounded-md bg-white shadow-xl pl-5"
          placeholder="Add a new task"
        />
        <TouchableOpacity
          onPress={() => addTask(taskTitle)}
          className="w-1/4 h-12 bg-blue-500 rounded-md shadow-xl items-center justify-center"
        >
          <Text className="text-white">Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
