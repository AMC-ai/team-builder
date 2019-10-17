import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import TeamCard from './components/TeamCard';
import tData from "./tData";
import './App.css';

function App() {
  const [teamList, setTeamList] = useState(tData)
  const addNewTeamMember = teamMember => {
    setTeamList([...teamList, teamMember])
  }
  return (
    <div className="App">
      <h1>My Notes</h1>
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <TeamCard teamList={teamList} />
    </div>
  );
}

export default App;
