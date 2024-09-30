import React, { useEffect } from 'react';
import { Cartesian3, Color, HorizontalOrigin, VerticalOrigin } from 'cesium';
import { getImageForCategory } from '../utlis/categoryImageMap';

interface EventMarkerProps {
  event: {
    id: string;
    title: string;
    description: string | null;
    geometry: {
      coordinates: number[][];
    }[];
    categories: { id: string; title: string }[]; 
  };
  viewer: any; // Use the appropriate type for viewer
 
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, viewer }) => {
  useEffect(() => {
    
    if (viewer && event.geometry.length > 0) {
      const firstGeometry = event.geometry[0];

      if (firstGeometry.coordinates && Array.isArray(firstGeometry.coordinates)) {
        const coordinates = firstGeometry.coordinates;

        // Assuming coordinates are structured as [longitude, latitude]
        if (Array.isArray(coordinates) && coordinates.length >= 2) {
          const longitude = coordinates[0];
          const latitude = coordinates[1];
          console.log(event.categories[0].id)
          const iconUrl = getImageForCategory(event.categories[0].id);
          console.log("Icon URL:", iconUrl); 

          // Ensure both longitude and latitude are valid numbers
          if (typeof longitude === 'number' && typeof latitude === 'number') {


            viewer.entities.add({
              name: event.title,
              position: Cartesian3.fromDegrees(longitude, latitude),
              billboard: {
                image: iconUrl, // URL or path to the icon image
                width: 20,     // Icon width in pixels
                height: 20,    // Icon height in pixels
                 // You can also set the color of the icon
              },
              description: event.description,
            });

           




            

            
          } else {
            console.warn('Invalid coordinates:', coordinates);
          }
        } else {
          console.warn('Coordinates should be an array with at least 2 elements:', coordinates);
        }
      }
    }
  }, [viewer, event.geometry, event.title, event.description]);

  return null; // This component doesn't render anything visually
};

export default EventMarker;


