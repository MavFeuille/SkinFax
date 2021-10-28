//helper functions file to handle users
//*note* add state and axios. return state, setState possibly


const users =[];

const addUser = ({id, name, room})=>{
 name = name.trim().toLowerCase();
 room = room.trim().toLowerCase();

 //user tries to sign up to same room w/ same username
 const existingUser = users.find((user)=> user.room === room && user.name === name);
//checks if user exists already
 if (existingUser) return {error: 'username taken'};
/*makes a new user
pushes new user into empty arr and returns*/
 const user = {id, name, room};
 users.push(user);
 console.log('users add___', users)
 return {user}
}

//finds user by there id to remove them
const removeUser = (id)=>{

  const index = users.findIndex((user)=> user.id === id);
  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getUser = (id)=> {
  console.log('users and id test___', users, id)
  return users.find((user)=> user.id === id)
  
}

const getUsersInRoom = (room)=>{
 return users.filter((user)=> user.room === room)
}


module.exports = { addUser, removeUser, getUser, getUsersInRoom}