import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name ="index" options={{
        headerTitle :"app"
      }}/>
      <Stack.Screen name ="about" options={{
        headerTitle:"about"
      }}/>
    </Stack>
  );
}
