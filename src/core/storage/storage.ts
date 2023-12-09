const setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value)
  }
  
  const getItem = (key: string): any => {
    return localStorage.getItem(key) || false
  }
  
  const removeItem = (key: string): void | boolean => {
    return getItem(key) === false ? false : localStorage.removeItem(key)
  }
  // const removeItem = (key: string): void | boolean => {
  //   return localStorage.removeItem(key) || false;
  // };
  
  const clearStorage = (): void => {
    localStorage.clear()
  }
  
  export { setItem, getItem, removeItem, clearStorage }