import Image from 'next/image';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  AddIcon,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';

import MobileMenu from '../MobileMenu';
import Bars from '../../public/Bars.svg';
import logo from '../../public/white.svg';

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About us', link: '/' },
  { text: 'Our services', link: '/' },
  { text: 'Blog', link: '/' }
];

function TpDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="mr-10 mt-1">
        <div ref={btnRef} className="cursor-pointer">
          <Image
            onClick={onOpen}
            as={AddIcon}
            color="primary"
            cursor="pointer"
            src={Bars}
            width={20}
          ></Image>
        </div>
      </div>
      <div className=" bg-textDark text-textDark">
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <div className="flex justify-between ">
              <div className="w-36 ml-14 mt-16 md:hidden block">
                <Image src={logo}></Image>
              </div>
              <div className="mt-16 mr-7 text-white ">
                <DrawerCloseButton />
              </div>
            </div>
            <div className="mt-40 md:hidden block">
              <MobileMenu menuItems={menuItems} currentMenuItems="Home" />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default TpDrawer;
