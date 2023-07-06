export const checkIsLoggedIn = () => {
  return localStorage.getItem("user");
};

export const setDataInLocalStorage = (key, val) => {
  if (val) localStorage.removeItem(key);
  localStorage.setItem(key, val);
};

export const getType = (key) =>{
  return localStorage.getItem(key);
}