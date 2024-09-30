import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventMarker from './EventMarker';
import useStore from '../store/useStore';


const EONET_API_URL = import.meta.env.VITE_EONET_API_URL;

interface Event {
    id: string;
    title: string;
    description: string | null; // Description can be null
    geometry: {
      coordinates: number[][]; // Adjust this as per your actual data structure
    }[];
    categories: { id: string; title: string }[]; 
  }
const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const viewer = useStore((state) => state.viewer); // Access the viewer instance from Zustand

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://eonet.gsfc.nasa.gov/api/v2/events");
        console.log("API Response:", EONET_API_URL) ;
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching EONET data", error);
      }
    };

    fetchEvents();
  }, [events]);

  return (
    <>
      {events.map(event => (
        <EventMarker key={event.id} event={event} viewer={viewer} />
      ))}
    </>
  );
};

export default EventList;


