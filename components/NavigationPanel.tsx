import React from 'react';
import { Location, RouteData } from '../types';

interface NavigationPanelProps {
  locations: Location[];
  startId: string;
  endId: string;
  onStartChange: (id: string) => void;
  onEndChange: (id: string) => void;
  routeData: RouteData | null;
  error: string | null;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  locations,
  startId,
  endId,
  onStartChange,
  onEndChange,
  routeData,
  error
}) => {
  
  const renderOptions = (disableId: string) => {
    const floors = { 0: "Ground Floor", 1: "1st Floor" };
    return [0, 1].map(floor => (
      <optgroup key={floor} label={floors[floor as 0 | 1]}>
        {locations.filter(l => l.floor === floor).map(loc => (
          <option key={loc.id} value={loc.id} disabled={loc.id === disableId}>
            {loc.name}
          </option>
        ))}
      </optgroup>
    ));
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Controls Card */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Route Setup
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Start Location</label>
            <div className="relative">
              <select
                value={startId}
                onChange={(e) => onStartChange(e.target.value)}
                className="w-full bg-slate-900 text-white border border-slate-600 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
              >
                <option value="">Select Start Point...</option>
                {renderOptions(endId)}
              </select>
              <div className="absolute right-3 top-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center -my-2 relative z-10">
             <div className="bg-slate-700 rounded-full p-1 border border-slate-600 text-slate-400">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
             </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Destination</label>
            <div className="relative">
              <select
                value={endId}
                onChange={(e) => onEndChange(e.target.value)}
                className="w-full bg-slate-900 text-white border border-slate-600 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
              >
                <option value="">Select Destination...</option>
                {renderOptions(startId)}
              </select>
              <div className="absolute right-3 top-3.5 pointer-events-none text-slate-400">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Card */}
      <div className={`flex-grow bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden transition-all duration-300 ${routeData ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
        <div className="p-4 bg-slate-750 border-b border-slate-700 flex justify-between items-center bg-slate-900/50">
          <h3 className="font-bold text-slate-200">Directions</h3>
          {routeData && (
            <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
              {routeData.time || 'N/A'} • {routeData.distance || 'Multi-Floor'}
            </span>
          )}
        </div>
        
        <div className="p-4 overflow-y-auto h-full max-h-[300px]">
          {error && (
            <div className="text-rose-400 text-sm text-center py-4 bg-rose-500/10 rounded-lg border border-rose-500/20">
              {error}
            </div>
          )}

          {!routeData && !error && (
            <div className="text-slate-500 text-sm text-center py-8 italic">
              Select a start and destination to see path.
            </div>
          )}

          {routeData && (
            <ol className="relative border-l border-slate-600 ml-3 space-y-6 my-2">
              {routeData.steps.map((step, idx) => (
                <li key={idx} className="mb-2 ml-6">
                  <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-slate-800 ${idx === routeData.steps.length - 1 ? 'bg-rose-500 text-white' : 'bg-slate-700 text-cyan-400'}`}>
                    {idx === routeData.steps.length - 1 ? (
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    ) : (
                         <span className="text-xs font-bold">{idx + 1}</span>
                    )}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};