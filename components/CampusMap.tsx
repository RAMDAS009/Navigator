import React, { useRef } from 'react';

interface CampusMapProps {
  floor: number;
  activePathIds: string[];
  startLocationId: string | null;
  endLocationId: string | null;
  onLocationSelect: (id: string) => void;
}

export const CampusMap: React.FC<CampusMapProps> = ({ 
  floor,
  activePathIds, 
  startLocationId, 
  endLocationId, 
  onLocationSelect 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const handleLocationClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onLocationSelect(id);
  };

  const getPathClass = (id: string) => {
    const isActive = activePathIds.includes(id);
    let classes = "fill-none stroke-[6] transition-all duration-700 stroke-linecap-round stroke-linejoin-round ";
    if (isActive) {
      classes += "stroke-cyan-400 opacity-100 path-active drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]";
    } else {
      classes += "stroke-slate-700/50 opacity-40 stroke-dashed";
    }
    return classes;
  };

  const getLocationClass = (id: string) => {
    let base = "transition-all duration-300 cursor-pointer ";
    if (id === startLocationId) {
       return base + "fill-cyan-900/80 stroke-cyan-400 stroke-2";
    }
    if (id === endLocationId) {
       return base + "fill-rose-900/80 stroke-rose-400 stroke-2";
    }
    return base + "fill-slate-800 stroke-slate-200 stroke-2 hover:fill-slate-700 hover:stroke-white";
  };

  const getTextClass = (id: string) => {
    if (id === startLocationId) return "fill-cyan-200 font-bold drop-shadow-md pointer-events-none";
    if (id === endLocationId) return "fill-rose-200 font-bold drop-shadow-md pointer-events-none";
    return "fill-slate-400 text-xs font-semibold pointer-events-none select-none";
  }

  // Coordinate Mapping
  const getCoords = (id: string) => {
    // Ground
    if(id === 'gate_1') return {x: 100, y: 900};
    if(id === 'gate_2') return {x: 500, y: 900};
    if(id === 'gate_3') return {x: 900, y: 900};
    if(id === 'auditorium') return {x: 500, y: 400};
    if(id === 'canteen') return {x: 850, y: 150};
    if(id === 'management') return {x: 150, y: 400};
    if(id === 'staircase_1') return {x: 850, y: 500};
    if(id === 'staircase_2') return {x: 150, y: 100};
    if(id === 'lift') return {x: 950, y: 500};

    // Floor 1
    if(id === 'lab_1_f1') return {x: 120, y: 120};
    if(id === 'class_1a_f1') return {x: 340, y: 120};
    if(id === 'class_1b_f1') return {x: 560, y: 120};
    if(id === 'class_1c_f1') return {x: 780, y: 120};
    if(id === 'class_1d_f1') return {x: 915, y: 380};
    if(id === 'lab_2_f1') return {x: 915, y: 600};
    if(id === 'toilet_f1') return {x: 120, y: 850};
    if(id === 'staircase_1_f1') return {x: 875, y: 810}; 
    if(id === 'lift_f1') return {x: 935, y: 810};
    
    return {x: 0, y: 0};
  };

  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative group">
      {/* Tooltip hint */}
      <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-600 px-3 py-1.5 rounded-lg text-xs text-slate-300 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
        Click location to set "You Are Here"
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 1000 1000"
        className="w-full h-auto block touch-manipulation"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
          <filter id="glow-start">
             <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
             <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        
        <rect width="1000" height="1000" fill="url(#grid)" onClick={(e) => e.stopPropagation()} />

        {/* ================= FLOOR 0 LAYOUT ================= */}
        {floor === 0 && (
          <g id="floor-0-layer">
            {/* Ground Paths */}
            <path id="p-g1-junc" d="M 100 900 L 100 700" className={getPathClass('p-g1-junc')} strokeDasharray="20 10" />
            <path id="p-horiz-bottom" d="M 100 700 L 750 700" className={getPathClass('p-horiz-bottom')} strokeDasharray="20 10" />
            <path id="p-g2-junc" d="M 500 900 L 500 700" className={getPathClass('p-g2-junc')} strokeDasharray="20 10" />
            <path id="p-horiz-mid" d="M 500 700 L 750 700" className={getPathClass('p-horiz-mid')} strokeDasharray="20 10" />
            <path id="p-g3-junc" d="M 900 900 L 900 700 L 750 700" className={getPathClass('p-g3-junc')} strokeDasharray="20 10" />
            <path id="p-vert-lower-1" d="M 750 700 L 750 500" className={getPathClass('p-vert-lower-1')} strokeDasharray="20 10" />
            <path id="p-vert-lower-2" d="M 750 500 L 750 400" className={getPathClass('p-vert-lower-2')} strokeDasharray="20 10" />
            <path id="p-vert-main-upper" d="M 750 400 L 750 150" className={getPathClass('p-vert-main-upper')} strokeDasharray="20 10" />
            <path id="p-aud-entry" d="M 750 400 L 650 400" className={getPathClass('p-aud-entry')} strokeDasharray="20 10" />
            <path id="p-stair1-entry" d="M 750 500 L 850 500" className={getPathClass('p-stair1-entry')} strokeDasharray="20 10" />
            <path id="p-canteen-entry" d="M 750 150 L 850 150" className={getPathClass('p-canteen-entry')} strokeDasharray="20 10" />
            <path id="p-top-horiz" d="M 750 150 L 150 150" className={getPathClass('p-top-horiz')} strokeDasharray="20 10" />
            <path id="p-top-left-down" d="M 150 150 L 150 200" className={getPathClass('p-top-left-down')} strokeDasharray="20 10" />
            <path id="p-stair2-entry" d="M 150 150 L 150 120" className={getPathClass('p-stair2-entry')} strokeDasharray="20 10" />

            {/* Ground Locations */}
            <g id="loc-management" className={getLocationClass('management')} onClick={(e) => handleLocationClick('management', e)}>
              <rect x="20" y="200" width="230" height="90" rx="4" />
              <rect x="20" y="300" width="230" height="90" rx="4" />
              <rect x="20" y="400" width="230" height="90" rx="4" />
              <rect x="20" y="500" width="230" height="90" rx="4" />
              <text x="135" y="400" textAnchor="middle" className={getTextClass('management') + " text-lg"}>MANAGEMENT</text>
            </g>
            <g id="loc-auditorium" className={getLocationClass('auditorium')} onClick={(e) => handleLocationClick('auditorium', e)}>
              <rect x="300" y="200" width="350" height="400" rx="4" />
              <line x1="650" y1="350" x2="650" y2="450" className="stroke-slate-900 stroke-4" /> 
              <text x="475" y="400" textAnchor="middle" className={getTextClass('auditorium') + " text-2xl"}>AUDITORIUM</text>
            </g>
            <g id="loc-staircase_2" className={getLocationClass('staircase_2')} onClick={(e) => handleLocationClick('staircase_2', e)}>
              <rect x="120" y="20" width="60" height="100" rx="2" />
              <path d="M 120 40 L 180 40 M 120 60 L 180 60 M 120 80 L 180 80" className="stroke-current opacity-50" />
              <text x="150" y="140" textAnchor="middle" className={getTextClass('staircase_2')}>Stair 2</text>
            </g>
            <g id="loc-canteen" className={getLocationClass('canteen')} onClick={(e) => handleLocationClick('canteen', e)}>
              <rect x="750" y="100" width="150" height="150" rx="4" />
              <text x="825" y="180" textAnchor="middle" className={getTextClass('canteen')}>CANTEEN</text>
            </g>
            <g id="loc-staircase_1" className={getLocationClass('staircase_1')} onClick={(e) => handleLocationClick('staircase_1', e)}>
              <rect x="820" y="450" width="50" height="100" rx="2" />
              <path d="M 820 470 L 870 470 M 820 490 L 870 490 M 820 510 L 870 510 M 820 530 L 870 530" className="stroke-current opacity-50" />
              <text x="845" y="440" textAnchor="middle" className={getTextClass('staircase_1')}>Stair 1</text>
            </g>
            <g id="loc-lift" className={getLocationClass('lift')} onClick={(e) => handleLocationClick('lift', e)}>
              <rect x="900" y="450" width="60" height="100" rx="2" />
              <line x1="930" y1="450" x2="930" y2="550" className="stroke-current opacity-50" />
              <text x="930" y="440" textAnchor="middle" className={getTextClass('lift')}>LIFT</text>
            </g>
            <text x="880" y="580" textAnchor="middle" className="fill-slate-500 text-xs pointer-events-none">Way to 1st Floor</text>
            <g id="loc-gate_1" className={getLocationClass('gate_1')} onClick={(e) => handleLocationClick('gate_1', e)}>
              <rect x="50" y="850" width="100" height="80" rx="4" />
              <text x="100" y="895" textAnchor="middle" className={getTextClass('gate_1')}>GATE 1</text>
            </g>
            <g id="loc-gate_2" className={getLocationClass('gate_2')} onClick={(e) => handleLocationClick('gate_2', e)}>
              <rect x="450" y="850" width="100" height="80" rx="4" />
              <text x="500" y="895" textAnchor="middle" className={getTextClass('gate_2')}>GATE 2</text>
            </g>
            <g id="loc-gate_3" className={getLocationClass('gate_3')} onClick={(e) => handleLocationClick('gate_3', e)}>
              <rect x="850" y="850" width="100" height="80" rx="4" />
              <text x="900" y="895" textAnchor="middle" className={getTextClass('gate_3')}>GATE 3</text>
            </g>
            {/* Ground Walls */}
            <rect x="150" y="650" width="600" height="20" className="fill-slate-800 stroke-slate-600" />
            <text x="450" y="645" textAnchor="middle" className="fill-slate-500 text-xs pointer-events-none">WALL</text>
            <rect x="400" y="680" width="200" height="40" className="fill-slate-800 stroke-slate-600" />
            <text x="500" y="705" textAnchor="middle" className="fill-slate-500 text-xs pointer-events-none">LED</text>
          </g>
        )}

        {/* ================= FLOOR 1 LAYOUT ================= */}
        {floor === 1 && (
          <g id="floor-1-layer">
            {/* F1 PATHS - Loop */}
            {/* Bottom: Toilet -> Stairs */}
            <path id="p-f1-bottom" d="M 250 820 L 820 820" className={getPathClass('p-f1-bottom')} strokeDasharray="20 10" />
            {/* Right: Stairs -> Top */}
            <path id="p-f1-right" d="M 820 820 L 820 250" className={getPathClass('p-f1-right')} strokeDasharray="20 10" />
            {/* Top: Across */}
            <path id="p-f1-top" d="M 820 250 L 150 250" className={getPathClass('p-f1-top')} strokeDasharray="20 10" />
            {/* Left: Down */}
            <path id="p-f1-left" d="M 150 250 L 150 820 L 250 820" className={getPathClass('p-f1-left')} strokeDasharray="20 10" />
            
            {/* Connectors */}
            <path id="p-f1-lab1-conn" d="M 150 250 L 150 200" className={getPathClass('p-f1-lab1-conn')} strokeDasharray="20 10" />
            <path id="p-f1-c1a-conn" d="M 340 250 L 340 220" className={getPathClass('p-f1-c1a-conn')} strokeDasharray="20 10" />
            <path id="p-f1-c1b-conn" d="M 560 250 L 560 220" className={getPathClass('p-f1-c1b-conn')} strokeDasharray="20 10" />
            <path id="p-f1-c1c-conn" d="M 780 250 L 780 220" className={getPathClass('p-f1-c1c-conn')} strokeDasharray="20 10" />
            <path id="p-f1-c1d-conn" d="M 820 400 L 850 400" className={getPathClass('p-f1-c1d-conn')} strokeDasharray="20 10" />
            <path id="p-f1-lab2-conn" d="M 820 600 L 850 600" className={getPathClass('p-f1-lab2-conn')} strokeDasharray="20 10" />
            <path id="p-f1-toilet-conn" d="M 150 820 L 120 820" className={getPathClass('p-f1-toilet-conn')} strokeDasharray="20 10" />
            <path id="p-f1-stair1-conn" d="M 820 820 L 850 820" className={getPathClass('p-f1-stair1-conn')} strokeDasharray="20 10" />


            {/* F1 LOCATIONS */}
            <g id="loc-lab_1_f1" className={getLocationClass('lab_1_f1')} onClick={(e) => handleLocationClick('lab_1_f1', e)}>
               <rect x="20" y="20" width="200" height="200" rx="4" />
               <text x="120" y="120" textAnchor="middle" className={getTextClass('lab_1_f1') + " text-xl"}>LAB 1</text>
            </g>
            <g id="loc-class_1a_f1" className={getLocationClass('class_1a_f1')} onClick={(e) => handleLocationClick('class_1a_f1', e)}>
               <rect x="240" y="20" width="200" height="200" rx="4" />
               <text x="340" y="120" textAnchor="middle" className={getTextClass('class_1a_f1')}>CLASS 1</text>
            </g>
            <g id="loc-class_1b_f1" className={getLocationClass('class_1b_f1')} onClick={(e) => handleLocationClick('class_1b_f1', e)}>
               <rect x="460" y="20" width="200" height="200" rx="4" />
               <text x="560" y="120" textAnchor="middle" className={getTextClass('class_1b_f1')}>CLASS 1</text>
            </g>
            <g id="loc-class_1c_f1" className={getLocationClass('class_1c_f1')} onClick={(e) => handleLocationClick('class_1c_f1', e)}>
               <rect x="680" y="20" width="200" height="200" rx="4" />
               <text x="780" y="120" textAnchor="middle" className={getTextClass('class_1c_f1')}>CLASS 1</text>
            </g>
            <g id="loc-class_1d_f1" className={getLocationClass('class_1d_f1')} onClick={(e) => handleLocationClick('class_1d_f1', e)}>
               <rect x="850" y="300" width="130" height="150" rx="4" />
               <text x="915" y="380" textAnchor="middle" className={getTextClass('class_1d_f1')}>CLASS 1</text>
            </g>
            <g id="loc-lab_2_f1" className={getLocationClass('lab_2_f1')} onClick={(e) => handleLocationClick('lab_2_f1', e)}>
               <rect x="850" y="500" width="130" height="200" rx="4" />
               <text x="915" y="600" textAnchor="middle" className={getTextClass('lab_2_f1') + " text-xl"}>LAB 2</text>
            </g>
            <g id="loc-toilet_f1" className={getLocationClass('toilet_f1')} onClick={(e) => handleLocationClick('toilet_f1', e)}>
               <rect x="20" y="750" width="200" height="200" rx="4" />
               <text x="120" y="850" textAnchor="middle" className={getTextClass('toilet_f1') + " text-lg"}>TOILET</text>
            </g>
            <g id="loc-staircase_1_f1" className={getLocationClass('staircase_1_f1')} onClick={(e) => handleLocationClick('staircase_1_f1', e)}>
               <rect x="850" y="780" width="50" height="100" rx="2" />
               <path d="M 850 800 L 900 800 M 850 820 L 900 820 M 850 840 L 900 840" className="stroke-current opacity-50" />
               <text x="875" y="770" textAnchor="middle" className={getTextClass('staircase_1_f1')}>Stair 1</text>
            </g>
            <g id="loc-lift_f1" className={getLocationClass('lift_f1')} onClick={(e) => handleLocationClick('lift_f1', e)}>
               <rect x="910" y="780" width="50" height="100" rx="2" />
               <line x1="935" y1="780" x2="935" y2="880" className="stroke-current opacity-50" />
               <text x="935" y="770" textAnchor="middle" className={getTextClass('lift_f1')}>LIFT</text>
            </g>
            
            {/* Auditorium Void */}
            <rect x="300" y="300" width="400" height="400" fill="none" stroke="#334155" strokeDasharray="5 5" />
            <text x="500" y="500" textAnchor="middle" className="fill-slate-600 font-bold text-2xl opacity-50 select-none">AUDITORIUM (VOID)</text>
          </g>
        )}

        {/* --- MARKERS --- */}
        
        {/* End / Destination Marker */}
        {endLocationId && getCoords(endLocationId) && (
           // Only show if on active floor? Or we can show ghost marker if on other floor. 
           // For simplicity, hiding if not on current floor usually better, but App logic can handle visibility.
           // Here we just render.
           <g transform={`translate(${getCoords(endLocationId).x}, ${getCoords(endLocationId).y})`} className="pointer-events-none">
             <circle r="6" className="fill-rose-500 animate-ping opacity-75" />
             <path d="M0 0 L-8 -14 C-8 -20 8 -20 8 -14 Z" className="fill-rose-600 stroke-rose-400 stroke-1" transform="translate(0, -5)" />
             <circle r="3" className="fill-white" transform="translate(0, -14)" />
             <circle r="4" className="fill-rose-500" />
           </g>
        )}

        {/* Start / You Are Here Marker */}
        {startLocationId && getCoords(startLocationId) && (
           <g transform={`translate(${getCoords(startLocationId).x}, ${getCoords(startLocationId).y})`} className="pointer-events-none">
             <circle r="20" className="fill-cyan-500/20 animate-ping" />
             <circle r="12" className="fill-cyan-500/30" />
             <path d="M 0 0 L -8 -15 Q 0 -22 8 -15 Z" className="fill-cyan-500/80" />
             <circle r="6" className="fill-cyan-400 stroke-white stroke-2" filter="url(#glow-start)" />
             <text y="-25" textAnchor="middle" className="fill-cyan-400 text-[10px] font-bold tracking-wider drop-shadow-md">YOU</text>
           </g>
        )}

      </svg>
    </div>
  );
};