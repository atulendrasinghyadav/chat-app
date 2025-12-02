import react from 'react';
import {Routes} from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App;