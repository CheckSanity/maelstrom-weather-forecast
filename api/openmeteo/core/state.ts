export class State {
  #geocodingPath = ''
  #basePath = ''

  get geocodingPath(): string {
    return this.#geocodingPath
  }

  get basePath(): string {
    return this.#basePath
  }

  setGeocodingPath(path: string) {
    this.#geocodingPath = path
  }

  setBasePath(path: string) {
    this.#basePath = path
  }
}
