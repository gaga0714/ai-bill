import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";


export default function HomeScreen() {
  const [date,setDate] = useState(new Date())
  const [showDatePicker,setShowDatePicker]=useState(false)

  return (
    <SafeAreaView className="flex-1 flex gap-4 mx-4">
      {/* date */}
      <View className="flex flex-row justify-between">
        <Text className="font-bold">{date.toLocaleDateString()}</Text>
        <Pressable onPress={()=>setShowDatePicker(true)}>
          <Text className="text-gray-500">选择日期</Text>
        </Pressable>
      </View>
      {/* date picker */}
      {showDatePicker && (
        <DateTimePicker
        value={date}
        mode="date"
        display="inline"
        onChange={(event,selectedDate)=>{
          if(selectedDate) {
            setDate(selectedDate)
            setShowDatePicker(false)
          }
        }}
        />
      )}
    </SafeAreaView>
  )
}
