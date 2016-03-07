import Config from 'config';

const url = `${Config.endpoint}`;

export default class Something {
  constructor(endpoint = url) {
    this.endpoint = endpoint;
  }
}
