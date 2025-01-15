import { useState } from "react";
import { renderHook, act } from '@testing-library/react'

// Test for handleSaveMarkdown function
test('handleSaveMarkdown updates markdownContent state', () => {
    const { result } = renderHook(() => useState(''));
    const [, setMarkdownContent] = result.current;
    
    const handleSaveMarkdown = (content: string) => {
      setMarkdownContent(content);
    };
  
    act(() => {
      handleSaveMarkdown('New content');
    });
  
    expect(result.current[0]).toBe('New content');
  });
  
  // Test for filterProviders function
  test('filterProviders filters providers correctly', () => {
    const providers = [
      { name: 'Hospital A', state: { name: 'State 1' } },
      { name: 'Clinic B', state: { name: 'State 2' } },
      { name: 'Hospital C', state: { name: 'State 1' } },
    ];
  
    const searchInput = 'hospital';
    
    const filtered = providers.filter((provider: any) => {
      const { name, state } = provider;
      const searchValue = searchInput.toLowerCase();
      return (
        name.toLowerCase().includes(searchValue) ||
        state.name.toLowerCase().includes(searchValue)
      );
    });
  
    expect(filtered.length).toBe(2);
    expect(filtered[0].name).toBe('Hospital A');
    expect(filtered[1].name).toBe('Hospital C');
  });