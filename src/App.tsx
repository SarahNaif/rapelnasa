import React, { useEffect, useRef } from 'react'
import { Ion, Viewer, Cartesian3 } from 'cesium'

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_KEY

function App() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cesiumContainerRef.current) {
      const viewer = new Viewer(cesiumContainerRef.current, {
        fullscreenButton: false, 
        timeline: false,
        animation: false, 

        


      })
    
    //   viewer.camera.flyTo({
    //     destination : Cartesian3.fromDegrees(39.6116, 24.4709,10000000),
    //     duration: 2

    // });

    const homeButton = viewer.homeButton;
    homeButton.viewModel.command.afterExecute.addEventListener(() => {
      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(39.6116, 24.4709,  10000), // Adjust the height here
        duration: 2 // Adjust the duration as needed
      });
    });



      return () => viewer.destroy()
    }
  }, [])

  //  const handleWideView = () => {
  //   viewer.camera.flyTo({
  //     destination: Cartesian3.fromDegrees(39.6116, 24.4709, 10000000), // Wider view
  //     duration: 2
  //   });
  // };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
<div className="cesium" ref={cesiumContainerRef} />
    <button 
        // onClick={handleWideView} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          left: '10px', 
          zIndex: 1 
        }}
      >
        Zoom Out Wide
      </button>
      </div>
    
  )
}

export default App
