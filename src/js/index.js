// import Config from 'config';
import HelloComponent from './components/hello';
// import StockComponent from './components/stock';
import appRouter from './router';

appRouter.add('/', () => {
  HelloComponent(this);
});

// Start the router
appRouter.run('/');
