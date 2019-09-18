import React from 'react';
import styled from 'styled-components';

const StyledHeaders = styled.div`
  width: 40%;
  margin: 1.6rem 0;

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

const TeamMembers = ({ teamMembersData }) => {
  return (
    <StyledHeaders>
      {teamMembersData.map(teamMember => (
        <div>
          <h4
            key={teamMember.id}
          >
            {teamMember.name} is a {teamMember.role}
          </h4>
          <button>Edit</button>
        </div>
      ))}
    </StyledHeaders>
  );
};

export default TeamMembers;
