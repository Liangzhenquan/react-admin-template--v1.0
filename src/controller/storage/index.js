const getAdmin = (key) => {
  if(localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return;
};
const setAdmin = (key,value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export {setAdmin,getAdmin,};