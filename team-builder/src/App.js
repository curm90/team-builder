import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

import { initialTeamMemberForm, initialTeamMembers } from './components/data';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form/Form';

function App() {
  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembers);
  const [teamMemberForm, setTeamMemberForm] = useState(initialTeamMemberForm);
  const [memberToEdit, setMemberToEdit] = useState(initialTeamMemberForm);

  const handleInputChange = e => {
    e.preventDefault();
    setTeamMemberForm({ ...teamMemberForm, [e.target.name]: e.target.value })
  }

  const handleMemberToEdit = (id) => {
    const currentMember = teamMembersList.find(member => member.id === id)
    setMemberToEdit(currentMember);
  }

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
        memberToEdit={memberToEdit}
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
      />
      <TeamMembers
        teamMembersData={teamMembersList}
        onMemberEdit={handleMemberToEdit}
      />
    </div>
  );
}

export default App;
