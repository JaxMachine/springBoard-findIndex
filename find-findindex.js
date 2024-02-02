//Find User by Username
function findUserByUsername(usersArray, username) {
  return usersArray.find((user) => {
    return user.username === username;
  });
}

//Remove User by Username
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex((user) => {
    return user.username === username;
  });
  if (foundIndex === -1) return;
  return usersArray.splice(foundIndex, 1)[0];
}
