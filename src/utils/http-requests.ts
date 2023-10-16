export const post = async <T>(url: string, data: T): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const responseData = await response.json()
      throw new Error(responseData.error_message)
    }

    const responseData = response.json()
    return responseData
  } catch (error) {
    throw error
  }
}

export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    throw error
  }
}
