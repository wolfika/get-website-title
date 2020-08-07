import getWebsiteTitle from './get-website-title'

jest.useFakeTimers()

describe('getWebsiteTitle(url)', () => {
  it('gets title', async () => {
    const result = await getWebsiteTitle('https://github.com/wolfika/get-website-title')
    expect(result.includes('get-website-title')).toBe(true)
  })

  it('throws for unsupported urls', () => {
    expect(getWebsiteTitle('asd://not-a-website')).rejects.toThrow()
  })
})
