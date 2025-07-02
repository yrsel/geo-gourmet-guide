
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
    { key: 'highRating' as FilterType, label: '별점 높은 순', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
    { key: 'manyReviews' as FilterType, label: '리뷰 많은 순', icon: '💬', color: 'from-purple-500 to-pink-500' },
    { key: 'all' as FilterType, label: '통합 추천', icon: '🔥', color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onFilterChange(tab.key)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
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
