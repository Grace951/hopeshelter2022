import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { themes } from '../themes';

import Select from './select';

function renderComponent(
  items = [],
  activeKey = items[0].key,
  mockFn = () => {}
) {
  const { container } = render(
    <ThemeProvider theme={themes.light}>
      <Select activeKey={activeKey} items={items} callback={mockFn} />
    </ThemeProvider>
  );
  return container;
}

test('it shows selected item', () => {
  const items = [
    { key: 'opt1', text: 'Option 1' },
    { key: 'opt2', text: 'Option 2' },
    { key: 'opt3', text: 'Option 3' },
  ];
  renderComponent(items, items[0].key);
  const text = screen.getByText(items[0].text);
  expect(text).toBeInTheDocument();
});

test('it shows selected menu item after clicked', async () => {
  const prefix = 'Option';
  const items = [
    { key: 'opt1', text: `${prefix} 1` },
    { key: 'opt2', text: `${prefix} 2` },
    { key: 'opt3', text: `${prefix} 3` },
  ];
  const firstSelectedIdx = 0;
  const secondSelectedIdx = items.length - 1;
  const mockFn = jest.fn();

  renderComponent(items, items[firstSelectedIdx].key, mockFn);
  const firstSelectElement = screen.getByText(items[firstSelectedIdx].text);
  expect(firstSelectElement).toBeInTheDocument();

  user.click(firstSelectElement);
  const menuItems = await screen.findAllByRole('listitem');
  expect(menuItems).toHaveLength(items.length);

  user.click(menuItems[secondSelectedIdx]);
  await waitForElementToBeRemoved(screen.queryAllByRole('listitem'));
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn.mock.calls[0][1]).toBe(items[secondSelectedIdx]);

  const secondSelectElement = screen.getByText(items[firstSelectedIdx].text);
  expect(secondSelectElement).toBeInTheDocument();
});
