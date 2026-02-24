import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sql from '../config/db.js';

const authService = {
  async register(email, password, name, phone) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [user] = await sql`
      INSERT INTO users (email, password, name, phone)
      VALUES (${email}, ${hashedPassword}, ${name}, ${phone})
      RETURNING id, email, name, phone, created_at
    `;
    return user;
  },

  async login(email, password) {
    const [user] = await sql`SELECT * FROM users WHERE email = ${email}`;
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone
      }
    };
  },

  async getUserById(userId) {
    const [user] = await sql`
      SELECT id, email, name, phone, created_at 
      FROM users 
      WHERE id = ${userId}
    `;
    return user;
  },

  async updateProfile(userId, name, phone) {
    const [user] = await sql`
      UPDATE users 
      SET name = ${name}, phone = ${phone}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${userId}
      RETURNING id, email, name, phone
    `;
    return user;
  },

  async changePassword(userId, oldPassword, newPassword) {
    const [user] = await sql`SELECT password FROM users WHERE id = ${userId}`;

    if (!user) {
      throw new Error('User not found');
    }

    const isValid = await bcrypt.compare(oldPassword, user.password);
    if (!isValid) {
      throw new Error('Invalid old password');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await sql`
      UPDATE users 
      SET password = ${hashedPassword}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${userId}
    `;
    
    return { message: 'Password updated successfully' };
  }
};

export default authService;
