import UserService from "../services/userService";

export class UserController {
  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createUser(req, res) {
    try {
      const user = {
        name: req.name,
        email: req.email,
        password: req.password,
        phone: req.phone,
      };
      const userCreated = await UserService.createUser(user);
      res.status(200).json(userCreated);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  async updateUser(req, res) {
    try {
      const userToUpdate = {
        _id: req.id,
        name: req.name,
        email: req.email,
        password: req.password,
        phone: req.phone,
      };
      const userUpdated = await UserService.updateUser(userToUpdate);
      res.status(200).json(userUpdated);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req, res) {
    try {
      const userDeleted = await UserService.deleteUser(req._id);
      res.status(200).json(userDeleted);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();
