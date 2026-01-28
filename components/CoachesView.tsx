
import React from 'react';
import { SparklesIcon } from './icons/IconComponents';

const CoachCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
        <div className="p-4 bg-indigo-100 rounded-full mb-4">
            <SparklesIcon className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-500 mb-6">{description}</p>
        <button className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition-colors">
            Start Session
        </button>
    </div>
);


const CoachesView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800">Welcome to your Personal Coaches</h1>
            <p className="mt-4 text-lg text-slate-600">Interactive modules to help you grow and achieve your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CoachCard 
                title="Life Coach"
                description="Navigate life's challenges, set meaningful goals, and unlock your full potential with personalized guidance."
            />
            <CoachCard
                title="Trading Coach"
                description="Master the markets, refine your strategy, and manage risk effectively with an AI-powered trading mentor."
            />
        </div>
    </div>
  );
};

export default CoachesView;
