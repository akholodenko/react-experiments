export default (items, action) => {
  if (action.type === 'add') {
    return [...items, action.payload]
  } else if (action.type === 'remove') {
    return items.filter(item => item.id !== action.payload)
  }
}
