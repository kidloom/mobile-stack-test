// import Config from 'config';
import HelloComponent from './components/hello';
import { default as router } from 'directify';
 
let routingTable = {
  's': () => {
    document.getElementById('router-view').appendChild(HelloComponent());
  },
  '/:path': (message) => {
    document.getElementById('router-view').innerHTML = '';
    document.getElementById('router-view').appendChild(HelloComponent({ message }));
  }
};
 
let targetElement = document.getElementById('router-view');
router(routingTable, targetElement);
