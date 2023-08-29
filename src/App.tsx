import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './layouts/Header';
import useAuth from './hooks/useAuth';
import AlertBox from './components/molecules/AlertBox';
import AnimatedRoutes from './pages/routes/animatedRoutes';
import AppBackground from './components/organisms/AppBackground';
import background from './assets/background.jpg';

const AppContainer = styled.div`
width: 100%;
position: relative;
overflow-x: hidden;
min-height: 100vh;
`;

function App() {

  useAuth();

  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <AlertBox />
        <AppBackground src={background} />
        <AnimatedRoutes />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
