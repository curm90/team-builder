import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form/Form';

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'John',
    email: 'example1@gmail.com',
    role: 'Backend Engineer'
  },
  {
    id: uuid(),
    name: 'Dave',
    email: 'example@gmail.com',
    role: 'Front end developer'
  }
];

const initialTeamMemberForm = {
  name: '',
  email: '',
  role: ''
};

function App() {
  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembers);
  const [teamMemberForm, setTeamMemberForm] = useState(initialTeamMemberForm);

  const handleNameChange = e => {
    setTeamMemberForm({
      name: e.target.value,
      email: teamMemberForm.email,
      role: teamMemberForm.role
    });
  };

  const handleEmailChange = e => {
    setTeamMemberForm({
      name: teamMemberForm.name,
      email: e.target.value,
      role: teamMemberForm.role
    });
  };

  const handleRoleChange = e => {
    setTeamMemberForm({
      name: teamMemberForm.name,
      email: teamMemberForm.email,
      role: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const newTeamMember = {
      id: uuid(),
      name: teamMemberForm.name,
      email: teamMemberForm.email,
      role: teamMemberForm.role
    };
    const newTeamMemberList = teamMembersList.concat(newTeamMember);
    setTeamMembersList(newTeamMemberList);
    setTeamMemberForm(initialTeamMemberForm);
  };

  return (
    <div className='App'>
      <h2>Sign up to become a member of our team!</h2>
      <Form
        teamMembersData={teamMemberForm}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onRoleChange={handleRoleChange}
        onFormSubmit={handleFormSubmit}
      />
      <TeamMembers teamMembersData={teamMembersList} />
    </div>
  );
}

export default App;
