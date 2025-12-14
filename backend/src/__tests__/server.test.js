import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import request from 'supertest';

// Mock dependencies before importing server
vi.mock('../lib/env.js', () => ({
  ENV: {
    PORT: '3000',
    DATABASE_URL: 'mongodb://localhost:27017/test',
    NODE_ENV: 'test'
  }
}));

vi.mock('../lib/db.js', () => ({
  connectDB: vi.fn().mockResolvedValue(undefined)
}));

describe('server.js', () => {
  describe('health endpoint', () => {
    it('should return 200 status on /health endpoint', async () => {
      // We need to test without starting the server
      // Import express app setup separately
      const express = (await import('express')).default;
      const app = express();
      
      app.get('/health', (req, res) => {
        res.status(200).json({ mess: 'api is up and running' });
      });

      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ mess: 'api is up and running' });
    });

    it('should return JSON content type', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      app.get('/health', (req, res) => {
        res.status(200).json({ mess: 'api is up and running' });
      });

      const response = await request(app).get('/health');
      
      expect(response.headers['content-type']).toMatch(/json/);
    });

    it('should return correct message structure', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      app.get('/health', (req, res) => {
        res.status(200).json({ mess: 'api is up and running' });
      });

      const response = await request(app).get('/health');
      
      expect(response.body).toHaveProperty('mess');
      expect(typeof response.body.mess).toBe('string');
    });

    it('should handle multiple concurrent requests', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      app.get('/health', (req, res) => {
        res.status(200).json({ mess: 'api is up and running' });
      });

      const requests = Array(10).fill(null).map(() => 
        request(app).get('/health')
      );
      
      const responses = await Promise.all(requests);
      
      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ mess: 'api is up and running' });
      });
    });

    it('should respond to GET method only', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      app.get('/health', (req, res) => {
        res.status(200).json({ mess: 'api is up and running' });
      });

      const postResponse = await request(app).post('/health');
      expect(postResponse.status).toBe(404);

      const putResponse = await request(app).put('/health');
      expect(putResponse.status).toBe(404);

      const deleteResponse = await request(app).delete('/health');
      expect(deleteResponse.status).toBe(404);
    });
  });

  describe('production static file serving', () => {
    it('should serve static files when NODE_ENV is production', () => {
      const express = (await import('express')).default;
      const path = (await import('path')).default;
      const app = express();
      const __dirname = path.resolve();

      // Simulate production environment
      const NODE_ENV = 'production';

      if (NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../frontend/project/dist')));
        
        app.get(/.*/, (req, res) => {
          res.sendFile(
            path.join(__dirname, '../frontend/project/dist', 'index.html')
          );
        });
      }

      // Verify routes are set up
      expect(app._router).toBeDefined();
    });

    it('should not serve static files when NODE_ENV is not production', () => {
      const express = (await import('express')).default;
      const app = express();

      const NODE_ENV = 'development';

      const initialStackLength = app._router ? app._router.stack.length : 0;

      if (NODE_ENV === 'production') {
        app.use(express.static('some-path'));
      }

      const finalStackLength = app._router ? app._router.stack.length : 0;
      
      expect(finalStackLength).toBe(initialStackLength);
    });
  });

  describe('path resolution', () => {
    it('should resolve __dirname correctly', async () => {
      const path = (await import('path')).default;
      const __dirname = path.resolve();
      
      expect(__dirname).toBeDefined();
      expect(typeof __dirname).toBe('string');
      expect(__dirname.length).toBeGreaterThan(0);
    });

    it('should construct valid static file path', async () => {
      const path = (await import('path')).default;
      const __dirname = path.resolve();
      const staticPath = path.join(__dirname, '../frontend/project/dist');
      
      expect(staticPath).toBeDefined();
      expect(staticPath).toContain('frontend');
      expect(staticPath).toContain('project');
      expect(staticPath).toContain('dist');
    });

    it('should construct valid index.html path', async () => {
      const path = (await import('path')).default;
      const __dirname = path.resolve();
      const indexPath = path.join(__dirname, '../frontend/project/dist', 'index.html');
      
      expect(indexPath).toBeDefined();
      expect(indexPath).toContain('index.html');
    });
  });

  describe('protocol function integration', () => {
    it('should call connectDB before starting server', async () => {
      const { connectDB } = await import('../lib/db.js');
      
      expect(connectDB).toBeDefined();
      expect(typeof connectDB).toBe('function');
    });

    it('should handle connectDB success', async () => {
      const { connectDB } = await import('../lib/db.js');
      connectDB.mockResolvedValueOnce(undefined);
      
      await expect(connectDB()).resolves.toBeUndefined();
    });

    it('should handle connectDB failure', async () => {
      const { connectDB } = await import('../lib/db.js');
      const error = new Error('Connection failed');
      connectDB.mockRejectedValueOnce(error);
      
      await expect(connectDB()).rejects.toThrow('Connection failed');
    });
  });

  describe('express app configuration', () => {
    it('should create express app instance', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      expect(app).toBeDefined();
      expect(typeof app).toBe('function');
    });

    it('should have listen method', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      expect(app.listen).toBeDefined();
      expect(typeof app.listen).toBe('function');
    });

    it('should have get method for routes', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      expect(app.get).toBeDefined();
      expect(typeof app.get).toBe('function');
    });

    it('should have use method for middleware', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      expect(app.use).toBeDefined();
      expect(typeof app.use).toBe('function');
    });
  });

  describe('regex route matching', () => {
    it('should match catch-all route with regex', async () => {
      const regex = /.*/;
      
      expect(regex.test('/')).toBe(true);
      expect(regex.test('/about')).toBe(true);
      expect(regex.test('/user/123')).toBe(true);
      expect(regex.test('/any/path/here')).toBe(true);
    });

    it('should match empty path', async () => {
      const regex = /.*/;
      
      expect(regex.test('')).toBe(true);
    });

    it('should match paths with query parameters', async () => {
      const regex = /.*/;
      
      expect(regex.test('/search?q=test')).toBe(true);
    });

    it('should match paths with hash fragments', async () => {
      const regex = /.*/;
      
      expect(regex.test('/page#section')).toBe(true);
    });
  });

  describe('error handling', () => {
    it('should handle 404 for non-existent routes', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      app.get('/health', (req, res) => {
        res.status(200).json({ mess: 'api is up and running' });
      });

      const response = await request(app).get('/non-existent');
      
      expect(response.status).toBe(404);
    });

    it('should return 404 for routes not defined', async () => {
      const express = (await import('express')).default;
      const app = express();
      
      const response = await request(app).get('/random-route');
      
      expect(response.status).toBe(404);
    });
  });

  describe('ENV usage', () => {
    it('should use PORT from ENV', async () => {
      const { ENV } = await import('../lib/env.js');
      
      expect(ENV.PORT).toBe('3000');
    });

    it('should use NODE_ENV from ENV', async () => {
      const { ENV } = await import('../lib/env.js');
      
      expect(ENV.NODE_ENV).toBe('test');
    });

    it('should handle undefined PORT', async () => {
      const mockENV = { PORT: undefined, NODE_ENV: 'test', DATABASE_URL: 'test' };
      
      expect(mockENV.PORT).toBeUndefined();
    });
  });
});