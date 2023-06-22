import {
  setItemToLocalStorage,
  getLocalStorageItem,
} from "../shared/modules/local";

const getFavorites = () => {
  let favorites = getLocalStorageItem("favorites");
  if (!favorites) return [];
  favorites = JSON.parse(favorites);
  return favorites;
};

const addFavorite = async (topicId) => {
  const isExist = checkExists(topicId);
  let favorites = getFavorites();
  if (isExist) {
    favorites = favorites.filter((id) => id != topicId);
  } else {
    favorites.push(topicId);
  }
  setItemToLocalStorage("favorites", JSON.stringify(favorites));
  console.log("Added");
};

const checkExists = (topicId) => !!getFavorites().find((id) => id == topicId);


function switchTheme() {
    const currentTheme = getTheme();
    console.log(currentTheme);
    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setItemToLocalStorage("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setItemToLocalStorage("theme", "light");
    }
  }
  
  let getTheme = () => {
    let theme = getLocalStorageItem("theme");
    if (!theme) {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (theme = "dark")
        : (theme = "light");
      setItemToLocalStorage("theme", theme);
    }
    return theme;
  };
  
  let initTheme = () => {
    let theme = getLocalStorageItem("theme");
    if (!theme) {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (theme = "dark")
        : (theme = "light");
    }
    document.documentElement.setAttribute("data-theme", theme);
  };
  
  export { getFavorites, addFavorite, checkExists , switchTheme, initTheme };
  