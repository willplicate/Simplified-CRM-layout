
import React from 'react';
import type { ListItem as ListItemType } from '../types';

interface ListItemProps {
  item: ListItemType;
}

const StatusPill: React.FC<{ status: NonNullable<ListItemType['status']> }> = ({ status }) => {
  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    indigo: 'bg-indigo-100 text-indigo-800',
    pink: 'bg-pink-100 text-pink-800',
    purple: 'bg-purple-100 text-purple-800',
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${colorClasses[status.color]}`}>
      {status.text}
    </span>
  );
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center py-3.5 hover:bg-slate-50 rounded-md -mx-2 px-2 transition-colors">
      <div className="col-span-1 flex items-center">
        <button className="text-slate-400 hover:text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${item.isFavorite ? 'text-amber-400 fill-current' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      </div>
      <div className="col-span-5 flex items-center">
        {item.icon && <div className="mr-3">{item.icon}</div>}
        <span className="font-semibold text-slate-800 text-sm">{item.name}</span>
      </div>
      <div className="col-span-2 text-sm text-slate-500">
        For: {item.assignee}
      </div>
      <div className="col-span-1">
        {item.status && <StatusPill status={item.status} />}
      </div>
      <div className="col-span-2 text-sm text-slate-500 text-right">
        Active: {item.activity}
      </div>
      <div className="col-span-1 flex justify-end">
        <button className="p-1 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
