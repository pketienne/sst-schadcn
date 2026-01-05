import { describe, expect, it } from 'vitest';
import { cn, formatDate } from './utils';

describe('cn', () => {
	it('should combine multiple class names', () => {
		expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
	});

	it('should filter out falsy values', () => {
		expect(cn('class1', null, undefined, false, 'class2')).toBe('class1 class2');
	});

	it('should handle empty input', () => {
		expect(cn()).toBe('');
	});
});

describe('formatDate', () => {
	it('should format date correctly', () => {
		const date = new Date('2025-01-04');
		const formatted = formatDate(date);
		expect(formatted).toMatch(/January 4, 2025/);
	});
});
