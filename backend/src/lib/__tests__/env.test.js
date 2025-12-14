import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('env.js', () => {
  let originalEnv;

  beforeEach(() => {
    // Save original environment
    originalEnv = { ...process.env };
    // Clear the module cache
    vi.resetModules();
  });

  afterEach(() => {
    // Restore original environment
    process.env = originalEnv;
  });

  describe('ENV object initialization', () => {
    it('should load PORT from environment variables', async () => {
      process.env.PORT = '3000';
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('3000');
    });

    it('should load DATABASE_URL from environment variables', async () => {
      process.env.DATABASE_URL = 'mongodb://localhost:27017/testdb';
      const { ENV } = await import('../env.js');
      
      expect(ENV.DATABASE_URL).toBe('mongodb://localhost:27017/testdb');
    });

    it('should load NODE_ENV from environment variables', async () => {
      process.env.NODE_ENV = 'production';
      const { ENV } = await import('../env.js');
      
      expect(ENV.NODE_ENV).toBe('production');
    });

    it('should handle all environment variables together', async () => {
      process.env.PORT = '5000';
      process.env.DATABASE_URL = 'mongodb://prod-server:27017/prod';
      process.env.NODE_ENV = 'production';
      
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('5000');
      expect(ENV.DATABASE_URL).toBe('mongodb://prod-server:27017/prod');
      expect(ENV.NODE_ENV).toBe('production');
    });
  });

  describe('missing environment variables', () => {
    it('should handle missing PORT', async () => {
      delete process.env.PORT;
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBeUndefined();
    });

    it('should handle missing DATABASE_URL', async () => {
      delete process.env.DATABASE_URL;
      const { ENV } = await import('../env.js');
      
      expect(ENV.DATABASE_URL).toBeUndefined();
    });

    it('should handle missing NODE_ENV', async () => {
      delete process.env.NODE_ENV;
      const { ENV } = await import('../env.js');
      
      expect(ENV.NODE_ENV).toBeUndefined();
    });

    it('should handle all variables missing', async () => {
      delete process.env.PORT;
      delete process.env.DATABASE_URL;
      delete process.env.NODE_ENV;
      
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBeUndefined();
      expect(ENV.DATABASE_URL).toBeUndefined();
      expect(ENV.NODE_ENV).toBeUndefined();
    });
  });

  describe('environment variable edge cases', () => {
    it('should handle empty string PORT', async () => {
      process.env.PORT = '';
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('');
    });

    it('should handle whitespace-only PORT', async () => {
      process.env.PORT = '   ';
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('   ');
    });

    it('should handle non-numeric PORT', async () => {
      process.env.PORT = 'not-a-number';
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('not-a-number');
    });

    it('should handle PORT with leading zeros', async () => {
      process.env.PORT = '0003000';
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('0003000');
    });

    it('should handle very large PORT number', async () => {
      process.env.PORT = '999999';
      const { ENV } = await import('../env.js');
      
      expect(ENV.PORT).toBe('999999');
    });

    it('should handle DATABASE_URL with special characters', async () => {
      process.env.DATABASE_URL = 'mongodb://user:p@ssw0rd!@localhost:27017/db';
      const { ENV } = await import('../env.js');
      
      expect(ENV.DATABASE_URL).toBe('mongodb://user:p@ssw0rd!@localhost:27017/db');
    });

    it('should handle DATABASE_URL with query parameters', async () => {
      process.env.DATABASE_URL = 'mongodb://localhost:27017/db?retryWrites=true&w=majority';
      const { ENV } = await import('../env.js');
      
      expect(ENV.DATABASE_URL).toBe('mongodb://localhost:27017/db?retryWrites=true&w=majority');
    });

    it('should handle DATABASE_URL with replica set', async () => {
      process.env.DATABASE_URL = 'mongodb://host1:27017,host2:27017,host3:27017/db?replicaSet=rs0';
      const { ENV } = await import('../env.js');
      
      expect(ENV.DATABASE_URL).toBe('mongodb://host1:27017,host2:27017,host3:27017/db?replicaSet=rs0');
    });
  });

  describe('NODE_ENV variations', () => {
    it('should handle development environment', async () => {
      process.env.NODE_ENV = 'development';
      const { ENV } = await import('../env.js');
      
      expect(ENV.NODE_ENV).toBe('development');
    });

    it('should handle test environment', async () => {
      process.env.NODE_ENV = 'test';
      const { ENV } = await import('../env.js');
      
      expect(ENV.NODE_ENV).toBe('test');
    });

    it('should handle staging environment', async () => {
      process.env.NODE_ENV = 'staging';
      const { ENV } = await import('../env.js');
      
      expect(ENV.NODE_ENV).toBe('staging');
    });

    it('should handle case sensitivity in NODE_ENV', async () => {
      process.env.NODE_ENV = 'PRODUCTION';
      const { ENV } = await import('../env.js');
      
      expect(ENV.NODE_ENV).toBe('PRODUCTION');
    });
  });

  describe('ENV object structure', () => {
    it('should have exactly three properties', async () => {
      process.env.PORT = '3000';
      process.env.DATABASE_URL = 'mongodb://localhost:27017/test';
      process.env.NODE_ENV = 'test';
      
      const { ENV } = await import('../env.js');
      
      expect(Object.keys(ENV)).toHaveLength(3);
    });

    it('should have correct property names', async () => {
      const { ENV } = await import('../env.js');
      
      expect(ENV).toHaveProperty('PORT');
      expect(ENV).toHaveProperty('DATABASE_URL');
      expect(ENV).toHaveProperty('NODE_ENV');
    });

    it('should be an object', async () => {
      const { ENV } = await import('../env.js');
      
      expect(typeof ENV).toBe('object');
      expect(ENV).not.toBeNull();
    });

    it('should not be frozen or sealed', async () => {
      const { ENV } = await import('../env.js');
      
      expect(Object.isFrozen(ENV)).toBe(false);
      expect(Object.isSealed(ENV)).toBe(false);
    });
  });

  describe('module behavior', () => {
    it('should export ENV as named export', async () => {
      const module = await import('../env.js');
      
      expect(module).toHaveProperty('ENV');
    });

    it('should not have default export', async () => {
      const module = await import('../env.js');
      
      expect(module.default).toBeUndefined();
    });
  });
});