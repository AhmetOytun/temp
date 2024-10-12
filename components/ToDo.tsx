import { View, Text, TouchableOpacity } from 'react-native'
import { Checkbox } from "expo-checkbox";

const ToDo = ({task, completed, handleChange, handleRemove }: ToDoProps) => {
  return (
    <View className="flex flex-row items-center justify-between w-full h-14 rounded-md bg-white shadow-xl my-2">
        <View className='flex flex-row items-center justify-evenly ml-5'>
        <TouchableOpacity onPress={handleRemove} className="bg-red-500 w-7 h-7 rounded-md items-center justify-center">
            <Text className="text-white">X</Text>
        </TouchableOpacity>
        <Text className="font-light text-[16px] pl-5">{task}</Text>
        </View>
      <Checkbox className="mr-5" value={completed} onValueChange={handleChange} />
    </View>
  )
}

export default ToDo