import { useEffect } from 'react';
import './App.css';
import { MyComponents } from 'admin-ui';

export default function App() {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <>
      <div>123</div>
      <MyComponents />
      <div>123</div>
      <div>123</div>
    </>
  );
}
