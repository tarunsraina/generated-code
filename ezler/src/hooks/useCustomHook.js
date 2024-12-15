import { useState, useEffect } from 'react';

function useCustomHook() {
  const [value, setValue] = useState(null);
  useEffect(() => {
    // Custom logic here
  }, []);
  return value;
}

export default useCustomHook;