import type { ReactNode } from 'react';

export type ViewType = 
  | 'Contacts'
  | 'Birthdays'
  | 'Reminders'
  | 'Tasks'
  | 'Recipes'
  | 'Shopping'
  | 'Wedding'
  | 'Trading'
  | 'Coaches';

export interface ListItem {
  id: number;
  isFavorite: boolean;
  // FIX: Use ReactNode type for icon property.
  icon?: ReactNode;
  name: string;
  assignee: string;
  status?: {
    text: string;
    color: 'yellow' | 'blue' | 'green' | 'red' | 'indigo' | 'pink' | 'purple';
  };
  activity: string;
}