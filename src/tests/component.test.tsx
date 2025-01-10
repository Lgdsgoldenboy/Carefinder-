import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For the custom matchers like toBeInTheDocument

// Import the components you want to test
import Nav from '../components/Nav.tsx';
import HospitalCard from '../components/HospitalCard.tsx';
import Pagination from '../components/Pagination.tsx';
import React from 'react';



// Test for Nav component
test('Nav component renders correctly', () => {
    render(<Nav />);
    
    expect(screen.getByAltText('Carefinder Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sign Up/Login')).toBeInTheDocument();
  });
  
  // Test for HospitalCard component
  test('HospitalCard component renders correctly', () => {
    const props = {
      name: 'Test Hospital',
      address: '123 Test St',
      phone_number: 1234567890,
    };
  
    render(<HospitalCard {...props} />);
  
    expect(screen.getByText('Test Hospital')).toBeInTheDocument();
    expect(screen.getByText('123 Test St')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('Visit')).toBeInTheDocument();
    expect(screen.getByText('Copy address')).toBeInTheDocument();
  });
  
  // Test for Pagination component
  test('Pagination component renders correct number of page links', () => {
    const props = {
      totalPosts: 100,
      postsPerPage: 10,
      currentPage: 1,
      setCurrentPage: jest.fn(),
    };
  
    render(<Pagination {...props} />);
  
    const pageLinks = screen.getAllByRole('button');
    expect(pageLinks.length).toBe(11); // 10 page numbers + 1 "Next" button
  });

  console.log(React);