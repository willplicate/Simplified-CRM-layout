
import React from 'react';
import type { ViewType } from '../types';
import Header from './Header';
import ItemListView from './ItemListView';
import CoachesView from './CoachesView';

interface MainContentProps {
  activeView: ViewType;
}

const MainContent: React.FC<MainContentProps> = ({ activeView }) => {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      <Header title={activeView} />
      <div className="flex-1 overflow-y-auto p-8">
        {activeView === 'Coaches' ? <CoachesView /> : <ItemListView viewType={activeView} />}
      </div>
    </main>
  );
};

export default MainContent;
