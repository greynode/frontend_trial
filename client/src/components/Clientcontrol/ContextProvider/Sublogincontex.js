import React from 'react';
import Subuserlogin from '../../Subuserlogin';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <Subuserlogin />
    </UserContext.Provider>
  )
}