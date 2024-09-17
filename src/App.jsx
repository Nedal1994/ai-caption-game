import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ImageCaption from './ImageCaption/imagecaption';

export default function App() {
  return (
    <Router>
      <div>
        <ImageCaption/>
      </div>
    </Router>
  );
}
