import Config from 'config';

const url = `${Config.endpoint}`;

export default class Something {
  constructor(endpoint = url) {
    this.endpoint = endpoint;
  }

  fetch() {
    return global.fetch(this.endpoint)
                 .then(response => response.json())
                 .then(res => res.query.results.quote);
  }
}
