import React from 'react';
import styled from 'styled-components';

const StyledHeaders = styled.div`
  width: 40%;
  margin: 1.6rem 0;

  h1 {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1.4rem;
      padding: 1rem 0;
      margin: 0;
    }
    button {
      padding: .5rem 1rem;
      font-size: 1rem;
      justify-content: center;
      background: none;
      border-radius: 6px;
      border: 1px solid #e8e8e8;
      cursor: pointer;
      outline: none;

      &:hover {
        box-shadow: 1px 1px 1px #e8e8e8;
      }
    }
  }
`;

const TeamMembers = ({ teamMembersData, onMemberEdit }) => {
  return (
    <StyledHeaders>
      <h1>Our Current Team</h1>

      {teamMembersData.map(teamMember => (
        <div key={teamMember.id}>
          <h4>{teamMember.name} is a {teamMember.role}</h4>
          <button
            onClick={() => onMemberEdit(teamMember.id)}
          >
            Edit
          </button>
        </div>
      ))}

    </StyledHeaders>
  );
};

export default TeamMembers;
