
import React, { useState } from 'react';
import MapView from '@/components/MapView';
import FilterTabs from '@/components/FilterTabs';
import RestaurantList from '@/components/RestaurantList';
import RestaurantDetail from '@/components/RestaurantDetail';
import { Restaurant } from '@/types';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState<'local' | 'tourist' | 'all'>('local');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const handleLogoClick = () => {
    setSelectedRestaurant(null);
    setViewMode('map');
    setSelectedFilter('local');
  };

  const handleViewModeChange = (mode: 'map' | 'list') => {
    setViewMode(mode);
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-indigo-100">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔍</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                맛.zip
              </h1>
            </div>
            {!selectedRestaurant && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleViewModeChange(viewMode === 'map' ? 'list' : 'map')}
                  className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-colors"
                >
                  {viewMode === 'map' ? '목록' : '지도'}
                </button>
              </div>
            )}
          </div>
          
          {/* Filter Tabs - 상세페이지에서는 숨김 */}
          {!selectedRestaurant && (
            <div className="mt-3">
              <FilterTabs 
                selectedFilter={selectedFilter} 
                onFilterChange={setSelectedFilter}
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {selectedRestaurant ? (
          <RestaurantDetail 
            restaurant={selectedRestaurant}
            onBack={() => setSelectedRestaurant(null)}
            filter={selectedFilter}
            onViewModeChange={handleViewModeChange}
          />
        ) : (
          <>
            {viewMode === 'map' ? (
              <MapView
                filter={selectedFilter}
                onRestaurantSelect={setSelectedRestaurant}
              />
            ) : (
              <RestaurantList
                filter={selectedFilter}
                onRestaurantSelect={setSelectedRestaurant}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
