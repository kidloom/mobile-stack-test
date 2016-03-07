// import Config from 'config';
import HelloComponent from './components/hello';
// import StockComponent from './components/stock';
import appRouter from './router';

appRouter.add('/', () => {
  if (!window.console || !window.console.log) {
    window.console = { log: function log() {} };
  }
  console.log('something');
  HelloComponent(this);
});

// Start the router
appRouter.run('/');
