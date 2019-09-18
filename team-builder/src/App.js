import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'John',
    role: 'Backend Engineer'
  },
  {
    id: uuid(),
    name: 'Dave',
    role: 'Front end developer'
  }
];

function App() {
  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembers);

  return (
    <div className='App'>
      <Form />
      <TeamMembers teamMembers={teamMembersList} />
    </div>
  );
}

export default App;
