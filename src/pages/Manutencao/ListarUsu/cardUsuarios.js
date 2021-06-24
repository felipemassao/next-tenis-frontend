import React from 'react';

const UserCard = ({ Usuario }) => {
  return (
    <div>
      <h4>Username: {Usuario.username}</h4>
      <h5>E-Mail..: {Usuario.email}</h5>
      <span>&nbsp;</span>
    </div>
  );
};

export default UserCard;