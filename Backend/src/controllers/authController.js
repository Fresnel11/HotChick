import authService from '../services/authService.js';

const authController = {
  // Register
  async register(req, res) {
    try {
      const { email, password, name, phone } = req.body;

      if (!email || !password || !name) {
        return res.status(400).json({ error: 'Email, password and name are required' });
      }

      const user = await authService.register(email, password, name, phone);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      if (error.code === '23505') {
        return res.status(409).json({ error: 'Email already exists' });
      }
      res.status(500).json({ error: error.message });
    }
  },

  // Login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      const result = await authService.login(email, password);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  // Get profile
  async getProfile(req, res) {
    try {
      const user = await authService.getUserById(req.user.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update profile
  async updateProfile(req, res) {
    try {
      const { name, phone } = req.body;
      const user = await authService.updateProfile(req.user.id, name, phone);
      res.json({ message: 'Profile updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Change password
  async changePassword(req, res) {
    try {
      const { oldPassword, newPassword } = req.body;

      if (!oldPassword || !newPassword) {
        return res.status(400).json({ error: 'Old and new passwords are required' });
      }

      const result = await authService.changePassword(req.user.id, oldPassword, newPassword);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default authController;
