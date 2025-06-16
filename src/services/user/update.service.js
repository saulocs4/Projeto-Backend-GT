const userRepository = require('../../repositories/user'); 

const updateUser = async (userId, userData) => {
  const { firstname, surname, email } = userData;

  // 1. Verificar se o usuário existe usando o repositório
  const existingUserById = await userRepository.getUserByIdRepository(userId); // AQUI

  if (!existingUserById) {
    throw new Error('Usuário não encontrado.');
  }

  // 2. Verificar se o e-mail já existe E pertence a outro usuário (usando o repositório)
  if (email) {
    const existingUserByEmail = await userRepository.findUserByEmailRepository(email); // AQUI

    if (existingUserByEmail && existingUserByEmail.id !== userId) {
      throw new Error('E-mail já cadastrado por outro usuário.');
    }
  }

  // 3. Preparar os dados para atualização (apenas os campos fornecidos)
  const dataToUpdate = {};
  if (firstname !== undefined) dataToUpdate.firstname = firstname;
  if (surname !== undefined) dataToUpdate.surname = surname;
  if (email !== undefined) dataToUpdate.email = email;

  // 4. Atualizar o usuário no banco de dados usando o repositório
  const updatedUser = await userRepository.updateUserRepository(userId, dataToUpdate); // AQUI

  return updatedUser;
};

module.exports = {
  updateUser,
};