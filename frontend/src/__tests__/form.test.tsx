import '@testing-library/jest-dom'
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react'
import Page from '../app/page'
import axios from 'axios';

jest.mock('axios');

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

  it('displays error messages for empty inputs', async () => {
    // Assuming the form submission doesn't happen on button click but on form submit
    // Replace `form` with an appropriate test ID or form element if necessary
    const form = screen.getByTestId('user-form');
    await act(async () => {
        fireEvent.submit(form);
    });

    // Replace the following with the actual error messages and methods to access them
    const nameError = screen.queryByText('Name is required');
    const emailError = screen.queryByText('Email is required');
    const messageError = screen.queryByText('Message is required');

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(messageError).toBeInTheDocument();
  }); 

  // Email Validation tests

  it('displays an error message for an email input with no domain', async () => {
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'griffin@' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
        fireEvent.click(submitButton);
    });

    const emailError = screen.queryByText('Invalid email address');
    expect(emailError).toBeInTheDocument();
  });

  it('displays an error for an email without an "@" symbol', async () => {
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'griffin.com' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
        fireEvent.click(submitButton);
    });

    const emailError = screen.queryByText('Invalid email address');
    expect(emailError).toBeInTheDocument();
  });

  it('displays an error for an email with special characters', async () => {
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'griffin!@gmail.com' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
        fireEvent.click(submitButton);
    });

    const emailError = screen.queryByText('Invalid email address');
    expect(emailError).toBeInTheDocument();
  });

  it('displays an error for an email with without .', async () => {
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'griffin@gmail' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await act(async () => {
        fireEvent.click(submitButton);
    });

    const emailError = screen.queryByText('Invalid email address');
    expect(emailError).toBeInTheDocument();
  });

  // End of Email Validation tests

  it('displays a success message after submitting the form', async () => {
    // Mock axios.post to return a successful response
    (axios.post as jest.Mock).mockResolvedValueOnce({ status: 200, data: 'Form submitted successfully!' });

    const nameInput = screen.getByPlaceholderText('John Doe') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Your message') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'Griffin Clark' } });
      fireEvent.change(emailInput, { target: { value: 'griffin@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'Hello World' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      const successMessage = screen.getByText('Form submitted successfully!🎉');
      expect(successMessage).toBeInTheDocument();
    });
  });

  it('displays a error message after submitting the form due to response status', async () => {
    // Mock axios.post to return a unsuccessful response
    (axios.post as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

    const nameInput = screen.getByPlaceholderText('John Doe') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('john@example.com') as HTMLInputElement;
    const messageInput = screen.getByPlaceholderText('Your message') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'Griffin Clark' } });
      fireEvent.change(emailInput, { target: { value: 'griffin@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'Hello World' } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      const successMessage = screen.getByText('Error submitting form!😰');
      expect(successMessage).toBeInTheDocument();
    });
  });
});