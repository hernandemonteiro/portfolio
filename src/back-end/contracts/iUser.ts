export interface iUser {
  getAll();
  createUser(user: object);
  updateUser(userToUpdate: object);
  deleteUser(_id);
}
