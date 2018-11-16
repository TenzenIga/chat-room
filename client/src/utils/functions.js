const uuidv4 = require('uuid/v4')

//get time
 function getTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`
}
 function createUser(id, nickname) {
  return {
    id,
    nickname,
    roomID:uuidv4(),
  };
}


module.exports = {
  getTime,
	createUser
}
