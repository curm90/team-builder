import uuid from 'uuid';

export const initialTeamMembers = [
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

export const initialTeamMemberForm = {
  name: '',
  email: '',
  role: ''
};