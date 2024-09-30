// ViewerContainer.tsx
import React, { useEffect, useRef, ReactNode } from 'react';
import { Ion, Viewer, Cartesian3 } from 'cesium';
import useStore from '../store/useStore'; // Import Zustand store

// Set the Cesium access token
Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_KEY;

interface ViewerContainerProps {
  children: ReactNode;
}

const ViewerContainer: React.FC<ViewerContainerProps> = ({ children }) => {
  const cesiumContainerRef = useRef<HTMLDivElement | null>(null);
  const setViewer = useStore((state) => state.setViewer); // Zustand function to set the viewer
  const viewer = useStore((state) => state.viewer); // Access the viewer instance from Zustand

  useEffect(() => {
    if (cesiumContainerRef.current) {
      const viewerInstance = new Viewer(cesiumContainerRef.current, {
        fullscreenButton: false,
        timeline: false,
        animation: false,
      });

      setViewer(viewerInstance); // Store the viewer instance in Zustand

      // View on load
      viewerInstance.camera.setView({
        destination: Cartesian3.fromDegrees(39.6116, 24.4709, 18000000), // Adjust the height
      });

      // Customize the home button functionality
      const homeButton = viewerInstance.homeButton;
      homeButton.viewModel.command.afterExecute.addEventListener(() => {
        viewerInstance.camera.flyTo({
          destination: Cartesian3.fromDegrees(39.6116, 24.4709, 10000), // Adjust the height
          duration: 2,
        });
      });

      return () => {
        viewerInstance.destroy();
      };
    }
  }, [setViewer]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div className="cesium" ref={cesiumContainerRef} style={{ width: '100%', height: '100%' }} />
      {children}
    </div>
  );
};

export default ViewerContainer;
