import { Button } from '@admin-ui/components/button';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <>
      <div className="text-red-500">kkkkk</div>
      <div>123</div>
      <Button>123</Button>
      <div>123</div>
    </>
  );
}
