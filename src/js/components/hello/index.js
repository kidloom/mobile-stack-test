import { default as tpl } from '../../../templates';
import { default as pkg } from '../../../../package.json';
import { range, each } from 'lodash';

export default (params = { }) => {
  params.message = params.message || '';
  let el = document.createElement('div');
  params.pkg = pkg.devDependencies;
  params.pkgs = ['bootstrap', 'director', 'grunt-dot-compiler', 'jasmine-core', 'phantomjs', 'babelify', 'browserify'];
  el.innerHTML = tpl['hello'](params);

  // lodash proof
  each(range(10), r => window.console.log(`lodash & arrow fns testing ${r}`));
  return el;
};
