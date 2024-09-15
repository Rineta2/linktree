import logoImg from "@/components/assest/logo/logo.png";

import { CiMenuKebab } from "react-icons/ci";

import shope from "@/components/assest/pedia/shope.svg";
import tokopedia from "@/components/assest/pedia/tokopedia.svg";
import web from "@/components/assest/pedia/web.svg";

import { FaTiktok, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const logo = [
  {
    id: 1,
    img: logoImg,
    title: "Hi I'm Rizki Ramadhan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const dataLink = [
  {
    id: 1,
    name: "Shopee",
    icons: <CiMenuKebab />,
    path: "https://shopee.com.my/",
    img: shope,
  },

  {
    id: 2,
    name: "Tokopedia",
    icons: <CiMenuKebab />,
    path: "https://tokopedia.com.my/",
    img: tokopedia,
  },

  {
    id: 3,
    name: "Portofolio",
    icons: <CiMenuKebab />,
    path: "https://rzki-r.vercel.app/",
    img: web,
  },

  {
    id: 4,
    name: "Bisnis | Trisa Studio",
    icons: <CiMenuKebab />,
    path: "https://trisa-studio.vercel.app/",
    img: web,
  },

  {
    id: 5,
    name: "Bisnis | Comming Soon",
    icons: <CiMenuKebab />,
    path: "https://trisa-studio.vercel.app/",
    img: web,
  },
];

export const socialLink = [
  {
    id: 1,
    icons: <FaTiktok />,
    path: "https://www.tiktok.com/@rinneeta?is_from_webapp=1&sender_device=pc",
  },

  {
    id: 2,
    icons: <FaFacebookF />,
    path: "https://web.facebook.com/profile.php?id=100007663247764",
  },

  {
    id: 3,
    icons: <FaInstagram />,
    path: "https://www.instagram.com/rzkir.20/",
  },

  {
    id: 4,
    icons: <FaGithub />,
    path: "https://github.com/Rineta2",
  },

  {
    id: 5,
    icons: <CiLinkedin />,
    path: "https://www.linkedin.com/in/rizki-ramadhan-83a17027b/",
  },
];
