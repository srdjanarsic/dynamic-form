export function castToInt(val: any, fallbackValue = 0) {
  const intVal = parseInt(val);
  return isNaN(intVal) ? fallbackValue : intVal;
}
