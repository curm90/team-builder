import React, { useEffect } from 'react';

import { StyledForm } from './FormStyles';

const Form = props => {
  const { name, email, role, setTeamMemberForm } = props.teamMembersData;
  const { memberToEdit } = props;
  const { onInputChange, onFormSubmit } = props;

  useEffect(() => {
    if (memberToEdit) {
      setTeamMemberForm(memberToEdit);
    }
  })

  const isDisabled = () => {
    return !name || !email || !role;
  };

  return (
    <StyledForm>
      <label htmlFor='nameInput'>Name</label>
      <input
        type='text'
        id='nameInput'
        value={name}
        onChange={onInputChange}
        name="name"
      />

      <label htmlFor='emailInput'>Email</label>
      <input
        type='text'
        id='emailInput'
        value={email}
        onChange={onInputChange}
        name="email"
      />

      <label htmlFor='roleInput'>Role</label>
      <input
        type='text'
        id='roleInput'
        value={role}
        onChange={onInputChange}
        name="role"
      />

      <button
        onClick={onFormSubmit}
        disabled={isDisabled()}
      >
        Submit
      </button>
    </StyledForm>
  );
};

export default Form;
