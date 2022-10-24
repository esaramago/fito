export default options => {

  const method = options.method || 'GET'
  let queryString = ''

  if (method === 'GET' && options.request) {
    queryString = '?' + new URLSearchParams(options.request).toString()
  }

  return fetch(`${options.url}${queryString}`, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
    },
    body: method === 'POST' ? JSON.stringify(options.request) : null,
  })
  .then((response) => response.json())
  .then((data) => {
    if (options.success) {
      options.success(data)
    }
  }).catch((error) => {
    if (options.error) {
      options.error(error)
    }
  })
}