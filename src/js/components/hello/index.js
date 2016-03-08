import { default as tpl } from '../../../templates';

export default (params = { }) => {
  params.message = params.message || 'Holaaaaaaaa';
  let el = document.createElement('div');
  el.innerHTML = tpl['hello'](params);
  return el;
};
