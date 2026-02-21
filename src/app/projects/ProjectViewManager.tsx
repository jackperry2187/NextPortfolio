'use client';
import { useState } from 'react';

type ProjectView = 'modding' | 'web';

export const ProjectViewManager = ({
  moddingContent,
  webContent,
}: {
  moddingContent: React.ReactNode;
  webContent: React.ReactNode;
}) => {
  const [currentView, setCurrentView] = useState<ProjectView>('modding');

  return (
    <div className="py-1 w-full">
      <div className="w-full mb-8 border-b border-slate-700">
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentView('modding')}
            className={`px-6 py-3 text-lg font-semibold transition-colors focus:outline-none 
              ${currentView === 'modding'
                ? 'text-sky-400 border-b-2 border-sky-400'
                : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
              }
            `}
          >
            Modding Projects
          </button>
          <button
            onClick={() => setCurrentView('web')}
            className={`px-6 py-3 text-lg font-semibold transition-colors focus:outline-none 
              ${currentView === 'web'
                ? 'text-sky-400 border-b-2 border-sky-400'
                : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
              }
            `}
          >
            Web Projects
          </button>
        </div>
      </div>

      {currentView === 'modding' ? moddingContent : webContent}
    </div>
  );
};
