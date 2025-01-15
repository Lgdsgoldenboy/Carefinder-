import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For the custom matchers like toBeInTheDocument

// Import the components you want to test
import Nav from '../components/Nav.tsx';
import Pagination from '../components/pagination.tsx';
import React from 'react';



// Test for Nav component
test('Nav component renders correctly', () => {
    render(<Nav />);
    
    expect(screen.getByAltText('Carefinder Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sign Up/Login')).toBeInTheDocument();
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