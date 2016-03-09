import HelloComponent from './../../../src/js/components/hello';

describe('HelloComponent', function() {
	it('show display a message', function() {
    let random = 'asdqwekhbasdfabweqklb45234535sadf';
    expect(HelloComponent({message: random}).innerHTML).toMatch(new RegExp('.*'+random+'.*'));
	});
});
