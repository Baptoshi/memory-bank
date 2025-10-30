import { describe, it, expect } from 'vitest';
import { slugify, formatDate } from '@/lib/utils';

describe('utils', () => {
  describe('slugify', () => {
    it('converts text to lowercase kebab-case', () => {
      expect(slugify('Architecture Document')).toBe('architecture-document');
    });

    it('removes special characters', () => {
      expect(slugify('Design-Doc: Version 2.0!')).toBe('design-doc-version-2-0');
    });

    it('handles multiple spaces', () => {
      expect(slugify('Memory   Bank   Template')).toBe('memory-bank-template');
    });

    it('trims leading and trailing dashes', () => {
      expect(slugify('-implementation-plan-')).toBe('implementation-plan');
    });
  });

  describe('formatDate', () => {
    it('formats date string correctly', () => {
      const date = '2025-10-30T00:00:00.000Z';
      const formatted = formatDate(date);
      expect(formatted).toContain('2025');
    });

    it('formats Date object correctly', () => {
      const date = new Date('2025-10-30');
      const formatted = formatDate(date);
      expect(formatted).toContain('2025');
    });
  });
});

