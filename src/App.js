import { Container } from '@mui/material';
import './App.css';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className="App">
      <Container sx={{
        background: '#e0e0e0',
        width: '95vw',
        height: '100vw',
        borderRadius: '16px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }} >
        <Searcher />
      </Container>
    </div>
  );
}

export default App;
