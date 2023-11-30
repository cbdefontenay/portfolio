import { motion } from "framer-motion";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import LanguagePickerButton from "./LanguagePickerButton";

const currentURL = new URL(window.location.href);
const lang = getLangFromUrl(currentURL);

const t = useTranslations(lang);

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: t("nav.home"), href: `/${lang}/`, id: 1 },
  { name: t("nav.projects"), href: `/${lang}/projekte`, id: 2 },
  { name: t("nav.blog"), href: "https://nordi-saga-blog.vercel.app/", id: 3 },
  { name: t("nav.contact"), href: `/${lang}/contact`, id: 4 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        className="hover:underline hover:text-primary"
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="relative mx-8 mb-14 flex items-center justify-between pb-6 pt-12 font-bold md:mx-16 lg:mx-32">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <a href="/">
          <img
            src="/csharp.svg"
            alt="portfolio Logo"
            width="50"
            height="50"
            className="rounded-full hover:animate-pulse"
          />
        </a>
      </motion.div>

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0 z-40 flex h-full
          w-full flex-col items-center justify-center gap-24 bg-lightBg dark:bg-darkBg text-2xl"
        >
          <NavLinks
            className="flex flex-col gap-24 text-lg font-gardamondMedium"
            isMobile={true}
          />
          <LanguagePickerButton />
          <ToggleTheme />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks
          className="flex gap-12 font-gardamondRegular"
          isMobile={false}
        />
        <LanguagePickerButton />
        <ToggleTheme />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line-1 block h-0.5 w-8 bg-orange-600"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 block h-0.5 w-6 bg-orange-400"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 block h-0.5 w-4 bg-orange-600"
        ></motion.span>
      </motion.div>
    </nav>
  );
}
