import ReactDOM from 'react-dom';
import React from 'react';

export default (params = { }) => {
  let message = params.message || 'something';
  let root = (<section>
      <header>
        <h2>Hello</h2>

        <img className="logo" src="img/logo.png" alt="vue-logo" />
      </header>

      <article>
        <p>{ message }</p>
        <input v-model="message" />

        <p>Data from $parent</p>

        <a href="{ path: '/stocks' }">Go to Stocks</a>
      </article>
    </section>);

  ReactDOM.render(root, document.getElementById('router-view'));
};
