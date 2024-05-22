import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Slot />
      <StatusBar hidden={false} barStyle="dark" backgroundColor="#ffffff" />
    </>
);
}
