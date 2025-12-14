import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import mongoose from 'mongoose';
import { connectDB } from '../db.js';

// Mock mongoose
vi.mock('mongoose', () => ({
  default: {
    connect: vi.fn()
  }
}));

// Mock ENV
vi.mock('../env.js', () => ({
  ENV: {
    DATABASE_URL: 'mongodb://localhost:27017/test'
  }
}));

describe('connectDB', () => {
  let processExitSpy;
  let consoleLogSpy;

  beforeEach(() => {
    vi.clearAllMocks();
    processExitSpy = vi.spyOn(process, 'exit').mockImplementation(() => {});
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    processExitSpy.mockRestore();
    consoleLogSpy.mockRestore();
  });

  describe('successful connection', () => {
    it('should connect to database successfully with valid URL', async () => {
      const mockConnection = {
        connection: {
          host: 'localhost'
        }
      };
      mongoose.connect.mockResolvedValue(mockConnection);

      await connectDB();

      expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost:27017/test');
      expect(mongoose.connect).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Connected sucessfully vaibhav',
        'localhost'
      );
      expect(processExitSpy).not.toHaveBeenCalled();
    });

    it('should handle connection with different host names', async () => {
      const mockConnection = {
        connection: {
          host: 'mongodb.example.com'
        }
      };
      mongoose.connect.mockResolvedValue(mockConnection);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Connected sucessfully vaibhav',
        'mongodb.example.com'
      );
    });

    it('should handle connection with IPv6 addresses', async () => {
      const mockConnection = {
        connection: {
          host: '[::1]'
        }
      };
      mongoose.connect.mockResolvedValue(mockConnection);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Connected sucessfully vaibhav',
        '[::1]'
      );
    });
  });

  describe('connection failures', () => {
    it('should handle connection error and exit with code 1', async () => {
      const mockError = new Error('Connection failed');
      mongoose.connect.mockRejectedValue(mockError);

      await connectDB();

      expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost:27017/test');
      expect(consoleLogSpy).toHaveBeenCalledWith(mockError);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should handle authentication error', async () => {
      const authError = new Error('Authentication failed');
      authError.name = 'MongoServerError';
      authError.code = 18;
      mongoose.connect.mockRejectedValue(authError);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(authError);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should handle network timeout error', async () => {
      const timeoutError = new Error('Server selection timed out');
      timeoutError.name = 'MongooseServerSelectionError';
      mongoose.connect.mockRejectedValue(timeoutError);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(timeoutError);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should handle invalid connection string error', async () => {
      const invalidUrlError = new Error('Invalid connection string');
      mongoose.connect.mockRejectedValue(invalidUrlError);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(invalidUrlError);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should handle DNS lookup failures', async () => {
      const dnsError = new Error('getaddrinfo ENOTFOUND');
      dnsError.code = 'ENOTFOUND';
      mongoose.connect.mockRejectedValue(dnsError);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(dnsError);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should handle connection refused error', async () => {
      const refusedError = new Error('connect ECONNREFUSED');
      refusedError.code = 'ECONNREFUSED';
      mongoose.connect.mockRejectedValue(refusedError);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(refusedError);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });
  });

  describe('edge cases', () => {
    it('should handle null connection object', async () => {
      mongoose.connect.mockResolvedValue(null);

      await expect(connectDB()).rejects.toThrow();
    });

    it('should handle undefined connection.connection', async () => {
      mongoose.connect.mockResolvedValue({});

      await expect(connectDB()).rejects.toThrow();
    });

    it('should handle missing host property', async () => {
      mongoose.connect.mockResolvedValue({
        connection: {}
      });

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Connected sucessfully vaibhav',
        undefined
      );
    });

    it('should handle connection with empty host string', async () => {
      const mockConnection = {
        connection: {
          host: ''
        }
      };
      mongoose.connect.mockResolvedValue(mockConnection);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Connected sucessfully vaibhav',
        ''
      );
    });
  });

  describe('concurrent connections', () => {
    it('should handle multiple simultaneous connection attempts', async () => {
      const mockConnection = {
        connection: {
          host: 'localhost'
        }
      };
      mongoose.connect.mockResolvedValue(mockConnection);

      const promises = [connectDB(), connectDB(), connectDB()];
      await Promise.all(promises);

      expect(mongoose.connect).toHaveBeenCalledTimes(3);
    });

    it('should handle mixed success and failure scenarios', async () => {
      mongoose.connect
        .mockResolvedValueOnce({
          connection: { host: 'localhost' }
        })
        .mockRejectedValueOnce(new Error('Failed'))
        .mockResolvedValueOnce({
          connection: { host: 'localhost' }
        });

      await connectDB();
      await connectDB();
      await connectDB();

      expect(mongoose.connect).toHaveBeenCalledTimes(3);
      expect(processExitSpy).toHaveBeenCalledTimes(1);
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });
  });
});