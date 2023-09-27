export const generateNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const useLocalStorage = () => {
  return {
    getItem: (name) => localStorage.getItem(name),
    setItem: (name, value) => localStorage.setItem(name, value)
  }
}
