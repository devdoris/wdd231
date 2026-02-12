export function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}
