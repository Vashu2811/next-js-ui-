import { FaFacebookF, FaInstagram, FaTwitter, FaHome } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { TfiLinkedin } from 'react-icons/tfi';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';

export const socialLinks = [
    { Icon: FaFacebookF, link: 'https://www.facebook.com/incorporight/', label: 'Facebook' },
    { Icon: FaTwitter, link: "https://x.com/incorporight", label: "Twitter" },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/corpriteco/?igsh=XFqNHVqeHhxbTJw",
      label: "Instagram",
    },
    // { Icon: BiLogoTiktok, link: 'https://tiktok.com', label: 'TikTok' },
    {
      Icon: TfiLinkedin,
      link: "https://www.linkedin.com/company/incorporight/",
      label: "LinkedIn",
    },
    {
      Icon: AiOutlineMail,
      link: "mailto:mail@incorporight.com",
      label: "Email",
    },
  ];
export const interestedOptions = [
    { value: 'booking_demo', label: 'Booking a Demo' },
    { value: 'pricing_info', label: 'Pricing Info' },
    { value: 'support', label: 'Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'general_feedback', label: 'General Feedback' },
    { value: 'other', label: 'Other' }
  ]