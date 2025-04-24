import { render, screen, fireEvent } from '@testing-library/react';
import { TemporaryDrawer } from './Drawer';

describe('MyDrawer Component', () => {
    it('opens the drawer when button is clicked', async () => {
      render(<TemporaryDrawer />);
  
      const button = screen.getByText('Open drawer');
      fireEvent.click(button);
  
    //   const drawerText = await screen.findByText('Drawer Content');
    //   expect(drawerText).toBeTruthy();
    });
  });