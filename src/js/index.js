// import Config from 'config';
import HelloComponent from './components/hello';
import { default as router } from 'directify';
 
let routingTable = {
  '/': (message) => {
    document.getElementById('router-view').appendChild(HelloComponent({ message }));
  },
  ':notfound': () => {
    document.getElementById('router-view').innerHTML = '<p>ups!</p>';
  }
};
 
let targetElement = document.getElementById('router-view');
router(routingTable, targetElement);
