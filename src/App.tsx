// App.tsx
import React from 'react';
import ViewerContainer from './components/ViewerContainer';
import EventList from './components/EventList';
import ButtonZoomOut from './components/UI/ButtonZoomOut';

const App: React.FC = () => {
  return (
    <ViewerContainer>
      <ButtonZoomOut> Zoom OUT</ButtonZoomOut>
      <EventList />
    </ViewerContainer>
  );
};

export default App;

