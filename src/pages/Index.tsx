
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🍴</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                맛집탐정
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
                className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                {viewMode === 'map' ? '목록' : '지도'}
              </button>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="mt-3">
            <FilterTabs 
              selectedFilter={selectedFilter} 
              onFilterChange={setSelectedFilter}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {selectedRestaurant ? (
          <RestaurantDetail 
            restaurant={selectedRestaurant}
            onBack={() => setSelectedRestaurant(null)}
            filter={selectedFilter}
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
