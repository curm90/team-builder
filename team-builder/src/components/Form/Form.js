import React from 'react';

import { StyledForm } from './FormStyles';

const Form = props => {
  const { name, email, role } = props.teamMembersData;
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;

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
        onChange={onNameChange}
      />

      <label htmlFor='emailInput'>Email</label>
      <input
        type='text'
        id='emailInput'
        value={email}
        onChange={onEmailChange}
      />

      <label htmlFor='roleInput'>Role</label>
      <input
        type='text'
        id='roleInput'
        value={role}
        onChange={onRoleChange}
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
