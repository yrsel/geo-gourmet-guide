
import React from 'react';
import { FilterType } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

interface FilterTabsProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ selectedFilter, onFilterChange }) => {
  const mainTabs = [
    { key: 'local' as FilterType, label: '로컬 추천', icon: '🏠', color: 'from-green-500 to-emerald-500' },
    { key: 'all' as FilterType, label: '통합 추천', icon: '🔥', color: 'from-indigo-500 to-purple-500' },
  ];

  const sortOptions = [
    { key: 'highRating' as FilterType, label: '별점 높은 순', icon: '⭐' },
    { key: 'manyReviews' as FilterType, label: '리뷰 많은 순', icon: '💬' },
    { key: 'tourist' as FilterType, label: '관광객 추천', icon: '✈️' },
  ];

  const getCurrentSortLabel = () => {
    const option = sortOptions.find(opt => opt.key === selectedFilter);
    return option ? option.label : '정렬';
  };

  return (
    <div className="flex items-center justify-between">
      {/* 메인 탭들 */}
      <div className="flex space-x-2">
        {mainTabs.map((tab) => (
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

      {/* 정렬 드롭다운 */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <span>{getCurrentSortLabel()}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.key}
              onClick={() => onFilterChange(option.key)}
              className={`flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 ${
                selectedFilter === option.key ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span>{option.icon}</span>
              <span>{option.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterTabs;
