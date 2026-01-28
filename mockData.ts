import type { ListItem, ViewType } from './types';
import React from 'react';

// FIX: Replace JSX with React.createElement to prevent parsing errors in a .ts file.
const createProjectIcon = (color: string) => (
  React.createElement('div', { className: `w-5 h-5 rounded-sm bg-${color}-500` })
);

export const mockData: Record<ViewType, ListItem[]> = {
  Contacts: [
    { id: 1, isFavorite: true, name: 'Alice Johnson', assignee: 'Personal', status: { text: 'Follow Up', color: 'yellow' }, activity: '10 mins ago' },
    { id: 2, isFavorite: false, name: 'Bob Williams', assignee: 'Work', status: { text: 'Connected', color: 'green' }, activity: '2 hours ago' },
    { id: 3, isFavorite: false, name: 'Charlie Brown', assignee: 'Work', status: { text: 'New', color: 'blue' }, activity: '1 day ago' },
  ],
  Birthdays: [
    { id: 1, isFavorite: true, name: 'Mom\'s Birthday', assignee: 'Family', status: { text: 'In 3 Days', color: 'pink' }, activity: 'Upcoming' },
    { id: 2, isFavorite: false, name: 'John Smith', assignee: 'Friend', status: { text: 'Next Month', color: 'purple' }, activity: 'Upcoming' },
  ],
  Reminders: [
    { id: 1, isFavorite: true, name: 'Call insurance company', assignee: 'Personal', status: { text: 'Today', color: 'red' }, activity: 'Due at 2 PM' },
    { id: 2, isFavorite: false, name: 'Book dentist appointment', assignee: 'Personal', status: { text: 'This Week', color: 'yellow' }, activity: 'Due Friday' },
  ],
  Tasks: [
    { id: 1, isFavorite: true, name: 'Design new landing page', assignee: 'Work Project', icon: createProjectIcon('pink'), status: { text: 'In Progress', color: 'blue' }, activity: '20 mins ago' },
    { id: 2, isFavorite: true, name: 'Finalize Q3 report', assignee: 'Work Project', icon: createProjectIcon('indigo'), status: { text: 'Review', color: 'yellow' }, activity: '1 hour ago' },
    { id: 3, isFavorite: false, name: 'Grocery shopping', assignee: 'Personal', icon: createProjectIcon('green'), status: { text: 'To Do', color: 'indigo' }, activity: '5 hours ago' },
    { id: 4, isFavorite: false, name: 'Plan weekend trip', assignee: 'Personal', icon: createProjectIcon('blue'), status: { text: 'Planning', color: 'purple' }, activity: '2 days ago' },
  ],
  Recipes: [
    { id: 1, isFavorite: true, name: 'Spaghetti Carbonara', assignee: 'Italian', status: { text: 'Dinner', color: 'yellow' }, activity: '30 mins' },
    { id: 2, isFavorite: false, name: 'Chicken Tikka Masala', assignee: 'Indian', status: { text: 'Dinner', color: 'yellow' }, activity: '1 hour' },
    { id: 3, isFavorite: false, name: 'Classic Pancakes', assignee: 'American', status: { text: 'Breakfast', color: 'blue' }, activity: '20 mins' },
  ],
  Shopping: [
    { id: 1, isFavorite: true, name: 'Milk, Eggs, Bread', assignee: 'Groceries', status: { text: 'Weekly', color: 'green' }, activity: 'Today' },
    { id: 2, isFavorite: false, name: 'New running shoes', assignee: 'Personal', status: { text: 'Wishlist', color: 'pink' }, activity: 'This month' },
  ],
  Wedding: [
    { id: 1, isFavorite: true, name: 'Book photographer', assignee: 'Vendors', status: { text: 'Urgent', color: 'red' }, activity: 'Due this week' },
    { id: 2, isFavorite: true, name: 'Finalize guest list', assignee: 'Planning', status: { text: 'In Progress', color: 'blue' }, activity: 'Due next month' },
    { id: 3, isFavorite: false, name: 'Send save-the-dates', assignee: 'Stationery', status: { text: 'Done', color: 'green' }, activity: '2 months ago' },
  ],
  Trading: [
    { id: 1, isFavorite: true, name: 'AAPL - Long Position', assignee: 'Tech Stocks', status: { text: 'Active', color: 'green' }, activity: 'Entry: $150.00' },
    { id: 2, isFavorite: false, name: 'TSLA - Watchlist', assignee: 'EV Stocks', status: { text: 'Monitoring', color: 'blue' }, activity: 'Alert at $180' },
    { id: 3, isFavorite: false, name: 'BTC/USD - Swing Trade', assignee: 'Crypto', status: { text: 'Closed', color: 'indigo' }, activity: '+5.2% Gain' },
  ],
  Coaches: [],
};