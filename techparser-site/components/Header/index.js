import Link from 'next/link';

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'About us', link: '/aboutUs' },
  { text: 'Assets', link: '/assets' },
  { text: 'Our services', link: '/' },
  { text: 'Blog', link: '/' }
];

const Header = ({ currentMenuItem, customClassName }) => {
  return (
    <div className=" flex flex-row">
      {menuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div
            className={`border-transparent hover:border-primary border-r-0 border-l-0 border-t-0 border-b-2 pb-16 pl-3 ${
              item.text === currentMenuItem ? 'border-primary' : ''
            }`}
          >
            <a
              href={item.link}
              className={`${customClassName}  hover:text-primary font-gilroy font-medium text-lg md:text-xl p-4 ${
                item.text === currentMenuItem ? 'text-primary' : ''
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
export default Header;
