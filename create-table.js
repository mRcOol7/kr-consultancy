const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: 'aeVvpxHZmb6aB8u.root',
  password: 'XLDjcM2IUgnv187c',
  database: 'test',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
};

async function createTable() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    const query = `
      CREATE TABLE IF NOT EXISTS job_seekers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        location VARCHAR(100) NOT NULL,
        qualification VARCHAR(100) NOT NULL,
        experience VARCHAR(50) NOT NULL,
        key_skills TEXT NOT NULL,
        designation VARCHAR(100) NOT NULL,
        current_ctc VARCHAR(50) NOT NULL,
        expected_ctc VARCHAR(50) NOT NULL,
        resume_url TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY email_idx (email)
      )
    `;

    await connection.execute(query);
    console.log('Table created successfully');
    await connection.end();
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

createTable();
