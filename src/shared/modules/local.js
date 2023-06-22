export const setItemToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return false;
  }
};

export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    // Handle error (e.g., storage is disabled or inaccessible)
    console.error("Error while getting item from local storage:", error);
    return null;
  }
};
