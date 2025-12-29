import { Location, RouteConfig } from './types';

export const LOCATIONS: Location[] = [
  // GROUND FLOOR (0)
  { id: 'gate_1', name: 'Gate 1', type: 'exit', floor: 0 },
  { id: 'gate_2', name: 'Gate 2', type: 'exit', floor: 0 },
  { id: 'gate_3', name: 'Gate 3', type: 'exit', floor: 0 },
  { id: 'auditorium', name: 'Auditorium (Ground)', type: 'room', floor: 0 },
  { id: 'canteen', name: 'Canteen', type: 'facility', floor: 0 },
  { id: 'management', name: 'Management Rooms', type: 'room', floor: 0 },
  { id: 'staircase_1', name: 'Staircase 1 (Ground)', type: 'facility', floor: 0 },
  { id: 'staircase_2', name: 'Staircase 2 (Ground)', type: 'facility', floor: 0 },
  { id: 'lift', name: 'Lift (Ground)', type: 'facility', floor: 0 },

  // 1ST FLOOR (1)
  { id: 'lab_1_f1', name: 'Lab 1', type: 'room', floor: 1 },
  { id: 'class_1a_f1', name: 'Class 1A', type: 'room', floor: 1 },
  { id: 'class_1b_f1', name: 'Class 1B', type: 'room', floor: 1 },
  { id: 'class_1c_f1', name: 'Class 1C', type: 'room', floor: 1 },
  { id: 'class_1d_f1', name: 'Class 1D', type: 'room', floor: 1 },
  { id: 'lab_2_f1', name: 'Lab 2', type: 'room', floor: 1 },
  { id: 'toilet_f1', name: 'Toilet', type: 'facility', floor: 1 },
  { id: 'staircase_1_f1', name: 'Staircase 1 (1st Floor)', type: 'facility', floor: 1 },
  { id: 'lift_f1', name: 'Lift (1st Floor)', type: 'facility', floor: 1 },
];

/* 
  FULL ROUTING DATABASE
*/

export const ROUTES_GROUND: RouteConfig = {
  // === FROM GATE 1 ===
  'gate_1-gate_2': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-g2-junc'], steps: [{ text: 'Walk along the bottom wall to the right.', icon: 'straight' }] },
  'gate_1-gate_3': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-g3-junc'], steps: [{ text: 'Walk along bottom wall to the far right.', icon: 'straight' }] },
  'gate_1-auditorium': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-vert-lower-2', 'p-aud-entry'], steps: [{ text: 'Right along bottom corridor.', icon: 'right' }, { text: 'Turn Left up main hall.', icon: 'left' }, { text: 'Auditorium is on the Left.', icon: 'arrive' }] },
  'gate_1-staircase_1': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-stair1-entry'], steps: [{ text: 'Right along bottom corridor.', icon: 'right' }, { text: 'Turn Left up main hall -> Stairs on Right.', icon: 'arrive' }] },
  'gate_1-canteen': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-canteen-entry'], steps: [{ text: 'Go to the end of main corridor (Top).', icon: 'straight' }, { text: 'Canteen is on the Right.', icon: 'arrive' }] },
  'gate_1-management': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-top-left-down'], steps: [{ text: 'Go to top of main corridor.', icon: 'straight' }, { text: 'Turn Left -> Go to end -> Left.', icon: 'arrive' }] },
  'gate_1-staircase_2': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-stair2-entry'], steps: [{ text: 'Go to top of main corridor.', icon: 'straight' }, { text: 'Turn Left -> Staircase 2 at the end.', icon: 'arrive' }] },
  'gate_1-lift': { pathIds: ['p-g1-junc', 'p-horiz-bottom', 'p-vert-lower-1', 'p-stair1-entry'], steps: [{ text: 'Right -> Left -> Lift is on the Right (near Stairs).', icon: 'arrive' }] },

  // === FROM GATE 2 ===
  'gate_2-gate_1': { pathIds: ['p-g2-junc', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Turn Left along bottom wall.', icon: 'left' }] },
  'gate_2-gate_3': { pathIds: ['p-g2-junc', 'p-horiz-mid', 'p-vert-lower-1', 'p-g3-junc'], steps: [{ text: 'Turn Right along bottom wall.', icon: 'right' }] },
  'gate_2-auditorium': { pathIds: ['p-g2-junc', 'p-horiz-mid', 'p-vert-lower-1', 'p-vert-lower-2', 'p-aud-entry'], steps: [{ text: 'Right -> Left up main hall.', icon: 'straight' }, { text: 'Auditorium on Left.', icon: 'arrive' }] },
  'gate_2-staircase_1': { pathIds: ['p-g2-junc', 'p-horiz-mid', 'p-vert-lower-1', 'p-stair1-entry'], steps: [{ text: 'Right -> Left up main hall.', icon: 'straight' }, { text: 'Stairs on Right.', icon: 'arrive' }] },
  'gate_2-canteen': { pathIds: ['p-g2-junc', 'p-horiz-mid', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-canteen-entry'], steps: [{ text: 'Right -> Left -> Straight to top.', icon: 'straight' }, { text: 'Canteen on Right.', icon: 'arrive' }] },
  'gate_2-management': { pathIds: ['p-g2-junc', 'p-horiz-mid', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-top-left-down'], steps: [{ text: 'Right -> Left -> Top -> Left.', icon: 'left' }, { text: 'Management at end.', icon: 'arrive' }] },
  'gate_2-staircase_2': { pathIds: ['p-g2-junc', 'p-horiz-mid', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-stair2-entry'], steps: [{ text: 'Right -> Left -> Top -> Left.', icon: 'left' }, { text: 'Stair 2 at end.', icon: 'arrive' }] },

  // === FROM GATE 3 ===
  'gate_3-gate_1': { pathIds: ['p-g3-junc', 'p-vert-lower-1', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Turn Left along bottom wall to far end.', icon: 'left' }] },
  'gate_3-gate_2': { pathIds: ['p-g3-junc', 'p-vert-lower-1', 'p-horiz-mid', 'p-g2-junc'], steps: [{ text: 'Turn Left along bottom wall.', icon: 'left' }] },
  'gate_3-auditorium': { pathIds: ['p-g3-junc', 'p-vert-lower-1', 'p-vert-lower-2', 'p-aud-entry'], steps: [{ text: 'Straight up main hall.', icon: 'straight' }, { text: 'Auditorium on Left.', icon: 'arrive' }] },
  'gate_3-staircase_1': { pathIds: ['p-g3-junc', 'p-vert-lower-1', 'p-stair1-entry'], steps: [{ text: 'Straight up main hall.', icon: 'straight' }, { text: 'Stairs on Right.', icon: 'arrive' }] },
  'gate_3-canteen': { pathIds: ['p-g3-junc', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-canteen-entry'], steps: [{ text: 'Straight up main hall to top.', icon: 'straight' }, { text: 'Canteen on Right.', icon: 'arrive' }] },
  'gate_3-management': { pathIds: ['p-g3-junc', 'p-vert-lower-1', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-top-left-down'], steps: [{ text: 'Straight to top -> Left.', icon: 'left' }, { text: 'Management at end.', icon: 'arrive' }] },

  // === FROM AUDITORIUM ===
  'auditorium-gate_1': { pathIds: ['p-aud-entry', 'p-vert-lower-2', 'p-vert-lower-1', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Exit -> Right -> Down.', icon: 'right' }, { text: 'Right -> Gate 1.', icon: 'arrive' }] },
  'auditorium-gate_2': { pathIds: ['p-aud-entry', 'p-vert-lower-2', 'p-vert-lower-1', 'p-horiz-mid', 'p-g2-junc'], steps: [{ text: 'Exit -> Right -> Down.', icon: 'right' }, { text: 'Right -> Gate 2.', icon: 'arrive' }] },
  'auditorium-gate_3': { pathIds: ['p-aud-entry', 'p-vert-lower-2', 'p-vert-lower-1', 'p-g3-junc'], steps: [{ text: 'Exit -> Right -> Down.', icon: 'right' }, { text: 'Gate 3 at bottom.', icon: 'arrive' }] },
  'auditorium-staircase_1': { pathIds: ['p-aud-entry', 'p-vert-lower-2', 'p-stair1-entry'], steps: [{ text: 'Exit Auditorium -> Right -> Stairs on Left.', icon: 'arrive' }] },
  'auditorium-canteen': { pathIds: ['p-aud-entry', 'p-vert-main-upper', 'p-canteen-entry'], steps: [{ text: 'Exit -> Left -> Up -> Right.', icon: 'arrive' }] },
  'auditorium-management': { pathIds: ['p-aud-entry', 'p-vert-main-upper', 'p-top-horiz', 'p-top-left-down'], steps: [{ text: 'Exit -> Left -> Up -> Left.', icon: 'left' }, { text: 'Management at end.', icon: 'arrive' }] },
  'auditorium-staircase_2': { pathIds: ['p-aud-entry', 'p-vert-main-upper', 'p-top-horiz', 'p-stair2-entry'], steps: [{ text: 'Exit -> Left -> Up -> Left.', icon: 'left' }, { text: 'Stair 2 at end.', icon: 'arrive' }] },

  // === FROM CANTEEN ===
  'canteen-gate_1': { pathIds: ['p-canteen-entry', 'p-vert-main-upper', 'p-vert-lower-2', 'p-vert-lower-1', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Exit -> Left -> Down.', icon: 'left' }, { text: 'Right -> Gate 1.', icon: 'arrive' }] },
  'canteen-gate_3': { pathIds: ['p-canteen-entry', 'p-vert-main-upper', 'p-vert-lower-2', 'p-vert-lower-1', 'p-g3-junc'], steps: [{ text: 'Exit -> Left -> Straight Down to Gate 3.', icon: 'straight' }] },
  'canteen-auditorium': { pathIds: ['p-canteen-entry', 'p-vert-main-upper', 'p-aud-entry'], steps: [{ text: 'Exit -> Left -> Down -> Right.', icon: 'right' }] },
  'canteen-management': { pathIds: ['p-canteen-entry', 'p-top-horiz', 'p-top-left-down'], steps: [{ text: 'Exit -> Left -> Straight to end -> Left.', icon: 'straight' }] },
  'canteen-staircase_1': { pathIds: ['p-canteen-entry', 'p-vert-main-upper', 'p-vert-lower-2', 'p-stair1-entry'], steps: [{ text: 'Exit -> Left -> Down -> Stairs on Left.', icon: 'arrive' }] },
  'canteen-staircase_2': { pathIds: ['p-canteen-entry', 'p-top-horiz', 'p-stair2-entry'], steps: [{ text: 'Exit -> Left -> Straight to end -> Stair 2.', icon: 'arrive' }] },

  // === FROM MANAGEMENT ===
  'management-gate_1': { pathIds: ['p-top-left-down', 'p-top-horiz', 'p-vert-main-upper', 'p-vert-lower-2', 'p-vert-lower-1', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Exit -> Right -> Right -> Down.', icon: 'straight' }, { text: 'Right -> Gate 1.', icon: 'arrive' }] },
  'management-canteen': { pathIds: ['p-top-left-down', 'p-top-horiz', 'p-canteen-entry'], steps: [{ text: 'Exit -> Right -> Straight along top.', icon: 'straight' }, { text: 'Canteen on Right.', icon: 'arrive' }] },
  'management-auditorium': { pathIds: ['p-top-left-down', 'p-top-horiz', 'p-vert-main-upper', 'p-aud-entry'], steps: [{ text: 'Exit -> Right -> Right at main hall -> Down.', icon: 'straight' }, { text: 'Auditorium on Right.', icon: 'arrive' }] },
  'management-staircase_1': { pathIds: ['p-top-left-down', 'p-top-horiz', 'p-vert-main-upper', 'p-vert-lower-2', 'p-stair1-entry'], steps: [{ text: 'Exit -> Right -> Right -> Down -> Stairs on Left.', icon: 'arrive' }] },
  'management-staircase_2': { pathIds: ['p-top-left-down', 'p-stair2-entry'], steps: [{ text: 'Stair 2 is right next to Management.', icon: 'arrive' }] },

  // === FROM STAIRCASE 1 (HUB) ===
  'staircase_1-gate_1': { pathIds: ['p-stair1-entry', 'p-vert-lower-1', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Exit Stairs -> Down -> Left -> Gate 1.', icon: 'arrive' }] },
  'staircase_1-gate_2': { pathIds: ['p-stair1-entry', 'p-vert-lower-1', 'p-horiz-mid', 'p-g2-junc'], steps: [{ text: 'Exit Stairs -> Down -> Left -> Gate 2.', icon: 'arrive' }] },
  'staircase_1-gate_3': { pathIds: ['p-stair1-entry', 'p-vert-lower-1', 'p-g3-junc'], steps: [{ text: 'Exit Stairs -> Down -> Gate 3.', icon: 'arrive' }] },
  'staircase_1-auditorium': { pathIds: ['p-stair1-entry', 'p-vert-lower-2', 'p-aud-entry'], steps: [{ text: 'Exit Stairs -> Up -> Left to Auditorium.', icon: 'arrive' }] },
  'staircase_1-canteen': { pathIds: ['p-stair1-entry', 'p-vert-lower-2', 'p-vert-main-upper', 'p-canteen-entry'], steps: [{ text: 'Exit Stairs -> Up -> Right to Canteen.', icon: 'arrive' }] },
  'staircase_1-management': { pathIds: ['p-stair1-entry', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-top-left-down'], steps: [{ text: 'Exit Stairs -> Up -> Left -> End.', icon: 'arrive' }] },
  'staircase_1-staircase_2': { pathIds: ['p-stair1-entry', 'p-vert-lower-2', 'p-vert-main-upper', 'p-top-horiz', 'p-stair2-entry'], steps: [{ text: 'Exit Stairs -> Up -> Left -> Stair 2.', icon: 'arrive' }] },
  'staircase_1-lift': { pathIds: ['p-stair1-entry'], steps: [{ text: 'Lift is adjacent.', icon: 'arrive' }] },

  // === LIFT and STAIRCASE 2 ===
  'lift-staircase_1': { pathIds: ['p-stair1-entry'], steps: [{ text: 'Stairs are adjacent to Lift.', icon: 'arrive' }] },
  'staircase_2-management': { pathIds: ['p-stair2-entry', 'p-top-left-down'], steps: [{ text: 'Management is adjacent to Stair 2.', icon: 'arrive' }] },
  'staircase_2-canteen': { pathIds: ['p-stair2-entry', 'p-top-horiz', 'p-canteen-entry'], steps: [{ text: 'Exit -> Right -> Straight to Canteen.', icon: 'straight' }] },
  'staircase_2-staircase_1': { pathIds: ['p-stair2-entry', 'p-top-horiz', 'p-vert-main-upper', 'p-vert-lower-2', 'p-stair1-entry'], steps: [{ text: 'Exit -> Right -> Down -> Stairs 1 on Left.', icon: 'arrive' }] },
  'staircase_2-gate_1': { pathIds: ['p-stair2-entry', 'p-top-horiz', 'p-vert-main-upper', 'p-vert-lower-2', 'p-vert-lower-1', 'p-horiz-bottom', 'p-g1-junc'], steps: [{ text: 'Exit -> Right -> Down -> Right -> Gate 1.', icon: 'arrive' }] },
};

export const ROUTES_F1: RouteConfig = {
  // === FROM STAIRCASE 1 F1 (HUB) ===
  'staircase_1_f1-lab_1_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-right', 'p-f1-top', 'p-f1-lab1-conn'],
    steps: [{ text: 'Exit Stairs -> Go UP the Right corridor.', icon: 'straight' }, { text: 'Turn LEFT at the top.', icon: 'left' }, { text: 'Lab 1 is at the far end.', icon: 'arrive' }],
    distance: '150m', time: '3 mins'
  },
  'staircase_1_f1-class_1a_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-right', 'p-f1-top', 'p-f1-c1a-conn'],
    steps: [{ text: 'Exit Stairs -> Go UP Right corridor.', icon: 'straight' }, { text: 'Turn LEFT at top -> Class 1A.', icon: 'arrive' }]
  },
  'staircase_1_f1-class_1b_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-right', 'p-f1-top', 'p-f1-c1b-conn'],
    steps: [{ text: 'Exit Stairs -> Go UP Right corridor.', icon: 'straight' }, { text: 'Turn LEFT at top -> Class 1B.', icon: 'arrive' }]
  },
  'staircase_1_f1-class_1c_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-right', 'p-f1-top', 'p-f1-c1c-conn'],
    steps: [{ text: 'Exit Stairs -> Go UP Right corridor.', icon: 'straight' }, { text: 'Turn LEFT at top -> Class 1C.', icon: 'arrive' }]
  },
  'staircase_1_f1-class_1d_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-right', 'p-f1-c1d-conn'],
    steps: [{ text: 'Exit Stairs -> Go UP Right corridor.', icon: 'straight' }, { text: 'Class 1D is on the Right.', icon: 'arrive' }]
  },
  'staircase_1_f1-lab_2_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-right', 'p-f1-lab2-conn'],
    steps: [{ text: 'Exit Stairs -> Go UP Right corridor.', icon: 'straight' }, { text: 'Lab 2 is on the Right.', icon: 'arrive' }]
  },
  'staircase_1_f1-toilet_f1': {
    pathIds: ['p-f1-stair1-conn', 'p-f1-bottom', 'p-f1-toilet-conn'],
    steps: [{ text: 'Exit Stairs -> Turn LEFT.', icon: 'left' }, { text: 'Walk along bottom corridor -> Toilet at end.', icon: 'arrive' }]
  },
  'staircase_1_f1-lift_f1': { 
    pathIds: ['p-f1-stair1-conn'], 
    steps: [{ text: 'Lift is adjacent to stairs.', icon: 'arrive' }] 
  },

  // === TO STAIRCASE 1 F1 (HUB) ===
  'lab_1_f1-staircase_1_f1': {
    pathIds: ['p-f1-lab1-conn', 'p-f1-top', 'p-f1-right', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Lab 1 -> Go RIGHT along Top.', icon: 'right' }, { text: 'Turn RIGHT at corner -> Go DOWN -> Stairs.', icon: 'arrive' }]
  },
  'class_1a_f1-staircase_1_f1': {
    pathIds: ['p-f1-c1a-conn', 'p-f1-top', 'p-f1-right', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Class 1A -> Right -> Right again -> Stairs.', icon: 'arrive' }]
  },
  'class_1b_f1-staircase_1_f1': {
    pathIds: ['p-f1-c1b-conn', 'p-f1-top', 'p-f1-right', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Class 1B -> Right -> Right again -> Stairs.', icon: 'arrive' }]
  },
  'class_1c_f1-staircase_1_f1': {
    pathIds: ['p-f1-c1c-conn', 'p-f1-top', 'p-f1-right', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Class 1C -> Right -> Right again -> Stairs.', icon: 'arrive' }]
  },
  'class_1d_f1-staircase_1_f1': {
    pathIds: ['p-f1-c1d-conn', 'p-f1-right', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Class 1D -> Go DOWN -> Stairs on Left.', icon: 'arrive' }]
  },
  'lab_2_f1-staircase_1_f1': {
    pathIds: ['p-f1-lab2-conn', 'p-f1-right', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Lab 2 -> Go DOWN -> Stairs on Left.', icon: 'arrive' }]
  },
  'toilet_f1-staircase_1_f1': {
    pathIds: ['p-f1-toilet-conn', 'p-f1-bottom', 'p-f1-stair1-conn'],
    steps: [{ text: 'Exit Toilet -> Go RIGHT along Bottom -> Stairs.', icon: 'arrive' }]
  },
  'lift_f1-staircase_1_f1': { pathIds: ['p-f1-stair1-conn'], steps: [{ text: 'Adjacent.', icon: 'arrive' }] },

  // === INTRA-FLOOR (F1) POINT-TO-POINT ===
  'lab_1_f1-class_1a_f1': { pathIds: ['p-f1-lab1-conn', 'p-f1-top', 'p-f1-c1a-conn'], steps: [{ text: 'Exit Lab 1 -> Right.', icon: 'right' }] },
  'lab_1_f1-class_1b_f1': { pathIds: ['p-f1-lab1-conn', 'p-f1-top', 'p-f1-c1b-conn'], steps: [{ text: 'Exit Lab 1 -> Right.', icon: 'right' }] },
  'lab_1_f1-class_1c_f1': { pathIds: ['p-f1-lab1-conn', 'p-f1-top', 'p-f1-c1c-conn'], steps: [{ text: 'Exit Lab 1 -> Right.', icon: 'right' }] },
  'lab_1_f1-class_1d_f1': { pathIds: ['p-f1-lab1-conn', 'p-f1-top', 'p-f1-right', 'p-f1-c1d-conn'], steps: [{ text: 'Exit Lab 1 -> Right -> Right at corner.', icon: 'right' }] },
  'lab_1_f1-lab_2_f1': { pathIds: ['p-f1-lab1-conn', 'p-f1-top', 'p-f1-right', 'p-f1-lab2-conn'], steps: [{ text: 'Exit Lab 1 -> Right -> Right at corner -> Down.', icon: 'right' }] },
  'lab_1_f1-toilet_f1': { pathIds: ['p-f1-lab1-conn', 'p-f1-left', 'p-f1-toilet-conn'], steps: [{ text: 'Exit Lab 1 -> Left -> Down -> Toilet.', icon: 'left' }] },
  'toilet_f1-lab_1_f1': { pathIds: ['p-f1-toilet-conn', 'p-f1-left', 'p-f1-lab1-conn'], steps: [{ text: 'Exit Toilet -> Up -> Lab 1.', icon: 'straight' }] },
  'toilet_f1-lab_2_f1': { pathIds: ['p-f1-toilet-conn', 'p-f1-bottom', 'p-f1-stair1-conn', 'p-f1-right', 'p-f1-lab2-conn'], steps: [{ text: 'Exit Toilet -> Right along bottom -> Up right side.', icon: 'right' }] },
  'toilet_f1-class_1a_f1': { pathIds: ['p-f1-toilet-conn', 'p-f1-left', 'p-f1-top', 'p-f1-c1a-conn'], steps: [{ text: 'Exit Toilet -> Up -> Right -> Class 1A.', icon: 'right' }] },
  'lab_2_f1-class_1d_f1': { pathIds: ['p-f1-lab2-conn', 'p-f1-right', 'p-f1-c1d-conn'], steps: [{ text: 'Exit Lab 2 -> Up.', icon: 'straight' }] },
  'lab_2_f1-class_1c_f1': { pathIds: ['p-f1-lab2-conn', 'p-f1-right', 'p-f1-top', 'p-f1-c1c-conn'], steps: [{ text: 'Exit Lab 2 -> Up -> Left.', icon: 'left' }] },
  'lab_2_f1-toilet_f1': { pathIds: ['p-f1-lab2-conn', 'p-f1-right', 'p-f1-stair1-conn', 'p-f1-bottom', 'p-f1-toilet-conn'], steps: [{ text: 'Exit Lab 2 -> Down -> Left -> End.', icon: 'left' }] },
};