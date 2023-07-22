import Link from 'next/link';

import { BiHomeCircle } from 'react-icons/bi';
import {
  BsSearch,
  BsPerson,
  BsTwitter,
  BsThreeDots,
} from 'react-icons/bs';
import {
  IoNotificationsOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import {
  MdOutlineEmail,
  MdOutlineVerified,
} from 'react-icons/md';
import { RiFileListLine } from 'react-icons/ri';
import { CgMoreO } from 'react-icons/cg';

const navigationIcons = [
  {
    title: 'Twitter',
    icon: <BsTwitter />,
  },
  {
    title: 'Home',
    icon: <BiHomeCircle />,
    href: '/',
  },
  {
    title: 'Explore',
    icon: <BsSearch />,
    href: '/',
  },
  {
    title: 'Notifications',
    icon: <IoNotificationsOutline />,
    href: '/',
  },
  {
    title: 'Messages',
    icon: <MdOutlineEmail />,
    href: '/',
  },
  {
    title: 'Communities',
    icon: <IoPeopleOutline />,
    href: '/',
  },
  {
    title: 'Profile',
    icon: <BsPerson />,
    href: '/',
  },
  {
    title: 'More',
    icon: <CgMoreO />,
    href: '/',
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative ">
      <div className="max-w-screen-xl w-full h-full flex relative px-8">
        {/* Left sidebar navigation/header */}
        <section className="fixed w-[275px] flex flex-col h-screen my-4 justify-between">
          <div className="flex flex-col items-stretch space-y-1 mt-4 ">
            {navigationIcons.map(
              (navigationIcon) => (
                <Link
                  key={navigationIcon.title}
                  href={`/${navigationIcon.title}`}
                  className="hover:bg-white/10 text-[21px] transition duration-200 flex justify-start w-fit items-center space-x-4 rounded-3xl py-2 px-3 "
                >
                  <div>{navigationIcon.icon}</div>
                  {navigationIcon.title !==
                    'Twitter' && (
                    <div>
                      {navigationIcon.title}
                    </div>
                  )}
                </Link>
              )
            )}
            <button className="w-9/12 m-4 rounded-full bg-blue-400 py-3 text-xl hover:bg-opacity-75 transition duration-200">
              Tweet
            </button>
          </div>
          <button className="w-full rounded-full flex items-center justify-between mb-5 space-x-2 bg-transparent hover:bg-white/10 p-2 transition duration-200">
            <div className="flex space-x-2">
              <div className="rounded-full bg-slate-400 w-10 h-10 text-center flex items-center justify-center">
                Pict
              </div>
              <div className="text-left">
                <p className="font-semibold text-md ">
                  Dede Mahendra
                </p>
                <p className="font-light text-sm text-gray-400">
                  @dedemahendra
                </p>
              </div>
            </div>
            <div>
              <BsThreeDots size={20} />
            </div>
          </button>
        </section>
        <main>Main Section</main>
        <section>Right Section</section>
      </div>
    </div>
  );
};

export default Home;
