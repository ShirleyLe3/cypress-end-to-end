import {sum, square} from '../../src/util';

const greet = () => 'hello';

describe('testing math util function', () => {
    it('sum returns correct value', () => {
        expect(sum(1, 2)).to.equal(3)
})

it('square returns correct value', () => {
    expect(sum(2)).to.equal(4)
})
it('greet function returns hello', () => {
        expect(greet()).to.equal('hello')    
})
})        