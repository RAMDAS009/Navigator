import React, { useState, useEffect } from 'react';
import { CampusMap } from './components/CampusMap';
import { NavigationPanel } from './components/NavigationPanel';
import { LOCATIONS, ROUTES_GROUND, ROUTES_F1 } from './constants';
import { RouteData } from './types';

function App() {
  const [activeFloor, setActiveFloor] = useState<number>(0);
  const [startId, setStartId] = useState<string>('');
  const [endId, setEndId] = useState<string>('');
  const [currentRoute, setCurrentRoute] = useState<RouteData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Auto-switch floor based on selection
  useEffect(() => {
    if (startId) {
      const loc = LOCATIONS.find(l => l.id === startId);
      if (loc) setActiveFloor(loc.floor);
    }
  }, [startId]);

  // Routing Logic
  useEffect(() => {
    if (!startId || !endId) {
      setCurrentRoute(null);
      setError(null);
      return;
    }

    if (startId === endId) {
      setCurrentRoute(null);
      setError("You are already at the destination.");
      return;
    }

    const startLoc = LOCATIONS.find(l => l.id === startId);
    const endLoc = LOCATIONS.find(l => l.id === endId);

    if (!startLoc || !endLoc) return;

    let route: RouteData | null = null;
    let err = null;

    if (startLoc.floor === endLoc.floor) {
      // Same Floor Navigation
      const routeKey = `${startId}-${endId}`;
      const routes = startLoc.floor === 0 ? ROUTES_GROUND : ROUTES_F1;
      route = routes[routeKey] || null;
      if (!route) err = "Route not found for this pair.";
    } else {
      // Cross Floor Navigation via Staircase 1
      // Route A: Start -> Stairs (Floor A)
      // Route B: Stairs (Floor B) -> End
      
      const stairSourceId = startLoc.floor === 0 ? 'staircase_1' : 'staircase_1_f1';
      const stairDestId = endLoc.floor === 0 ? 'staircase_1' : 'staircase_1_f1';

      const routesA = startLoc.floor === 0 ? ROUTES_GROUND : ROUTES_F1;
      const routesB = endLoc.floor === 0 ? ROUTES_GROUND : ROUTES_F1;

      const routeA = routesA[`${startId}-${stairSourceId}`];
      const routeB = routesB[`${stairDestId}-${endId}`];

      if (routeA && routeB) {
        route = {
          pathIds: [...routeA.pathIds, ...routeB.pathIds],
          steps: [
            ...routeA.steps,
            { text: `Take stairs to ${endLoc.floor === 0 ? 'Ground Floor' : '1st Floor'}.`, icon: 'straight' },
            ...routeB.steps
          ],
          time: '6 mins', // Estimated
          distance: 'Multi-Floor'
        };
      } else {
        err = "Could not calculate cross-floor route.";
      }
    }

    setCurrentRoute(route);
    setError(err);

  }, [startId, endId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            TechFest Navigator
          </h1>
          <p className="text-slate-400 mt-1">Indoor navigation system</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-700 text-xs font-mono text-cyan-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          System Online
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Map */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="sticky top-8">
            {/* Floor Tabs */}
            <div className="flex space-x-2 mb-4">
              <button 
                onClick={() => setActiveFloor(0)}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all border ${activeFloor === 0 ? 'bg-slate-900 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
              >
                Ground Floor
              </button>
              <button 
                onClick={() => setActiveFloor(1)}
                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all border ${activeFloor === 1 ? 'bg-slate-900 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
              >
                1st Floor
              </button>
            </div>

            <div className="bg-slate-900/50 backdrop-blur rounded-xl p-1 border border-slate-800">
              <CampusMap 
                floor={activeFloor}
                activePathIds={currentRoute?.pathIds || []} 
                startLocationId={startId}
                endLocationId={endId}
                onLocationSelect={(id) => {
                  if (id !== endId) {
                    setStartId(id);
                  }
                }}
              />
            </div>
            <p className="text-center text-xs text-slate-500 mt-3 font-mono">
              Use tabs to switch floors • Auto-switch on route
            </p>
          </div>
        </div>

        {/* Right Column: Controls */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <NavigationPanel
            locations={LOCATIONS}
            startId={startId}
            endId={endId}
            onStartChange={setStartId}
            onEndChange={setEndId}
            routeData={currentRoute}
            error={error}
          />
        </div>

      </main>
    </div>
  );
}

export default App;