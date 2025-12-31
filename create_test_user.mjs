import { createConnection } from 'mysql2/promise';
import crypto from 'crypto';

async function createTestUser() {
  const connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'webdev_db',
  });

  try {
    const password = 'TestPassword123!';
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
    
    const [result] = await connection.execute(
      'INSERT INTO users (email, name, password_hash, stripe_customer_id) VALUES (?, ?, ?, ?)',
      ['test@etsylaunchlab.com', 'Test Student', passwordHash, 'cus_test_12345']
    );
    
    console.log('✅ Test user created successfully!');
    console.log('Email: test@etsylaunchlab.com');
    console.log('Password: TestPassword123!');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await connection.end();
  }
}

createTestUser();
