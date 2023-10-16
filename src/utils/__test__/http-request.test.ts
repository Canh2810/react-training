import { get, post } from '..' // Replace with the actual path to your module

describe('get function', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should fetch data and return it on success', async () => {
    const responseData = { key: 'value' }
    const mockJsonPromise = Promise.resolve(responseData)
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise,
    })

    global.fetch = jest.fn().mockResolvedValue(mockFetchPromise)

    const url = 'https://example.com/api/data'
    const result = await get(url)

    expect(global.fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(responseData)
  })

  it('should throw an error on non-OK response', async () => {
    const mockFetchPromise = Promise.resolve({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    })

    global.fetch = jest.fn().mockResolvedValue(mockFetchPromise)

    const url = 'https://example.com/api/not-found'

    await expect(get(url)).rejects.toThrow(`Request failed with status 404`)
  })

  it('should throw an error if fetch throws an error', async () => {
    const errorMessage = 'Network error'
    global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage))

    const url = 'https://example.com/api/error'

    await expect(get(url)).rejects.toThrow(errorMessage)
  })
})

describe('post function', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should post data and return the response data on success', async () => {
    const requestData = { key: 'value' }
    const responseData = { success: true }
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData),
    }
    global.fetch = jest.fn().mockResolvedValue(mockResponse)

    const url = 'https://example.com/api/post'
    const result = await post(url, requestData)

    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })

    expect(result).toEqual(responseData)
  })

  it('should throw an error on non-OK response', async () => {
    const requestData = { key: 'value' }
    const responseData = { error_message: 'Error message' }
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue(responseData),
    }
    global.fetch = jest.fn().mockResolvedValue(mockResponse)

    const url = 'https://example.com/api/error'

    await expect(post(url, requestData)).rejects.toThrow(
      responseData.error_message,
    )
  })

  it('should throw an error if fetch throws an error', async () => {
    const requestData = { key: 'value' }
    const errorMessage = 'Network error'
    global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage))

    const url = 'https://example.com/api/error'

    await expect(post(url, requestData)).rejects.toThrow(errorMessage)
  })
})
