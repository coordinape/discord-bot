import { pluralize } from './pluralize';

describe('pluralize', () => {
	it('returns the singular noun when count is 1', () => {
		const result = pluralize({ count: 1, noun: 'active alert' });
		expect(result).toEqual('1 active alert');
	});

	it('returns the plural noun when count is not 1', () => {
		const result = pluralize({ count: 3, noun: 'active alert' });
		expect(result).toEqual('3 active alerts');
	});
});
