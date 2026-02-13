import React, { createContext } from 'react'
export const UserDataContext = createContext()
const UserContext = (props) => {
   const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    age: 24,
    role: "Frontend Developer",
    city: "Delhi"
  },
  {
    id: 2,
    name: "Meera Iyer",
    email: "meera.iyer@example.com",
    age: 27,
    role: "UI/UX Designer",
    city: "Bengaluru"
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan.verma@example.com",
    age: 22,
    role: "Backend Developer",
    city: "Pune"
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    age: 29,
    role: "Project Manager",
    city: "Ahmedabad"
  },
  {
    id: 5,
    name: "Kabir Khan",
    email: "kabir.khan@example.com",
    age: 26,
    role: "Full Stack Developer",
    city: "Mumbai"
  }
];


  return (
    <div>
      <UserDataContext.Provider value={users}>
        {props.children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
