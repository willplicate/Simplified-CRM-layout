
import React, { useState, useMemo } from 'react';
import type { ViewType, ListItem as ListItemType } from '../types';
import ListItem from './ListItem';
import { mockData } from '../mockData';

interface ItemListViewProps {
  viewType: ViewType;
}

const ItemListView: React.FC<ItemListViewProps> = ({ viewType }) => {
  const [activeTab, setActiveTab] = useState('Active');
  const [viewMode, setViewMode] = useState('list');

  const data = useMemo(() => mockData[viewType] || [], [viewType]);

  const favorites = data.filter(item => item.isFavorite);
  const others = data.filter(item => !item.isFavorite);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg">
          <button onClick={() => setActiveTab('Active')} className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Active' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Active</button>
          <button onClick={() => setActiveTab('Completed')} className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Completed' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Completed</button>
          <button onClick={() => setActiveTab('Templates')} className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Templates' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Templates</button>
        </div>

        {/* Filters and View Options */}
        <div className="flex items-center space-x-2 bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
          <button className="flex items-center px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 8h18M3 12h18m-9 4h9m-9 4h9" /></svg>
            Filter
          </button>
          <div className="w-px h-5 bg-slate-200"></div>
          <span className="text-sm text-slate-500 px-3">Group: Favorite</span>
          <div className="w-px h-5 bg-slate-200"></div>
          <span className="text-sm text-slate-500 px-3">Sort: Activity</span>
          <div className="w-px h-5 bg-slate-200"></div>
          <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
          </button>
          <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="p-4">
            <h3 className="text-xs font-semibold uppercase text-slate-400 mb-2">Favorite ({favorites.length})</h3>
            <div className="divide-y divide-slate-100">
              {favorites.map(item => <ListItem key={item.id} item={item} />)}
            </div>
          </div>
        )}
        
        {/* Others Section */}
        {others.length > 0 && (
          <div className="p-4">
            <h3 className="text-xs font-semibold uppercase text-slate-400 mb-2">Other ({others.length})</h3>
            <div className="divide-y divide-slate-100">
              {others.map(item => <ListItem key={item.id} item={item} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListView;
