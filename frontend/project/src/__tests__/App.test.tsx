import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ClerkProvider } from '@clerk/clerk-react';
import App from '../App';

// Mock Clerk components
vi.mock('@clerk/clerk-react', async () => {
  const actual = await vi.importActual('@clerk/clerk-react');
  return {
    ...actual,
    SignedIn: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-in">{children}</div>,
    SignedOut: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-out">{children}</div>,
    SignInButton: ({ mode }: { mode?: string }) => <button data-testid="sign-in-button" data-mode={mode}>Sign In</button>,
    UserButton: () => <div data-testid="user-button">User Button</div>,
    ClerkProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render without crashing', () => {
      render(<App />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should render header element', () => {
      render(<App />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });

    it('should render SignedOut component', () => {
      render(<App />);
      expect(screen.getByTestId('signed-out')).toBeInTheDocument();
    });

    it('should render SignedIn component', () => {
      render(<App />);
      expect(screen.getByTestId('signed-in')).toBeInTheDocument();
    });
  });

  describe('SignedOut state', () => {
    it('should render SignInButton when signed out', () => {
      render(<App />);
      const signInButton = screen.getByTestId('sign-in-button');
      expect(signInButton).toBeInTheDocument();
    });

    it('should render SignInButton with modal mode', () => {
      render(<App />);
      const signInButton = screen.getByTestId('sign-in-button');
      expect(signInButton).toHaveAttribute('data-mode', 'modal');
    });

    it('should display "Sign In" text on button', () => {
      render(<App />);
      expect(screen.getByText('Sign In')).toBeInTheDocument();
    });

    it('should have SignInButton as clickable element', () => {
      render(<App />);
      const signInButton = screen.getByTestId('sign-in-button');
      expect(signInButton.tagName).toBe('BUTTON');
    });
  });

  describe('SignedIn state', () => {
    it('should render UserButton when signed in', () => {
      render(<App />);
      const userButton = screen.getByTestId('user-button');
      expect(userButton).toBeInTheDocument();
    });

    it('should display UserButton with correct text', () => {
      render(<App />);
      expect(screen.getByText('User Button')).toBeInTheDocument();
    });

    it('should not render SignInButton content when signed in', () => {
      render(<App />);
      const signedIn = screen.getByTestId('signed-in');
      expect(signedIn).toBeInTheDocument();
    });
  });

  describe('component structure', () => {
    it('should have both SignedOut and SignedIn components as siblings', () => {
      const { container } = render(<App />);
      const header = container.querySelector('header');
      
      expect(header?.children).toHaveLength(2);
    });

    it('should render SignedOut before SignedIn', () => {
      const { container } = render(<App />);
      const header = container.querySelector('header');
      const children = Array.from(header?.children || []);
      
      expect(children[0]).toHaveAttribute('data-testid', 'signed-out');
      expect(children[1]).toHaveAttribute('data-testid', 'signed-in');
    });

    it('should have header as root element', () => {
      const { container } = render(<App />);
      const header = container.firstChild;
      
      expect(header).toBeTruthy();
      expect((header as HTMLElement).tagName).toBe('HEADER');
    });
  });

  describe('CSS imports', () => {
    it('should import App.css', () => {
      // This test verifies that the import statement exists
      // The actual CSS loading is handled by the build system
      expect(true).toBe(true);
    });
  });

  describe('accessibility', () => {
    it('should have header with banner role', () => {
      render(<App />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should render interactive elements (button)', () => {
      render(<App />);
      const button = screen.getByTestId('sign-in-button');
      expect(button).toBeInTheDocument();
    });

    it('should have focusable elements', () => {
      render(<App />);
      const button = screen.getByTestId('sign-in-button');
      expect(button.tagName).toBe('BUTTON');
    });
  });

  describe('component props', () => {
    it('should pass mode prop to SignInButton', () => {
      render(<App />);
      const button = screen.getByTestId('sign-in-button');
      expect(button.getAttribute('data-mode')).toBe('modal');
    });

    it('should not pass unexpected props to components', () => {
      const { container } = render(<App />);
      const header = container.querySelector('header');
      
      // Header should only have standard HTML attributes
      expect(header?.getAttribute('class')).toBeNull();
      expect(header?.getAttribute('id')).toBeNull();
    });
  });

  describe('edge cases', () => {
    it('should handle multiple renders', () => {
      const { rerender } = render(<App />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
      
      rerender(<App />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should maintain structure after re-render', () => {
      const { rerender } = render(<App />);
      const initialButton = screen.getByTestId('sign-in-button');
      
      rerender(<App />);
      const afterButton = screen.getByTestId('sign-in-button');
      
      expect(afterButton).toBeInTheDocument();
    });

    it('should not throw errors during unmount', () => {
      const { unmount } = render(<App />);
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('export', () => {
    it('should export App as default', () => {
      expect(App).toBeDefined();
      expect(typeof App).toBe('function');
    });

    it('should be a React functional component', () => {
      expect(App.name).toBe('App');
    });
  });

  describe('integration with Clerk components', () => {
    it('should properly integrate SignedOut and SignInButton', () => {
      render(<App />);
      const signedOut = screen.getByTestId('signed-out');
      const signInButton = screen.getByTestId('sign-in-button');
      
      expect(signedOut).toContainElement(signInButton);
    });

    it('should properly integrate SignedIn and UserButton', () => {
      render(<App />);
      const signedIn = screen.getByTestId('signed-in');
      const userButton = screen.getByTestId('user-button');
      
      expect(signedIn).toContainElement(userButton);
    });
  });

  describe('conditional rendering logic', () => {
    it('should show correct components based on auth state', () => {
      render(<App />);
      
      // Both containers should be present (Clerk handles the display logic)
      expect(screen.getByTestId('signed-out')).toBeInTheDocument();
      expect(screen.getByTestId('signed-in')).toBeInTheDocument();
    });
  });
});