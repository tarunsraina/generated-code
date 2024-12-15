import { useState } from 'react';

function useCustomHook() {
  const [value, setValue] = useState('');
  return { value, setValue };
}

export default useCustomHook;