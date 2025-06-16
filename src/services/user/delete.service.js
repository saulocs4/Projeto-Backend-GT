const userRepository = require('../../repositories/user'); 

const deleteUser = async (userId) => {
  try {
    
    const deletedUser = await userRepository.deleteUserRepository(userId); // AQUI
    return deletedUser;
  } catch (error) {
    
    if (error.code === 'P2025' || error.message === 'Record to delete does not exist.') { 
      throw new Error('Usuário não encontrado.');
    }
    throw error;
  }
};

module.exports = {
  deleteUser,
};