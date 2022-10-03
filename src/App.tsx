
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;