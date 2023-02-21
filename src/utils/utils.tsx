export const getObjectKeys = <T extends Object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>
}
