import { default as tpl } from '../../../templates';
import { default as pkg } from '../../../../package.json';

export default (params = { }) => {
  params.message = params.message || '';
  let el = document.createElement('div');
  params.pkg = pkg.devDependencies;
  params.pkgs = ['bootstrap', 'directify', 'grunt-dot-compiler', 'jasmine-core', 'phantomjs', 'babelify', 'browserify'];
  el.innerHTML = tpl['hello'](params);
  return el;
};
