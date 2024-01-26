const { BASE_URL } = require("..")

export async function login(){
  const response = await fetch(`${BASE_URL}/login`)
      .then(res => res)
      .catch(error => error.message)
  return response
}

