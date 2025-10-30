'use client';

import * as React from 'react';
import { TemplateType, TEMPLATE_TYPES } from '@/lib/constants';

interface FilterBarProps {
  activeFilter: TemplateType | 'all';
  onFilterChange: (filter: TemplateType | 'all') => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-sm">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-md py-sm text-sm uppercase tracking-wider rounded border transition-bauhaus duration-300 ${
          activeFilter === 'all'
            ? 'bg-technical-violet text-architect-green border-technical-violet'
            : 'bg-transparent text-neutral-grey border-neutral-grey/40 hover:border-technical-violet'
        }`}
      >
        All
      </button>
      {TEMPLATE_TYPES.map((type) => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`px-md py-sm text-sm uppercase tracking-wider rounded border transition-bauhaus duration-300 ${
            activeFilter === type
              ? 'bg-technical-violet text-architect-green border-technical-violet'
              : 'bg-transparent text-neutral-grey border-neutral-grey/40 hover:border-technical-violet'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

