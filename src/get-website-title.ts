import got from 'got'
import { load } from 'cheerio'

/**
 * Makes an HTTP request to the website at the given URL, parses the HTML document,
 * and queries the website's title from it.
 *
 * @param {string} url Fully qualified absolute URL of the website. Must start with `http://` or `https://`.
 * @returns {Promise<string>} Promise that resolves to the website's parsed title as a string. Will be empty string if
 * title could not be found or is empty.
 */
export default async (url: string): Promise<string> => {
  const urlObject = new URL(url)

  if (!['http:', 'https:'].includes(urlObject.protocol)) {
    throw new TypeError(`Expected URL with http/https protocol, got: ${url}`)
  }

  const { body } = await got(url)
  const $document = load(body)
  const title = $document('title').text()
  return title
}
