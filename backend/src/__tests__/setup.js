import { beforeAll, afterAll, afterEach, vi } from 'vitest';

// Mock console methods to reduce noise in tests
beforeAll(() => {
  global.console = {
    ...console,
    log: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
    info: vi.fn(),
    debug: vi.fn(),
  };
});

// Clear all mocks after each test
afterEach(() => {
  vi.clearAllMocks();
});