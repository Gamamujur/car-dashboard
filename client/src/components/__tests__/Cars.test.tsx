import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../Login'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
import userEvent from '@testing-library/user-event';


jest.mock('axios')
describe('Login Page', () => {
    const navigateMock = jest.fn()

    test('should render Login page', () => {
        render(
            <Login navigate={navigateMock}/>
        )
        expect(screen.getByText('Welcome, Admin BCR')).toBeInTheDocument()
    })

    test('should have form and onsubmit', async () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <Login navigate={navigateMock}/>
            </MemoryRouter>
        )

        const formLogin = screen.getByTestId('login-form')
        expect(formLogin).toBeInTheDocument()
        expect(formLogin).toHaveProperty('onsubmit')
    })

    test('handles form submission successfully', async () => {
        const apiRoute = 'http://localhost:3000/v1/user/login';
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
            data: { 'Logged In': 'tokenval' },
        });
        render(<Login navigate={navigateMock} />);

        const emailValue = 'test@example.com';
        const passwordValue = 'password123';
        fireEvent.change(screen.getByTestId('emailinput'), { target: { value: emailValue } });
        fireEvent.change(screen.getByTestId('passinput'), { target: { value: passwordValue } });


        userEvent.click(screen.getByRole('button', { name: /Sign In/i }));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith(apiRoute, {
            email: emailValue,
            password: passwordValue,
            });
        });
    });
})
