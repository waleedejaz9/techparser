import Link from 'next/link';

const MobileMenu = ({ menuItems, currentMenuItems }) => {
  return (
    <div className=" flex flex-col pl-5 pr-5 gap-y-5">
      {menuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div
            className={`hover:bg-white text-center p-5 rounded-sm  ${
              item.text === currentMenuItems ? 'bg-white ' : ' '
            }`}
          >
            <a
              href={item.link}
              className={`text-white hover:text-primary font-gilroy font-medium text-lg md:text-xl mt-10 ${
                item.text === currentMenuItems ? 'text-primary ' : ' text-white'
              }`}
            >
              {item.text}
            </a>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default MobileMenu;
