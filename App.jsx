import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#000000" />
      <Slot />
    </>
);
}
