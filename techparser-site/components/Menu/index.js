import Link from 'next/link';

const Menu = ({ menuItems }) => {
  return (
    <div className="flex flex-col ">
      {menuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <a
            href={item.link}
            className="text-white hover:text-secondary hover:underline font-gilroy text-lg xl:text-xl md:text-sm pb-3 xl:pb-8 md:pb-6 md:text-left text-center"
          >
            {item.text}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
