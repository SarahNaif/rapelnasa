import React, { ReactNode } from 'react'
import { Cartesian3 } from 'cesium';
import useStore from '../../store/useStore';

interface ButtonZoomOutProps {
    children: ReactNode; // Specify that children is of type ReactNode
}
const ButtonZoomOut : React.FC<ButtonZoomOutProps>= ({children}) => {
    const viewer = useStore((state) => state.viewer);

    const handleWideView = () => {
        if (viewer) {
          viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(39.6116, 24.4709, 10000000), // Wide view
            duration: 2,
          });
        }
      };
  return (


        <button
        onClick={handleWideView}
        style={{
          position: 'absolute',
          top: '10px',
          right: '200px',
          zIndex: 1,
        }}
      >
        {children}
      </button>
  )
}

export default ButtonZoomOut