import React from 'react';
import MainPage from './Components/mainPage';
import NavBar from './Components/navBar';

function App() {
  const [params, setParams] = React.useState({
    range: 0,
    nationalities: 'fr',
    seed: 0,
  });

  const handleChange = (target) => {
    setParams((pervState) => ({ ...pervState, [target.name]: target.value }));
  };
  return (
    <>
      <NavBar onChange={handleChange} outputParams={params} />
      <MainPage outputParams={params} onChange={handleChange} />
    </>
  );
}

export default App;
