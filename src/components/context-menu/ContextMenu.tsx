import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem as MenuItemHeadless,
} from "@headlessui/react";

import { MenuOption, MenuItems, TriggerButton } from "./ContextMenu.styled";
import { VerticalDots } from "@ui/icons";
import { useElementRefWithPosition } from "@utils/hooks";

interface MenuItem {
  id: string;
  name: string;
  callback: () => void;
}

interface ContextMenuProps {
  items: MenuItem[];
  rightOffset?: number;
}

export const ContextMenu = ({ items, rightOffset }: ContextMenuProps) => {
  const menuItemClick = (callback: () => void) => () => {
    callback();
  };
  const { ref: menuItemsRef, style } =
    useElementRefWithPosition<HTMLDivElement>("left");

  return (
    <Menu as="div" className="relative">
      <MenuButton as={Fragment}>
        <TriggerButton>
          <VerticalDots />
        </TriggerButton>
      </MenuButton>
      <MenuItems ref={menuItemsRef} style={style} anchor="bottom start">
        {items.map((item) => (
          <MenuItemHeadless key={item.id}>
            {({ active }) => (
              <MenuOption
                $active={active}
                onClick={menuItemClick(item.callback)}
              >
                {item.name}
              </MenuOption>
            )}
          </MenuItemHeadless>
        ))}
      </MenuItems>
    </Menu>
  );
};
