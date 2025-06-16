const userRepository = require('../../repositories/user'); 

const getUserById = async (userId) => {
  const user = await userRepository.getUserByIdRepository(userId); 
  return user;
};

module.exports = {
  getUserById,
};