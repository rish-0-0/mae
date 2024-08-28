import {NavLink} from '@mantine/core';
import {IconHome2, IconCirclePlus} from '@tabler/icons-react';

const Navbar = () => (
  <>
    <NavLink
      href="/"
      label="My Objectives"
      leftSection={<IconHome2 size="1rem" stroke={1.5} />}
    />
    <NavLink
      href="/new"
      label="New Objective"
      leftSection={<IconCirclePlus size="1rem" stroke={1.5} />}
      active
      variant="light"
    />
  </>
);

export default Navbar;