interface ToDoProps {
    task: string;
    completed: boolean;
    handleChange: (value: boolean) => void;
    handleRemove: () => void;
  }