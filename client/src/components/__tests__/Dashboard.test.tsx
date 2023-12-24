import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CarDashboard from '../Cars/CarDashboard'
import { useUser as ContextUser } from '../../Context/UserContext'

jest.mock('../../Context/UserContext.tsx', () => ({
    ...jest.requireActual('../../Context/UserContext'), 
    useUser: jest.fn(),
  }));
  
describe('Car Dashboard', () => {
    it('should render component', () => {
        (ContextUser as jest.Mock).mockReturnValue({ user: { id:1, email:'tesaja', role:'admin' } });
        render(<CarDashboard/>)
        expect(screen.getByText('List Cars')).toBeInTheDocument()
    })
})