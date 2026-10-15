'use client';
import { useEffect, useRef, useState } from 'react';
import CaretDown from '~/components/icons/CaretDown';

type ProjectView = 'modding' | 'web' | 'legacy';
export type LegacyView = 'planetminecraft';

const PROJECT_TABS: { id: Exclude<ProjectView, 'legacy'>; label: string }[] = [
  { id: 'modding', label: 'Modding Projects' },
  { id: 'web', label: 'Web Projects' },
];

const LEGACY_TABS: { id: LegacyView; label: string }[] = [
  { id: 'planetminecraft', label: 'PlanetMinecraft' },
];

const tabClasses = (active: boolean) =>
  `px-6 py-3 text-lg font-semibold transition-colors focus:outline-none 
    ${active
      ? 'text-sky-400 border-b-2 border-sky-400'
      : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
    }
  `;

export const ProjectViewManager = ({
  moddingContent,
  webContent,
  legacyContent,
}: {
  moddingContent: React.ReactNode;
  webContent: React.ReactNode;
  legacyContent: Record<LegacyView, React.ReactNode>;
}) => {
  const [currentView, setCurrentView] = useState<ProjectView>('modding');
  const [currentLegacyView, setCurrentLegacyView] = useState<LegacyView>('planetminecraft');
  const [legacyMenuOpen, setLegacyMenuOpen] = useState(false);
  const legacyMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!legacyMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!legacyMenuRef.current?.contains(event.target as Node)) setLegacyMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLegacyMenuOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [legacyMenuOpen]);

  const activeLegacyLabel = LEGACY_TABS.find((tab) => tab.id === currentLegacyView)?.label;

  return (
    <div className="py-1 w-full">
      <div className="w-full mb-8 border-b border-slate-700">
        <div className="flex justify-center">
          {PROJECT_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className={tabClasses(currentView === tab.id)}
            >
              {tab.label}
            </button>
          ))}

          <div className="relative" ref={legacyMenuRef}>
            <button
              onClick={() => setLegacyMenuOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={legacyMenuOpen}
              className={`${tabClasses(currentView === 'legacy')} flex items-center gap-2`}
            >
              Legacy Projects
              {currentView === 'legacy' && (
                <span className="text-sm font-normal text-slate-400">/ {activeLegacyLabel}</span>
              )}
              <span className={`transition-transform ${legacyMenuOpen ? 'rotate-180' : ''}`}>
                <CaretDown />
              </span>
            </button>

            {legacyMenuOpen && (
              <div
                role="menu"
                className="absolute left-1/2 z-20 mt-1 w-52 -translate-x-1/2 overflow-hidden rounded-xl border-2 border-slate-500 bg-slate-800 shadow-lg"
              >
                {LEGACY_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    role="menuitem"
                    onClick={() => {
                      setCurrentView('legacy');
                      setCurrentLegacyView(tab.id);
                      setLegacyMenuOpen(false);
                    }}
                    className={`block w-full px-4 py-3 text-left text-base transition-colors focus:outline-none 
                      ${currentView === 'legacy' && currentLegacyView === tab.id
                        ? 'bg-slate-700 text-sky-400'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-slate-100'
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {currentView === 'modding' && moddingContent}
      {currentView === 'web' && webContent}
      {currentView === 'legacy' && legacyContent[currentLegacyView]}
    </div>
  );
};
