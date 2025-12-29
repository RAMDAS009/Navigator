export interface Location {
  id: string;
  name: string;
  type: 'room' | 'facility' | 'exit';
  floor: number; // 0 for Ground, 1 for 1st Floor
}

export interface RouteStep {
  text: string;
  icon?: 'straight' | 'left' | 'right' | 'arrive';
}

export interface RouteData {
  pathIds: string[]; // Array of SVG path IDs to highlight
  steps: RouteStep[];
  distance?: string;
  time?: string;
}

export interface RouteConfig {
  [key: string]: RouteData; // Key format: "startId-endId"
}