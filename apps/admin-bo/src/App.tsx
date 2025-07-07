import { Button } from '@admin-ui/components/button';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <>
      <Button>123</Button>
    </>
  );
}
