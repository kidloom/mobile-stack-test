import e from '../lib/minpubsub';
import { join, map, each } from 'lodash';

export const GLOBAL_PUBLISH_NAME = 'mobileStackApp';

// This will go to the global scope
export function publish(name, ...args) {
  e.publish(name, args);
}

// TODO: support for locally saving more than 1 event with the same name.

export class EventManager {
  /**
   * events should be a map of nameEvent => callback 
   */
  constructor(className, events = {}) {
    this.className = className;
    this.events = events;
    each(this.events, (e, k) => this.subscribe(k, e));
  }
  eventName(newEvent) {
    return `${this.className}/${newEvent}`;
  }
  subscribe(newEvent, cb, that) {
    return e.subscribe(this.eventName(newEvent), (...args) => { // using a arrow function to keep the "this" reference on the cb
      cb.apply(that, args);
    });
  }
  publish(...args) {
    e.publish.apply(e, args);
  }
  publishMethod() {
    // it returns a functions so it locks the className
    let that = this;

    return (newEvent, ...args) => {
      args = join(map(args, (a) => typeof a === 'string' ? `'${a}'` : JSON.stringify(a)), ',') || null;
      return `${GLOBAL_PUBLISH_NAME}('${that.eventName(newEvent)}', ${args})`;
    };
  }
  unsubscribe(name, ev) {
    e.unsubscribe(this.eventName(name), ev);
  }
  destroy() {
    each(this.events, (e, k) => {
      window.console.log('unsubscribing', k);
      this.unsubscribe(this.eventName(k), e);
    });
  }
}
