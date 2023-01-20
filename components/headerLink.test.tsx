import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { themes } from '../themes';

import Navbar from './navbar';
import { MenuItem } from '../typings';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const subMenuPrefix = 'SubItem';
const subMenuIdx = 2;
const NAV_ITEM: MenuItem[] = [
  {
    text: 'Home',
    key: '/',
    note: 'Back to Hope Shelter index page',
  },
  {
    text: 'About Me',
    key: '/aboutme',
    note: 'My brief indroduction',
  },
  {
    text: 'Portfolio',
    key: '/portfolio/',
  },
];

NAV_ITEM[subMenuIdx].subItems = [
  {
    text: `${subMenuPrefix} Frontend App`,
    key: '/portfolio/f2e',
  },
  {
    text: `${subMenuPrefix} Graphic Design`,
    key: '/portfolio/graphic',
  },
  {
    text: `${subMenuPrefix} Editorial`,
    key: '/portfolio/editoral',
  },
];

function renderComponent() {
  const { container } = render(
    <ThemeProvider theme={themes.light}>
      <Navbar navItems={NAV_ITEM} />
    </ThemeProvider>
  );
  return container;
}

test('show nav items', async () => {
  const activeIdx = 0;
  const router = {
    push: jest.fn(),
    route: NAV_ITEM[activeIdx].key,
  };
  useRouter.mockImplementation(() => router);
  renderComponent();
  const menuItems = await screen.findAllByRole('listitem');
  expect(menuItems).toHaveLength(NAV_ITEM.length);
});

test('show/hide sub menu properly', async () => {
  const activeIdx = 1;
  const router = {
    push: jest.fn(),
    route: NAV_ITEM[activeIdx].key,
  };
  useRouter.mockImplementation(() => router);
  renderComponent();

  const menuItems = await screen.findAllByRole('listitem');
  user.hover(menuItems[subMenuIdx]);

  // eslint-disable-next-line fp/no-let
  let subItems = await screen.findAllByText(new RegExp(subMenuPrefix));

  user.unhover(menuItems[subMenuIdx]);
  await waitForElementToBeRemoved(
    screen.queryAllByText(new RegExp(subMenuPrefix))
  );

  user.hover(menuItems[subMenuIdx]);
  subItems = await screen.findAllByText(new RegExp(subMenuPrefix));

  const subNavItems = NAV_ITEM[subMenuIdx].subItems;
  expect(menuItems).toHaveLength(subNavItems.length);

  const clickedSubMenuItemIdx = 1;
  user.click(subItems[clickedSubMenuItemIdx]);
  await waitForElementToBeRemoved(
    screen.queryAllByText(new RegExp(subMenuPrefix))
  );
  expect(router.push).toHaveBeenCalledWith(
    subNavItems[clickedSubMenuItemIdx].key
  );
});
