export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    const objectkeys = Object.keys(stringArrayOrObject)
    return objectkeys.length === 0 
    } 
   return false
}
