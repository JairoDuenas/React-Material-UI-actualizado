import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import './App.css';
import Searcher from './components/Searcher';
import UserCard from './containers/UserCard';
import { getGithubUser } from './services/users';

function App() {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('userState');
  const [notfound, setNotFound] = useState(false);

  const gettingUser = async(user) => {
    const userResponse = await getGithubUser(user)

    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse);
    }
    
    if (userResponse.message === 'Not Fount') {
      const { octocat } = localStorage;

      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }

  useEffect(() => {
      gettingUser(inputUser);
    }, [inputUser]);

  return (
    <div className="App">
      <Container sx={{
        background: '#e0e0e0',
        width: '95%',
        height: '95%',
        borderRadius: '16px',
        marginY: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }} >
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState={userState} />
      </Container>
    </div>
  );
}

export default App;
