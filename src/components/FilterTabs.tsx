
import React from 'react';
import { FilterType } from '@/types';

interface FilterTabsProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ selectedFilter, onFilterChange }) => {
  const tabs = [
    { key: 'local' as FilterType, label: '로컬 추천', icon: '🏠', color: 'from-green-500 to-emerald-500' },
    { key: 'tourist' as FilterType, label: '관광객 추천', icon: '✈️', color: 'from-blue-500 to-indigo-500' },
    { key: 'all' as FilterType, label: '통합 추천', icon: '⭐', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onFilterChange(tab.key)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedFilter === tab.key
              ? `bg-gradient-to-r ${tab.color} text-white shadow-md`
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
