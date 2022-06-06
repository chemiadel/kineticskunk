// Packages
import React from 'react';
import {
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';

// Components
import Root from './src/components/root';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router onUpdate={() => console.log('hi')}>
      <ScrollToTop />

      <Root />
    </Router>
  );
}

export default App;
