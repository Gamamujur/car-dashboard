import React from 'react'
import { render, screen } from '@testing-library/react'
import LandingPage from '../LandingPage/LandingPage'
import '@testing-library/jest-dom'

describe('Landing Page', () => {
    test('should render hero section and link to search car', async () => {
        render(<LandingPage/>)

        const heroSection = screen.getByTestId('hero-id')
        const mainButton = screen.getByTestId('redirect-button')
        expect(heroSection).toBeInTheDocument()
        expect(mainButton).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Mulai Sewa Mobil' })).toHaveAttribute('href', '/cars')
    })
})
