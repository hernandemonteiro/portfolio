import AuthService from "../services/authService";

export class AuthController {
  async login(req, res) {
    try {
      const logged = await AuthService.login(req.email, req.password);
      res.status(200).json(logged);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();
