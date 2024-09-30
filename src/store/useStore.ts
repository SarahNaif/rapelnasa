import {create} from 'zustand';
import { Viewer } from 'cesium';

// Define the state types
interface ViewerState {
  viewer: Viewer | null;
  setViewer: (viewer: Viewer) => void;
}

// Create the Zustand store
const useStore = create<ViewerState>((set) => ({
  viewer: null,
  setViewer: (viewer) => set({ viewer }),
}));

export default useStore;