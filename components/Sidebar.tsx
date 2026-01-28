
import React from 'react';
import type { ViewType } from '../types';
import { UsersIcon, CakeIcon, BellIcon, ClipboardListIcon, BookOpenIcon, ShoppingCartIcon, HeartIcon, ChartBarIcon, SparklesIcon } from './icons/IconComponents';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: ViewType;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li
    className={`flex items-center p-2.5 my-1 rounded-md cursor-pointer transition-colors ${
      isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm font-medium ml-3">{label}</span>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems: { label: ViewType; icon: React.ReactNode }[] = [
    { label: 'Contacts', icon: <UsersIcon className="w-5 h-5" /> },
    { label: 'Birthdays', icon: <CakeIcon className="w-5 h-5" /> },
    { label: 'Reminders', icon: <BellIcon className="w-5 h-5" /> },
    { label: 'Tasks', icon: <ClipboardListIcon className="w-5 h-5" /> },
    { label: 'Recipes', icon: <BookOpenIcon className="w-5 h-5" /> },
    { label: 'Shopping', icon: <ShoppingCartIcon className="w-5 h-5" /> },
    { label: 'Wedding', icon: <HeartIcon className="w-5 h-5" /> },
    { label: 'Trading', icon: <ChartBarIcon className="w-5 h-5" /> },
    { label: 'Coaches', icon: <SparklesIcon className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col p-4">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </div>
        <h1 className="text-xl font-bold ml-3">HomeBase</h1>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activeView === item.label}
              onClick={() => setActiveView(item.label)}
            />
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-slate-100 rounded-lg text-center">
        <p className="text-sm text-slate-600">Upgrade to Pro</p>
        <p className="text-xs text-slate-500 mt-1">Unlock all features and get unlimited access.</p>
        <button className="mt-3 w-full bg-indigo-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-indigo-700">
          Upgrade
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
