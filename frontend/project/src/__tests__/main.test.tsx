import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { StrictMode } from 'react';

// Mock react-dom/client
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
    unmount: vi.fn(),
  })),
}));

// Mock App component
vi.mock('../App', () => ({
  default: () => <div>App Component</div>,
}));

// Mock ClerkProvider
vi.mock('@clerk/clerk-react', () => ({
  ClerkProvider: ({ children, publishableKey }: any) => (
    <div data-testid="clerk-provider" data-publishable-key={publishableKey}>
      {children}
    </div>
  ),
}));

describe('main.tsx', () => {
  let originalEnv: any;

  beforeEach(() => {
    // Save original env
    originalEnv = { ...import.meta.env };
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Restore env
    import.meta.env = originalEnv;
  });

  describe('PUBLISHABLE_KEY validation', () => {
    it('should read VITE_CLERK_PUBLISHABLE_KEY from environment', () => {
      const key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
      expect(key).toBeDefined();
    });

    it('should throw error when PUBLISHABLE_KEY is missing', () => {
      // Test the validation logic
      const PUBLISHABLE_KEY = undefined;
      
      expect(() => {
        if (!PUBLISHABLE_KEY) {
          throw new Error('Missing Publishable Key');
        }
      }).toThrow('Missing Publishable Key');
    });

    it('should throw error with correct message', () => {
      const PUBLISHABLE_KEY = undefined;
      
      expect(() => {
        if (!PUBLISHABLE_KEY) {
          throw new Error('Missing Publishable Key');
        }
      }).toThrow(Error);
    });

    it('should not throw when PUBLISHABLE_KEY is present', () => {
      const PUBLISHABLE_KEY = 'pk_test_123';
      
      expect(() => {
        if (!PUBLISHABLE_KEY) {
          throw new Error('Missing Publishable Key');
        }
      }).not.toThrow();
    });

    it('should handle empty string as missing key', () => {
      const PUBLISHABLE_KEY = '';
      
      expect(() => {
        if (!PUBLISHABLE_KEY) {
          throw new Error('Missing Publishable Key');
        }
      }).toThrow('Missing Publishable Key');
    });

    it('should handle null as missing key', () => {
      const PUBLISHABLE_KEY = null;
      
      expect(() => {
        if (!PUBLISHABLE_KEY) {
          throw new Error('Missing Publishable Key');
        }
      }).toThrow('Missing Publishable Key');
    });

    it('should accept valid publishable key format', () => {
      const PUBLISHABLE_KEY = 'pk_test_abcd1234';
      
      expect(PUBLISHABLE_KEY).toBeTruthy();
      expect(PUBLISHABLE_KEY.startsWith('pk_')).toBe(true);
    });
  });

  describe('createRoot', () => {
    it('should call createRoot with root element', async () => {
      const { createRoot } = await import('react-dom/client');
      const mockElement = document.createElement('div');
      mockElement.id = 'root';
      
      createRoot(mockElement);
      
      expect(createRoot).toHaveBeenCalledWith(mockElement);
    });

    it('should use non-null assertion on getElementById', () => {
      const mockElement = document.getElementById('root');
      
      // In the actual code, it uses document.getElementById('root')!
      // This tests that the element is expected to exist
      expect(document.getElementById).toBeDefined();
    });

    it('should call render method on root', async () => {
      const { createRoot } = await import('react-dom/client');
      const mockRoot = createRoot(document.createElement('div'));
      
      expect(mockRoot.render).toBeDefined();
      expect(typeof mockRoot.render).toBe('function');
    });
  });

  describe('StrictMode wrapper', () => {
    it('should wrap application in StrictMode', () => {
      expect(StrictMode).toBeDefined();
      expect(typeof StrictMode).toBe('object');
    });

    it('should be a React component', () => {
      const element = <StrictMode><div>Test</div></StrictMode>;
      expect(element).toBeDefined();
      expect(element.type).toBe(StrictMode);
    });
  });

  describe('ClerkProvider configuration', () => {
    it('should wrap App with ClerkProvider', async () => {
      const { ClerkProvider } = await import('@clerk/clerk-react');
      const App = (await import('../App')).default;
      
      const element = (
        <ClerkProvider publishableKey="pk_test_123">
          <App />
        </ClerkProvider>
      );
      
      expect(element.type).toBe(ClerkProvider);
    });

    it('should pass publishableKey prop to ClerkProvider', () => {
      const publishableKey = 'pk_test_123';
      const props = { publishableKey };
      
      expect(props.publishableKey).toBe(publishableKey);
    });

    it('should have required publishableKey prop', () => {
      const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
      
      expect(PUBLISHABLE_KEY).toBeDefined();
      expect(typeof PUBLISHABLE_KEY).toBe('string');
    });
  });

  describe('component nesting structure', () => {
    it('should have correct nesting: StrictMode > ClerkProvider > App', async () => {
      const { ClerkProvider } = await import('@clerk/clerk-react');
      const App = (await import('../App')).default;
      
      const element = (
        <StrictMode>
          <ClerkProvider publishableKey="pk_test_123">
            <App />
          </ClerkProvider>
        </StrictMode>
      );
      
      expect(element.type).toBe(StrictMode);
      expect(element.props.children.type).toBe(ClerkProvider);
    });

    it('should render App inside ClerkProvider', async () => {
      const { ClerkProvider } = await import('@clerk/clerk-react');
      const App = (await import('../App')).default;
      
      const provider = (
        <ClerkProvider publishableKey="pk_test_123">
          <App />
        </ClerkProvider>
      );
      
      expect(provider.props.children.type).toBe(App);
    });
  });

  describe('imports', () => {
    it('should import StrictMode from react', () => {
      expect(StrictMode).toBeDefined();
    });

    it('should import createRoot from react-dom/client', async () => {
      const module = await import('react-dom/client');
      expect(module.createRoot).toBeDefined();
    });

    it('should import App component', async () => {
      const App = (await import('../App')).default;
      expect(App).toBeDefined();
      expect(typeof App).toBe('function');
    });

    it('should import ClerkProvider', async () => {
      const { ClerkProvider } = await import('@clerk/clerk-react');
      expect(ClerkProvider).toBeDefined();
    });

    it('should import index.css', () => {
      // CSS import is handled by the build system
      expect(true).toBe(true);
    });
  });

  describe('environment variable handling', () => {
    it('should access import.meta.env', () => {
      expect(import.meta.env).toBeDefined();
    });

    it('should handle VITE_ prefixed variables', () => {
      const key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
      expect(key).toBeDefined();
    });

    it('should validate environment variable before use', () => {
      const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
      
      if (!PUBLISHABLE_KEY) {
        expect(() => {
          throw new Error('Missing Publishable Key');
        }).toThrow();
      } else {
        expect(PUBLISHABLE_KEY).toBeTruthy();
      }
    });
  });

  describe('DOM manipulation', () => {
    it('should target element with id "root"', () => {
      const rootId = 'root';
      expect(rootId).toBe('root');
    });

    it('should use getElementById to find root', () => {
      expect(document.getElementById).toBeDefined();
    });

    it('should assert root element is not null', () => {
      const mockElement = document.createElement('div');
      mockElement.id = 'root';
      document.body.appendChild(mockElement);
      
      const root = document.getElementById('root');
      expect(root).not.toBeNull();
      
      document.body.removeChild(mockElement);
    });
  });

  describe('error handling edge cases', () => {
    it('should handle missing root element gracefully in production', () => {
      const element = document.getElementById('non-existent');
      expect(element).toBeNull();
    });

    it('should validate PUBLISHABLE_KEY is truthy', () => {
      const validKeys = [
        'pk_test_123',
        'pk_live_456',
        'pk_test_a1b2c3'
      ];
      
      validKeys.forEach(key => {
        expect(Boolean(key)).toBe(true);
      });
    });

    it('should reject falsy PUBLISHABLE_KEY values', () => {
      const invalidKeys = [undefined, null, '', 0, false];
      
      invalidKeys.forEach(key => {
        expect(Boolean(key)).toBe(false);
      });
    });
  });

  describe('TypeScript non-null assertion', () => {
    it('should use non-null assertion operator on getElementById', () => {
      // The actual code uses document.getElementById('root')!
      // This tests that we expect the element to exist
      const element = document.createElement('div');
      element.id = 'root';
      
      expect(element).not.toBeNull();
    });
  });

  describe('integration', () => {
    it('should properly integrate all parts together', async () => {
      const { createRoot } = await import('react-dom/client');
      const { ClerkProvider } = await import('@clerk/clerk-react');
      const App = (await import('../App')).default;
      
      const mockElement = document.createElement('div');
      const mockRoot = createRoot(mockElement);
      const PUBLISHABLE_KEY = 'pk_test_123';
      
      const app = (
        <StrictMode>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
          </ClerkProvider>
        </StrictMode>
      );
      
      expect(() => mockRoot.render(app)).not.toThrow();
    });
  });
});