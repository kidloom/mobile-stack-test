// import Config from 'config';
import HelloComponent from './components/hello';
import Router from './services/router'; // uses https://github.com/flatiron/director
 
let routingTable = {
  's': () => {
    document.getElementById('router-view').appendChild(HelloComponent());
  },
  '/:path': (message) => {
    document.getElementById('router-view').innerHTML = '';
    document.getElementById('router-view').appendChild(HelloComponent({ message }));
  }
};
 
let router = Router(routingTable);
router.init();
