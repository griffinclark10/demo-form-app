import '@testing-library/jest-dom'
import { render, fireEvent, screen, act } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  beforeEach(() => {
      render(<Page />);
  });

  it('renders the main content area', () => {
      const mainContent = screen.getByRole('main');
      expect(mainContent).toBeInTheDocument();
  });

  it('renders input fields for name, email, and message', () => {
      const nameInput = screen.getByPlaceholderText('John Doe');
      const emailInput = screen.getByPlaceholderText('john@example.com');
      const messageInput = screen.getByPlaceholderText('Your message');

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(messageInput).toBeInTheDocument();
  });

  it('allows typing in input fields', async () => {
    await act(async () => {
        fireEvent.change(screen.getByPlaceholderText('John Doe'), {
            target: { value: 'Jane Doe' },
        });
        fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
            target: { value: 'jane@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('Your message'), {
            target: { value: 'Hello World' },
        });
    });

    const nameInput = screen.getByPlaceholderText('John Doe') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Your message') as HTMLInputElement;

    expect(nameInput.value).toBe('Jane Doe');
    expect(emailInput.value).toBe('jane@example.com');
    expect(messageInput.value).toBe('Hello World');
  });

  it('submits the form', async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    });
  });
});