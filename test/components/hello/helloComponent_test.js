/* global __html__ */
import HelloComponent from './../../../src/js/components/hello';

describe('HelloComponent', function() {
  let content;
  let layout = document.createElement('div');
  let random = 'asdqwekhbasdfabweqklb45234535sadf';

  beforeEach(() => {
    content = HelloComponent({message: random});
    layout.innerHTML = __html__['test/karma.html'];
    document.body.appendChild(layout);
    document.getElementById('router-view').appendChild(content);
  });

  afterEach(() => document.body.removeChild(layout));

  it('show display a message', function() {
    expect(content.innerHTML).toMatch(random);
  });
});
