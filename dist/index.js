// index.tsx
import React6 from "react";
import ReactDOM from "react-dom/client";

// App.tsx
import { useState as useState4, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// components/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// constants.tsx
import { jsx } from "react/jsx-runtime";
var COMPANY_NAME = "SmartyoZ";
var CheckIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `w-5 h-5 text-clr-sky-base ${className}`, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) });
var StarIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: `w-5 h-5 text-clr-sky-base ${className}`, children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z", clipRule: "evenodd" }) });
var ArrowRightIcon = ({ className }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `w-4 h-4 ml-1 ${className}`, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" }) });
var DEFAULT_CLIENT_LOGOS = [
  { name: "Client A", placeholder: "TechCorp" },
  { name: "Client B", placeholder: "InnovateX" },
  { name: "Client C", placeholder: "SolutionsIO" },
  { name: "Client D", placeholder: "NextGen" },
  { name: "Client E", placeholder: "GlobalSys" },
  { name: "Client F", placeholder: "AlphaCo" }
];
var INTEGRATION_LOGOS = [
  { name: "Google", placeholder: "G" },
  { name: "Microsoft", placeholder: "M" },
  { name: "Slack", placeholder: "S" },
  { name: "Zoom", placeholder: "Z" },
  { name: "Jira", placeholder: "J" },
  { name: "Oracle", placeholder: "O" },
  { name: "SAP", placeholder: "SAP" },
  { name: "Salesforce", placeholder: "SF" }
];
var SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }) }) },
  { name: "Twitter", href: "#", icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07A4.48 4.48 0 0015.61 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C7.7 9.09 4.07 7.13 1.67 4.15c-.42.72-.66 1.56-.66 2.47 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.01-.06A12.035 12.035 0 008.02 20c7.22 0 11.16-6 11.16-11.16 0-.17 0-.34-.01-.51.77-.56 1.44-1.26 1.96-2.03z" }) }) },
  { name: "LinkedIn", href: "#", icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) }) }
];

// components/Navbar.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Navbar = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "bg-clr-sky-base text-clr-sky-white shadow-lg sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx2("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsx2("div", { className: "flex items-center", children: /* @__PURE__ */ jsx2(Link, { to: "/", className: "text-3xl font-bold text-clr-sky-white font-display", children: COMPANY_NAME }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-6", children: [
        navLinks.map((link) => /* @__PURE__ */ jsx2(
          NavLink,
          {
            to: link.path,
            className: ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive ? "bg-clr-sky-darkest text-clr-sky-white" : "text-clr-sky-white hover:bg-clr-sky-dark hover:text-clr-sky-white"}`,
            children: link.label
          },
          link.label
        )),
        /* @__PURE__ */ jsx2(
          Link,
          {
            to: "/request-demo",
            className: "bg-clr-sky-white hover:bg-clr-sky-light text-clr-sky-darkest font-semibold py-2 px-4 rounded-lg transition-colors duration-150 shadow-md",
            children: "Request Demo"
          }
        )
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "md:hidden flex items-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          type: "button",
          className: "inline-flex items-center justify-center p-2 rounded-md text-clr-sky-white hover:text-clr-sky-white hover:bg-clr-sky-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-clr-sky-white",
          "aria-controls": "mobile-menu",
          "aria-expanded": isOpen,
          children: [
            /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Open main menu" }),
            !isOpen ? /* @__PURE__ */ jsx2("svg", { className: "block h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }) }) : /* @__PURE__ */ jsx2("svg", { className: "block h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })
          ]
        }
      ) })
    ] }) }),
    isOpen && /* @__PURE__ */ jsx2("div", { className: "md:hidden bg-clr-sky-base", id: "mobile-menu", children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: [
      navLinks.map((link) => /* @__PURE__ */ jsx2(
        NavLink,
        {
          to: link.path,
          onClick: () => setIsOpen(false),
          className: ({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${isActive ? "bg-clr-sky-darkest text-clr-sky-white" : "text-clr-sky-white hover:bg-clr-sky-dark hover:text-clr-sky-white"}`,
          children: link.label
        },
        link.label
      )),
      /* @__PURE__ */ jsx2(
        Link,
        {
          to: "/request-demo",
          onClick: () => setIsOpen(false),
          className: "block w-full text-left mt-2 bg-clr-sky-white hover:bg-clr-sky-light text-clr-sky-darkest font-semibold py-2 px-3 rounded-lg transition-colors duration-150 shadow-md",
          children: "Request Demo"
        }
      )
    ] }) })
  ] });
};
var Navbar_default = Navbar;

// components/Footer.tsx
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    Solutions: [
      { label: "Bulk Hiring", path: "/features#bulk-hiring" },
      { label: "Sales Hiring", path: "/features#sales-hiring" },
      { label: "Campus Hiring", path: "/features#campus-hiring" },
      { label: "Recruitment AI", path: "/features#ai" }
    ],
    Company: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "#" },
      { label: "Press", path: "#" },
      { label: "Blog", path: "#" }
    ],
    Resources: [
      { label: "Documentation", path: "#" },
      { label: "Support", path: "/contact" },
      { label: "Integrations", path: "#" },
      { label: "API Status", path: "#" }
    ],
    Legal: [
      { label: "Privacy Policy", path: "#" },
      { label: "Terms of Service", path: "#" },
      { label: "Cookie Policy", path: "#" }
    ]
  };
  return /* @__PURE__ */ jsx3("footer", { className: "bg-clr-sky-darkest text-clr-sky-white", children: /* @__PURE__ */ jsxs2("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxs2("div", { className: "col-span-2 lg:col-span-1 mb-6 md:mb-0", children: [
        /* @__PURE__ */ jsx3(Link2, { to: "/", className: "text-3xl font-bold text-clr-sky-white font-display", children: COMPANY_NAME }),
        /* @__PURE__ */ jsx3("p", { className: "mt-2 text-sm text-clr-sky-light opacity-80", children: "The AI-powered Platform for ALL Hiring." }),
        /* @__PURE__ */ jsx3("div", { className: "flex space-x-4 mt-4", children: SOCIAL_LINKS.map((social) => /* @__PURE__ */ jsxs2("a", { href: social.href, className: "text-clr-sky-light hover:text-clr-sky-white transition-colors", children: [
          /* @__PURE__ */ jsx3("span", { className: "sr-only", children: social.name }),
          /* @__PURE__ */ jsx3(social.icon, { className: "h-6 w-6" })
        ] }, social.name)) })
      ] }),
      Object.entries(footerLinks).map(([title, links]) => /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx3("h3", { className: "text-sm font-semibold text-clr-sky-white tracking-wider uppercase", children: title }),
        /* @__PURE__ */ jsx3("ul", { className: "mt-4 space-y-2", children: links.map((link) => /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { to: link.path, className: "text-base text-clr-sky-light hover:text-clr-sky-white transition-colors", children: link.label }) }, link.label)) })
      ] }, title))
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "mt-12 border-t border-clr-sky-dark pt-8 flex flex-col sm:flex-row justify-between items-center", children: /* @__PURE__ */ jsxs2("p", { className: "text-sm text-clr-sky-light opacity-80", children: [
      "\xA9 ",
      currentYear,
      " ",
      COMPANY_NAME,
      ". All rights reserved."
    ] }) })
  ] }) });
};
var Footer_default = Footer;

// components/HeroSection.tsx
import { Link as Link3 } from "react-router-dom";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var HeroSection = () => {
  return /* @__PURE__ */ jsxs3("div", { className: "relative text-clr-sky-white py-24 sm:py-36 overflow-hidden", children: [
    /* @__PURE__ */ jsx4(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 z-[-1] bg-gradient-to-tr from-clr-sky-dark via-clr-sky-darkest to-clr-sky-dark bg-[length:200%_200%] animate-hero-gradient"
      }
    ),
    /* @__PURE__ */ jsxs3("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10", children: [
      /* @__PURE__ */ jsxs3("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-clr-sky-dark", children: [
        "The AI-powered Platform for ",
        /* @__PURE__ */ jsx4("span", { className: "opacity-80", children: "ALL Hiring" })
      ] }),
      /* @__PURE__ */ jsx4("p", { className: "mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-clr-sky-dark opacity-90", children: "Our platform uses Native AI, Agents AI, and Gen AI to transform hiring - making it the most advanced and end-to-end hiring solution for enterprises." }),
      /* @__PURE__ */ jsx4("div", { className: "mt-10", children: /* @__PURE__ */ jsx4(
        Link3,
        {
          to: "/features",
          className: "inline-block bg-clr-sky-white hover:brightness-95 text-clr-sky-dark font-semibold py-3 px-8 rounded-lg text-lg shadow-xl transition-transform duration-150 hover:scale-105",
          children: "Know More"
        }
      ) }),
      /* @__PURE__ */ jsx4("div", { className: "mt-16 max-w-4xl mx-auto", children: /* @__PURE__ */ jsx4(
        "img",
        {
          src: "./images/dash.png",
          alt: "AI Hiring Platform Mockup",
          className: "rounded-lg shadow-2xl border-2 border-clr-sky-light opacity-90"
        }
      ) })
    ] })
  ] });
};
var HeroSection_default = HeroSection;

// components/LogoCloud.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var LogoCloud = ({
  title,
  logos = DEFAULT_CLIENT_LOGOS,
  className = "",
  titleClassName = "text-clr-sky-darkest",
  logoTextClassName = "text-clr-sky-base"
}) => {
  return /* @__PURE__ */ jsx5("div", { className: `py-8 sm:py-12 ${className}`, children: /* @__PURE__ */ jsxs4("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    title && /* @__PURE__ */ jsx5("h2", { className: `text-center text-2xl font-semibold mb-8 ${titleClassName}`, children: title }),
    /* @__PURE__ */ jsx5("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center", children: logos.map((logo) => /* @__PURE__ */ jsx5("div", { className: "flex justify-center opacity-70 hover:opacity-100 transition duration-300", children: /* @__PURE__ */ jsx5("span", { className: `${logoTextClassName} font-semibold text-lg`, title: logo.name, children: logo.placeholder || logo.name }) }, logo.name)) })
  ] }) });
};
var LogoCloud_default = LogoCloud;

// components/FeatureCard.tsx
import React2 from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var FeatureCard = ({ feature, useDarkBackground = false }) => {
  const cardBg = useDarkBackground ? "bg-clr-sky-darkest" : "bg-clr-sky-white";
  const textColor = useDarkBackground ? "text-clr-sky-white" : "text-clr-sky-darkest";
  const mutedTextColor = useDarkBackground ? "text-clr-sky-light" : "text-clr-sky-dark";
  const borderColor = useDarkBackground ? "border-clr-sky-dark" : "border-clr-sky-light";
  const iconContainerBgColor = useDarkBackground ? "bg-clr-sky-base" : "bg-clr-sky-base";
  const iconItselfColor = "text-clr-sky-white";
  return /* @__PURE__ */ jsxs5("div", { className: `${cardBg} rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center border ${borderColor}`, children: [
    feature.imageUrl && /* @__PURE__ */ jsx6("img", { src: feature.imageUrl, alt: feature.title, className: "w-full h-40 object-cover rounded-md mb-4" }),
    feature.icon && !feature.imageUrl && /* @__PURE__ */ jsx6("div", { className: `p-3 ${iconContainerBgColor} rounded-full mb-4 inline-block`, children: React2.cloneElement(feature.icon, { className: `w-8 h-8 ${iconItselfColor}` }) }),
    /* @__PURE__ */ jsx6("h3", { className: `text-xl font-semibold ${textColor} mb-2`, children: feature.title }),
    /* @__PURE__ */ jsx6("p", { className: `${mutedTextColor} text-sm`, children: feature.description })
  ] });
};
var FeatureCard_default = FeatureCard;

// components/TestimonialCard.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var TestimonialCard = ({ testimonial, useDarkBackground = false }) => {
  const cardBg = useDarkBackground ? "bg-clr-sky-darkest" : "bg-clr-sky-white";
  const textColor = useDarkBackground ? "text-clr-sky-white" : "text-clr-sky-darkest";
  const quoteTextColor = useDarkBackground ? "text-clr-sky-light" : "text-clr-sky-dark";
  const roleTextColor = useDarkBackground ? "text-clr-sky-light" : "text-clr-sky-dark";
  const borderColor = useDarkBackground ? "border-clr-sky-dark" : "border-clr-sky-light";
  const avatarBgColor = "bg-clr-sky-base";
  const avatarTextColor = "text-clr-sky-white";
  const linkColor = useDarkBackground ? "text-clr-sky-base hover:text-clr-sky-light" : "text-clr-sky-base hover:text-clr-sky-dark";
  const starColor = "text-clr-sky-base";
  return /* @__PURE__ */ jsxs6("div", { className: `${cardBg} p-6 rounded-lg shadow-lg flex flex-col border ${borderColor}`, children: [
    /* @__PURE__ */ jsx7("div", { className: "flex mb-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx7(StarIcon, { className: `${starColor} w-5 h-5` }, i)) }),
    /* @__PURE__ */ jsxs6("p", { className: `${quoteTextColor} italic mb-4 flex-grow`, children: [
      '"',
      testimonial.quote,
      '"'
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "flex items-center mt-auto", children: [
      testimonial.avatarUrl ? /* @__PURE__ */ jsx7("img", { src: testimonial.avatarUrl, alt: testimonial.author, className: "w-12 h-12 rounded-full mr-4 object-cover" }) : /* @__PURE__ */ jsx7("div", { className: `w-12 h-12 rounded-full ${avatarBgColor} flex items-center justify-center ${avatarTextColor} font-semibold mr-4 text-xl`, children: testimonial.author.substring(0, 1) }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx7("p", { className: `font-semibold ${textColor}`, children: testimonial.author }),
        /* @__PURE__ */ jsx7("p", { className: `text-sm ${roleTextColor}`, children: testimonial.role })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("a", { href: "#", className: `${linkColor} text-sm font-medium mt-4 inline-flex items-center self-start`, children: [
      "Read full story ",
      /* @__PURE__ */ jsx7(ArrowRightIcon, { className: "ml-1 w-4 h-4" })
    ] })
  ] });
};
var TestimonialCard_default = TestimonialCard;

// components/CallToAction.tsx
import { Link as Link4 } from "react-router-dom";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgColor = "bg-clr-sky-base",
  textColor = "text-clr-sky-white",
  buttonClassName = "bg-clr-sky-white text-clr-sky-darkest hover:bg-clr-sky-light"
}) => {
  return /* @__PURE__ */ jsx8("div", { className: `${bgColor} ${textColor} py-16 sm:py-24`, children: /* @__PURE__ */ jsxs7("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
    /* @__PURE__ */ jsx8("h2", { className: "text-3xl sm:text-4xl font-extrabold", children: title }),
    subtitle && /* @__PURE__ */ jsx8("p", { className: `mt-4 text-lg sm:text-xl ${textColor === "text-clr-sky-white" ? "opacity-90" : "opacity-75"} max-w-2xl mx-auto`, children: subtitle }),
    /* @__PURE__ */ jsx8("div", { className: "mt-10", children: /* @__PURE__ */ jsx8(
      Link4,
      {
        to: buttonLink,
        className: `inline-block font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition-transform duration-150 hover:scale-105 ${buttonClassName}`,
        children: buttonText
      }
    ) })
  ] }) });
};
var CallToAction_default = CallToAction;

// pages/HomePage.tsx
import { Link as Link5 } from "react-router-dom";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var HomePage = () => {
  const solutions = [
    {
      icon: /* @__PURE__ */ jsx9(CheckIcon, { className: "text-clr-sky-white" }),
      title: "Bulk Hiring",
      description: "Enable rapid hiring process for scaling your workforce for rapid growth by automating candidate discovery, outreach, screening and assessing them automatically.",
      imageUrl: "./images/bulk.jpeg"
    },
    {
      icon: /* @__PURE__ */ jsx9(CheckIcon, { className: "text-clr-sky-white" }),
      title: "Sales Hiring",
      description: "Get a robust sales hiring engine for faster impact on your revenue engine with automated behavioral interviews.",
      imageUrl: "./images/sales.jpeg"
    },
    {
      icon: /* @__PURE__ */ jsx9(CheckIcon, { className: "text-clr-sky-white" }),
      title: "Campus Hiring",
      description: "Set up an optimized campus hiring process to assess large volume of candidates with automated interviews and release offer letter at scale.",
      imageUrl: "./images/campus.jpeg"
    }
  ];
  const testimonials = [
    {
      quote: "This platform has helped us in automating the recruitment process from raising job requisition to sending offer letters for candidates. It's a game-changer!",
      author: "Anjali V",
      role: "HR Manager, Tech Solutions Ltd.",
      avatarUrl: "https://picsum.photos/seed/avatar1/100/100"
    },
    {
      quote: "The platform improved the interviewer experience and the candidate experience. The quality-of-hiring has seen a consistent rise, and we have reduced the dependency on recruitment consultants to a large extent. Our team members love the platform.",
      author: "Rohan M",
      role: "Talent Acquisition Head, Global Corp",
      avatarUrl: "https://picsum.photos/seed/avatar2/100/100"
    }
  ];
  return /* @__PURE__ */ jsxs8("div", { className: "text-clr-sky-darkest", children: [
    " ",
    /* @__PURE__ */ jsx9(HeroSection_default, {}),
    /* @__PURE__ */ jsx9(
      LogoCloud_default,
      {
        title: "Trusted by 80+ enterprises across 15 major industries and 6 countries",
        logos: DEFAULT_CLIENT_LOGOS.slice(0, 6),
        className: "bg-clr-sky-light bg-opacity-30",
        titleClassName: "text-clr-sky-darkest",
        logoTextClassName: "text-clr-sky-base"
      }
    ),
    /* @__PURE__ */ jsx9("section", { className: "py-16 sm:py-24 bg-clr-sky-base text-clr-sky-white", children: /* @__PURE__ */ jsxs8("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-3xl sm:text-4xl font-extrabold text-center mb-4", children: "A Complete Hiring Solution for Enterprises" }),
      /* @__PURE__ */ jsx9("p", { className: "text-lg text-clr-sky-white opacity-90 text-center max-w-3xl mx-auto mb-12", children: "Creating experiences and impact for all stakeholders of the hiring process." }),
      /* @__PURE__ */ jsxs8("div", { className: "bg-clr-sky-darkest p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center", children: [
        /* @__PURE__ */ jsxs8("div", { className: "md:w-1/2 mb-8 md:mb-0 md:pr-8", children: [
          /* @__PURE__ */ jsx9("h3", { className: "text-2xl font-bold text-clr-sky-white mb-3", children: "Our Platform Advantage" }),
          /* @__PURE__ */ jsx9("p", { className: "text-clr-sky-white opacity-80 mb-4", children: "Using AI and Automation, our platform creates unique experiences across the entire hiring journey, from sourcing to onboarding, that result in business impact. We help streamline candidate discovery, assessment, interviews, and leadership hiring." }),
          /* @__PURE__ */ jsx9("div", { className: "flex flex-wrap gap-2 mb-4", children: ["Recruiter Experience", "Candidate Experience", "Interviewer Experience"].map((tag) => /* @__PURE__ */ jsx9("span", { className: "bg-clr-sky-base text-clr-sky-white px-3 py-1 rounded-full text-sm font-medium", children: tag }, tag)) }),
          /* @__PURE__ */ jsxs8(Link5, { to: "/features", className: "text-clr-sky-white hover:text-clr-sky-light font-semibold inline-flex items-center", children: [
            "Learn More ",
            /* @__PURE__ */ jsx9(ArrowRightIcon, {})
          ] })
        ] }),
        /* @__PURE__ */ jsx9("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx9("img", { src: "./images/interview.jpeg", alt: "Platform Diagram", className: "rounded-lg shadow-md border border-clr-sky-dark" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 sm:py-24 bg-clr-sky-white", children: /* @__PURE__ */ jsxs8("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-3xl sm:text-4xl font-extrabold text-center text-clr-sky-darkest mb-4", children: "One Platform, Many Solutions" }),
      /* @__PURE__ */ jsx9("p", { className: "text-lg text-clr-sky-base text-center max-w-2xl mx-auto mb-12", children: "From ad-hoc, and entry-collar scenarios to leadership and niche roles, SmartyoZ solves all your hiring needs." }),
      /* @__PURE__ */ jsx9("div", { className: "grid md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsx9(FeatureCard_default, { feature: solution, useDarkBackground: index % 2 === 1 }, solution.title)) })
    ] }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 sm:py-24 bg-clr-sky-darkest text-clr-sky-white", children: /* @__PURE__ */ jsxs8("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-3xl sm:text-4xl font-extrabold mb-4", children: "Fully Integrated At Every Step" }),
      /* @__PURE__ */ jsx9("p", { className: "text-lg text-clr-sky-light max-w-2xl mx-auto mb-12", children: "We offer 50+ integrations with job boards, assessments, communication tools & background verification providers." }),
      /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6 mb-12", children: INTEGRATION_LOGOS.map((logo) => /* @__PURE__ */ jsx9("div", { className: "bg-clr-sky-dark hover:bg-clr-sky-base p-4 rounded-lg flex items-center justify-center aspect-square transition-colors shadow-md", title: logo.name, children: /* @__PURE__ */ jsx9("span", { className: "text-xl font-bold text-clr-sky-white", children: logo.placeholder }) }, logo.name)) }),
      /* @__PURE__ */ jsx9(
        Link5,
        {
          to: "/features#integrations",
          className: "inline-block bg-clr-sky-base hover:bg-clr-sky-dark text-clr-sky-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition-transform duration-150 hover:scale-105",
          children: "Explore Integrations"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 sm:py-24 bg-gradient-to-b from-clr-sky-white to-clr-sky-light", children: /* @__PURE__ */ jsxs8("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-3xl sm:text-4xl font-extrabold text-clr-sky-darkest mb-4", children: "Globally Compliant and Deployed Across Countries" }),
      /* @__PURE__ */ jsx9("p", { className: "text-lg text-clr-sky-dark max-w-2xl mx-auto mb-12", children: "A complete platform that can handle even complex use cases. Stringent processes ensure multiple geographies." }),
      /* @__PURE__ */ jsx9("div", { className: "flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-6", children: ["ISO 27001", "GDPR", "SOC 2", "CCPA"].map((item) => /* @__PURE__ */ jsxs8("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx9("div", { className: "bg-clr-sky-base text-clr-sky-white p-4 rounded-full mb-2 shadow-md", children: /* @__PURE__ */ jsx9("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx9("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }) }),
        /* @__PURE__ */ jsx9("span", { className: "text-sm font-medium text-clr-sky-darkest", children: item })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 sm:py-24 bg-clr-sky-base", children: /* @__PURE__ */ jsxs8("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-3xl sm:text-4xl font-extrabold text-center text-clr-sky-white mb-12", children: "What Our Clients Say" }),
      /* @__PURE__ */ jsx9("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx9(TestimonialCard_default, { testimonial, useDarkBackground: index % 2 === 0 }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx9(
      CallToAction_default,
      {
        title: "Join 100+ of the world's top enterprises",
        subtitle: "Learn how SmartyoZ can synergize the hiring experiences of all stakeholders.",
        buttonText: "Request Demo",
        buttonLink: "/request-demo",
        bgColor: "bg-gradient-to-r from-clr-sky-light to-clr-sky-base",
        textColor: "text-clr-sky-white",
        buttonClassName: "bg-clr-sky-darkest text-clr-sky-white hover:bg-clr-sky-dark"
      }
    ),
    /* @__PURE__ */ jsx9("div", { className: "py-8 bg-clr-sky-darkest", children: /* @__PURE__ */ jsx9(
      LogoCloud_default,
      {
        logos: DEFAULT_CLIENT_LOGOS.slice(0, 10).sort(() => 0.5 - Math.random()),
        className: "bg-clr-sky-darkest",
        logoTextClassName: "text-clr-sky-light"
      }
    ) })
  ] });
};
var HomePage_default = HomePage;

// components/PageShell.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var PageShell = ({ title, children, className, titleClassName }) => {
  return /* @__PURE__ */ jsxs9("div", { className: `py-16 sm:py-20 ${className || ""}`, children: [
    /* @__PURE__ */ jsx10("header", { className: "mb-10 sm:mb-14 text-center", children: /* @__PURE__ */ jsx10("h1", { className: `text-4xl sm:text-5xl font-extrabold ${titleClassName || "text-clr-sky-darkest"}`, children: title }) }),
    /* @__PURE__ */ jsx10("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children })
  ] });
};
var PageShell_default = PageShell;

// pages/FeaturesPage.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var featuresData = [
  {
    icon: /* @__PURE__ */ jsx11(CheckIcon, { className: "text-clr-sky-white" }),
    // Icon color for dark card
    title: "AI-Powered Sourcing",
    description: "Automatically find the best candidates from multiple job boards, social media, and your internal database using advanced AI algorithms.",
    imageUrl: "./images/sourcing.jpeg"
  },
  {
    icon: /* @__PURE__ */ jsx11(CheckIcon, { className: "text-clr-sky-white" }),
    title: "Automated Screening",
    description: "Save time by automating the initial screening process. Our AI ranks candidates based on job requirements and your custom criteria.",
    imageUrl: "./images/screening.jpeg"
  },
  {
    icon: /* @__PURE__ */ jsx11(CheckIcon, { className: "text-clr-sky-white" }),
    title: "Collaborative Hiring",
    description: "Involve your entire team in the hiring process with shared candidate pools, feedback tools, and real-time updates.",
    imageUrl: "./images/collab.jpeg"
  },
  {
    icon: /* @__PURE__ */ jsx11(CheckIcon, { className: "text-clr-sky-white" }),
    title: "Advanced Analytics",
    description: "Gain insights into your hiring pipeline with comprehensive analytics and reporting. Track key metrics and optimize your process.",
    imageUrl: "./images/analytics.jpeg"
  },
  {
    icon: /* @__PURE__ */ jsx11(CheckIcon, { className: "text-clr-sky-white" }),
    title: "Seamless Integrations",
    description: "Connect with your favorite HR tools, calendars, and communication platforms for a smooth workflow.",
    imageUrl: "./images/integration.jpeg"
  },
  {
    icon: /* @__PURE__ */ jsx11(CheckIcon, { className: "text-clr-sky-white" }),
    title: "Candidate Engagement",
    description: "Keep candidates informed and engaged throughout the process with automated communication and a branded career portal.",
    imageUrl: "./images/candidate.jpeg"
  }
];
var FeaturesPage = () => {
  return /* @__PURE__ */ jsxs10(PageShell_default, { title: "Our Powerful Features", className: "bg-clr-sky-white text-clr-sky-darkest", titleClassName: "text-clr-sky-darkest", children: [
    /* @__PURE__ */ jsx11("p", { className: "text-center text-lg text-clr-sky-base max-w-3xl mx-auto mb-12", children: "Discover how SmartyoZ's comprehensive suite of features can revolutionize your hiring process, making it faster, smarter, and more efficient." }),
    /* @__PURE__ */ jsx11("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: featuresData.map((feature, index) => (
      // Alternate dark and light cards for visual rhythm
      /* @__PURE__ */ jsx11(
        FeatureCard_default,
        {
          feature,
          useDarkBackground: index % 2 !== 0
        },
        feature.title
      )
    )) }),
    /* @__PURE__ */ jsxs10("section", { id: "integrations", className: "mt-16 pt-12 border-t border-clr-sky-light", children: [
      /* @__PURE__ */ jsx11("h2", { className: "text-3xl font-bold text-clr-sky-darkest text-center mb-8", children: "Seamless Integrations" }),
      /* @__PURE__ */ jsx11("p", { className: "text-center text-lg text-clr-sky-base max-w-2xl mx-auto mb-10", children: "Connect with your existing tools effortlessly. SmartyoZ integrates with a wide range of HR systems, job boards, assessment tools, and communication platforms." }),
      /* @__PURE__ */ jsx11("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto", children: ["Google Calendar", "Outlook Calendar", "Slack", "Microsoft Teams", "Zoom", "LinkedIn", "Indeed", "Workday", "SAP SuccessFactors", "Greenhouse"].map((tool) => /* @__PURE__ */ jsx11("div", { className: "bg-clr-sky-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center text-center border border-clr-sky-light", children: /* @__PURE__ */ jsx11("span", { className: "text-sm font-medium text-clr-sky-darkest", children: tool }) }, tool)) })
    ] })
  ] });
};
var FeaturesPage_default = FeaturesPage;

// components/PricingCard.tsx
import { Link as Link6 } from "react-router-dom";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var PricingCard = ({ plan }) => {
  const isPopular = plan.isPopular;
  const cardBg = isPopular ? "bg-clr-sky-base" : "bg-clr-sky-white";
  const textColor = isPopular ? "text-clr-sky-white" : "text-clr-sky-darkest";
  const priceColor = isPopular ? "text-clr-sky-white" : "text-clr-sky-darkest";
  const frequencyTextColor = isPopular ? "text-clr-sky-light" : "text-clr-sky-dark";
  const featureTextColor = isPopular ? "text-clr-sky-white opacity-90" : "text-clr-sky-dark";
  const featureIconColor = isPopular ? "text-clr-sky-white" : "text-clr-sky-base";
  const borderColor = isPopular ? "border-clr-sky-light ring-2 ring-clr-sky-light" : "border-clr-sky-light";
  const popularBadgeBg = "bg-clr-sky-darkest";
  const popularBadgeText = "text-clr-sky-white";
  const ctaBaseStyle = "mt-8 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-150 shadow-md hover:shadow-lg";
  const ctaPopularStyle = `${ctaBaseStyle} bg-clr-sky-white text-clr-sky-darkest hover:bg-clr-sky-light`;
  const ctaDefaultStyle = `${ctaBaseStyle} bg-clr-sky-darkest text-clr-sky-white hover:bg-clr-sky-dark`;
  return /* @__PURE__ */ jsxs11("div", { className: `rounded-lg p-6 flex flex-col relative ${cardBg} ${borderColor} shadow-xl`, children: [
    isPopular && /* @__PURE__ */ jsx12("div", { className: "absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx12("span", { className: `${popularBadgeBg} ${popularBadgeText} text-xs font-semibold px-3 py-1 rounded-full uppercase shadow-lg`, children: "Popular" }) }),
    /* @__PURE__ */ jsx12("h3", { className: `text-2xl font-semibold ${textColor}`, children: plan.name }),
    /* @__PURE__ */ jsxs11("p", { className: "mt-2", children: [
      /* @__PURE__ */ jsx12("span", { className: `text-4xl font-extrabold ${priceColor}`, children: plan.price }),
      /* @__PURE__ */ jsxs11("span", { className: `${frequencyTextColor}`, children: [
        "/",
        plan.frequency
      ] })
    ] }),
    /* @__PURE__ */ jsx12("ul", { className: "mt-6 space-y-3 flex-grow", children: plan.features.map((feature, index) => /* @__PURE__ */ jsxs11("li", { className: "flex items-start", children: [
      /* @__PURE__ */ jsx12(CheckIcon, { className: `${featureIconColor} mr-2 flex-shrink-0 mt-1` }),
      /* @__PURE__ */ jsx12("span", { className: `${featureTextColor}`, children: feature })
    ] }, index)) }),
    /* @__PURE__ */ jsx12(
      Link6,
      {
        to: plan.ctaLink,
        className: isPopular ? ctaPopularStyle : ctaDefaultStyle,
        children: plan.ctaText
      }
    )
  ] });
};
var PricingCard_default = PricingCard;

// pages/PricingPage.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var plans = [
  {
    name: "Starter",
    price: "$49",
    frequency: "month",
    features: [
      "Up to 5 active jobs",
      "Basic candidate sourcing",
      "Standard reporting",
      "Email support"
    ],
    ctaText: "Get Started",
    ctaLink: "/request-demo?plan=starter"
  },
  {
    name: "Professional",
    price: "$99",
    frequency: "month",
    features: [
      "Up to 20 active jobs",
      "AI-powered sourcing",
      "Advanced reporting & analytics",
      "Collaborative hiring tools",
      "Priority email support"
    ],
    isPopular: true,
    ctaText: "Choose Plan",
    ctaLink: "/request-demo?plan=professional"
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "year",
    features: [
      "Unlimited active jobs",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security features",
      "24/7 premium support",
      "Custom branding"
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact?inquiry=enterprise"
  }
];
var PricingPage = () => {
  return /* @__PURE__ */ jsxs12(
    PageShell_default,
    {
      title: "Flexible Pricing Plans",
      className: "bg-gradient-to-b from-clr-sky-white via-clr-sky-light to-clr-sky-base text-clr-sky-darkest",
      titleClassName: "text-clr-sky-darkest",
      children: [
        /* @__PURE__ */ jsx13("p", { className: "text-center text-lg text-clr-sky-dark max-w-3xl mx-auto mb-12", children: "Choose the plan that best fits your hiring needs with SmartyoZ. All plans come with our core platform features, with options to scale as you grow." }),
        /* @__PURE__ */ jsx13("div", { className: "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch", children: plans.map((plan) => /* @__PURE__ */ jsx13(PricingCard_default, { plan }, plan.name)) }),
        /* @__PURE__ */ jsxs12("div", { className: "mt-16 text-center", children: [
          /* @__PURE__ */ jsx13("h3", { className: "text-2xl font-semibold text-clr-sky-darkest mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxs12("div", { className: "max-w-2xl mx-auto text-left space-y-6", children: [
            /* @__PURE__ */ jsxs12("div", { className: "p-6 bg-clr-sky-white rounded-lg border border-clr-sky-light shadow-lg", children: [
              /* @__PURE__ */ jsx13("h4", { className: "font-semibold text-clr-sky-darkest text-lg", children: "Can I try before I buy?" }),
              /* @__PURE__ */ jsxs12("p", { className: "text-clr-sky-dark mt-1", children: [
                "Yes! We offer a personalized demo to showcase how SmartyoZ can meet your specific needs. ",
                /* @__PURE__ */ jsx13("a", { href: "/request-demo", className: "text-clr-sky-base hover:text-clr-sky-dark font-medium", children: "Request a demo today." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs12("div", { className: "p-6 bg-clr-sky-white rounded-lg border border-clr-sky-light shadow-lg", children: [
              /* @__PURE__ */ jsx13("h4", { className: "font-semibold text-clr-sky-darkest text-lg", children: "What if I need more features?" }),
              /* @__PURE__ */ jsx13("p", { className: "text-clr-sky-dark mt-1", children: "Our Enterprise plan is fully customizable. Contact our sales team to discuss your requirements." })
            ] }),
            /* @__PURE__ */ jsxs12("div", { className: "p-6 bg-clr-sky-white rounded-lg border border-clr-sky-light shadow-lg", children: [
              /* @__PURE__ */ jsx13("h4", { className: "font-semibold text-clr-sky-darkest text-lg", children: "How does billing work?" }),
              /* @__PURE__ */ jsx13("p", { className: "text-clr-sky-dark mt-1", children: "Starter and Professional plans are billed monthly. Enterprise plans are typically billed annually." })
            ] })
          ] })
        ] })
      ]
    }
  );
};
var PricingPage_default = PricingPage;

// pages/AboutUsPage.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
var teamMembers = [
  { name: "Mr. Kesan", role: "CEO & Founder", imageUrl: "https://picsum.photos/seed/alice/200/200" },
  { name: "Mr.Nathan", role: "Chief Technology Officer", imageUrl: "https://picsum.photos/seed/bob/200/200" },
  { name: "Mr.Kumar", role: "Head of Product", imageUrl: "https://picsum.photos/seed/carol/200/200" },
  { name: "Mr.Mohamed", role: "Head of AI", imageUrl: "https://picsum.photos/seed/david/200/200" }
];
var AboutUsPage = () => {
  return /* @__PURE__ */ jsx14(PageShell_default, { title: `About ${COMPANY_NAME}`, className: "bg-clr-sky-white text-clr-sky-darkest", titleClassName: "text-clr-sky-darkest", children: /* @__PURE__ */ jsxs13("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs13("section", { className: "mb-12 p-8 bg-clr-sky-white rounded-lg shadow-xl border border-clr-sky-light", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-3xl font-bold text-clr-sky-darkest mb-4 text-center", children: "Our Mission" }),
      /* @__PURE__ */ jsxs13("p", { className: "text-lg text-clr-sky-dark leading-relaxed text-center", children: [
        "At ",
        COMPANY_NAME,
        ", our mission is to revolutionize the hiring landscape by leveraging cutting-edge AI and automation. We empower organizations to find, attract, and hire top talent faster and more efficiently, while ensuring a seamless and positive experience for both recruiters and candidates. We believe that the right people are the key to any successful business, and we're dedicated to making the process of connecting them with the right opportunities as intelligent and effortless as possible."
      ] })
    ] }),
    /* @__PURE__ */ jsx14("section", { className: "mb-12 p-8 bg-clr-sky-darkest text-clr-sky-white rounded-lg shadow-xl border border-clr-sky-dark", children: /* @__PURE__ */ jsxs13("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx14("h2", { className: "text-3xl font-bold text-clr-sky-white mb-4", children: "Our Vision" }),
        /* @__PURE__ */ jsx14("p", { className: "text-lg text-clr-sky-white opacity-80 leading-relaxed mb-4", children: "We envision a future where hiring is not a chore but a strategic advantage. A future where AI augments human intuition, data drives decisions, and every hiring manager can build their dream team with confidence and precision." }),
        /* @__PURE__ */ jsx14("h2", { className: "text-3xl font-bold text-clr-sky-white mb-4", children: "Our Values" }),
        /* @__PURE__ */ jsxs13("ul", { className: "list-disc list-inside text-lg text-clr-sky-white opacity-80 space-y-2", children: [
          /* @__PURE__ */ jsx14("li", { children: "Innovation at Core" }),
          /* @__PURE__ */ jsx14("li", { children: "Customer-Centricity" }),
          /* @__PURE__ */ jsx14("li", { children: "Integrity and Transparency" }),
          /* @__PURE__ */ jsx14("li", { children: "Empowering People" }),
          /* @__PURE__ */ jsx14("li", { children: "Excellence in Execution" })
        ] })
      ] }),
      /* @__PURE__ */ jsx14("div", { children: /* @__PURE__ */ jsx14("img", { src: "./images/mission.png", alt: "Our Team", className: "rounded-lg shadow-xl border border-clr-sky-dark" }) })
    ] }) }),
    /* @__PURE__ */ jsxs13("section", { className: "p-8 bg-clr-sky-white rounded-lg shadow-xl border border-clr-sky-light", children: [
      /* @__PURE__ */ jsx14("h2", { className: "text-3xl font-bold text-clr-sky-darkest mb-8 text-center", children: "Meet Our Team" }),
      /* @__PURE__ */ jsx14("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxs13("div", { className: `${index % 2 === 0 ? "bg-clr-sky-white text-clr-sky-darkest" : "bg-clr-sky-darkest text-clr-sky-white"} p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow border ${index % 2 === 0 ? "border-clr-sky-light" : "border-clr-sky-dark"}`, children: [
        /* @__PURE__ */ jsx14("img", { src: member.imageUrl, alt: member.name, className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover" }),
        /* @__PURE__ */ jsx14("h3", { className: `text-xl font-semibold ${index % 2 === 0 ? "text-clr-sky-darkest" : "text-clr-sky-white"}`, children: member.name }),
        /* @__PURE__ */ jsx14("p", { className: `${index % 2 === 0 ? "text-clr-sky-base" : "text-clr-sky-light"}`, children: member.role })
      ] }, member.name)) })
    ] }),
    
  ] }) });
};
var AboutUsPage_default = AboutUsPage;

// pages/ContactUsPage.tsx
import { useState as useState2 } from "react";
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
var ContactUsPage = () => {
  const [formData, setFormData] = useState2({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState2(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5e3);
  };
  return /* @__PURE__ */ jsx15(PageShell_default, { title: "Get In Touch", className: "bg-clr-sky-white text-clr-sky-darkest", titleClassName: "text-clr-sky-darkest", children: /* @__PURE__ */ jsxs14("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs14("p", { className: "text-center text-lg text-clr-sky-base mb-10", children: [
      "Have questions or want to learn more about ",
      COMPANY_NAME,
      "? We'd love to hear from you. Fill out the form below or reach out to us directly."
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: "grid md:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsxs14("div", { className: "bg-clr-sky-white p-8 rounded-lg shadow-xl border border-clr-sky-light", children: [
        /* @__PURE__ */ jsx15("h2", { className: "text-2xl font-semibold text-clr-sky-darkest mb-6", children: "Send us a message" }),
        isSubmitted && /* @__PURE__ */ jsx15("div", { className: "mb-4 p-3 bg-clr-sky-base bg-opacity-20 text-clr-sky-dark border border-clr-sky-base rounded-md", children: "Thank you for your message! We'll get back to you soon." }),
        /* @__PURE__ */ jsxs14("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx15("label", { htmlFor: "name", className: "block text-sm font-medium text-clr-sky-dark", children: "Full Name" }),
            /* @__PURE__ */ jsx15(
              "input",
              {
                type: "text",
                name: "name",
                id: "name",
                value: formData.name,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base sm:text-sm text-clr-sky-darkest placeholder-clr-sky-dark"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx15("label", { htmlFor: "email", className: "block text-sm font-medium text-clr-sky-dark", children: "Email Address" }),
            /* @__PURE__ */ jsx15(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                value: formData.email,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base sm:text-sm text-clr-sky-darkest placeholder-clr-sky-dark"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx15("label", { htmlFor: "subject", className: "block text-sm font-medium text-clr-sky-dark", children: "Subject" }),
            /* @__PURE__ */ jsx15(
              "input",
              {
                type: "text",
                name: "subject",
                id: "subject",
                value: formData.subject,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base sm:text-sm text-clr-sky-darkest placeholder-clr-sky-dark"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx15("label", { htmlFor: "message", className: "block text-sm font-medium text-clr-sky-dark", children: "Message" }),
            /* @__PURE__ */ jsx15(
              "textarea",
              {
                name: "message",
                id: "message",
                rows: 4,
                value: formData.message,
                onChange: handleChange,
                required: true,
                className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base sm:text-sm text-clr-sky-darkest placeholder-clr-sky-dark"
              }
            )
          ] }),
          /* @__PURE__ */ jsx15("div", { children: /* @__PURE__ */ jsx15(
            "button",
            {
              type: "submit",
              className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-clr-sky-white bg-clr-sky-base hover:bg-clr-sky-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clr-sky-base",
              children: "Send Message"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "bg-clr-sky-darkest text-clr-sky-white p-8 rounded-lg shadow-xl border border-clr-sky-dark", children: [
        /* @__PURE__ */ jsx15("h2", { className: "text-2xl font-semibold text-clr-sky-white mb-6", children: "Contact Information" }),
        /* @__PURE__ */ jsxs14("div", { className: "space-y-4 text-clr-sky-light", children: [
          /* @__PURE__ */ jsxs14("p", { children: [
            /* @__PURE__ */ jsx15("strong", { children: "Address:" }),
            /* @__PURE__ */ jsx15("br", {}),
            "123 Innovation Drive",
            /* @__PURE__ */ jsx15("br", {}),
            "Technopark, Sholinganallur, Chennai, Tamilnadu"
          ] }),
          /* @__PURE__ */ jsxs14("p", { children: [
            /* @__PURE__ */ jsx15("strong", { children: "Email:" }),
            " ",
            /* @__PURE__ */ jsxs14("a", { href: `mailto:info@${COMPANY_NAME.toLowerCase()}.com`, className: "text-clr-sky-white hover:text-clr-sky-light", children: [
              "info@",
              COMPANY_NAME.toLowerCase(),
              ".com"
            ] })
          ] }),
          /* @__PURE__ */ jsxs14("p", { children: [
            /* @__PURE__ */ jsx15("strong", { children: "Phone:" }),
            " ",
            /* @__PURE__ */ jsx15("a", { href: "tel:+91 9876543210", className: "text-clr-sky-white hover:text-clr-sky-light", children: "+91 98765 43210" })
          ] }),
          /* @__PURE__ */ jsxs14("p", { children: [
            /* @__PURE__ */ jsx15("strong", { children: "Business Hours:" }),
            /* @__PURE__ */ jsx15("br", {}),
            "Monday - Friday: 9:00 AM - 6:00 PM (PST)"
          ] })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx15("h3", { className: "text-lg font-semibold text-clr-sky-white mb-2", children: "Connect with us" }),
          /* @__PURE__ */ jsxs14("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsx15("a", { href: "#", className: "text-clr-sky-light hover:text-clr-sky-white", children: "Facebook" }),
            /* @__PURE__ */ jsx15("a", { href: "#", className: "text-clr-sky-light hover:text-clr-sky-white", children: "Twitter" }),
            /* @__PURE__ */ jsx15("a", { href: "#", className: "text-clr-sky-light hover:text-clr-sky-white", children: "LinkedIn" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
var ContactUsPage_default = ContactUsPage;

// pages/RequestDemoPage.tsx
import { useState as useState3 } from "react";
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
var RequestDemoPage = () => {
  const [formData, setFormData] = useState3({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    phoneNumber: "",
    companySize: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState3(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      jobTitle: "",
      phoneNumber: "",
      companySize: "",
      message: ""
    });
    setTimeout(() => setIsSubmitted(false), 5e3);
  };
  return /* @__PURE__ */ jsx16(
    PageShell_default,
    {
      title: "Request a Personalized Demo",
      className: "bg-gradient-to-br from-clr-sky-light via-clr-sky-base to-clr-sky-dark text-clr-sky-white",
      titleClassName: "text-clr-sky-white",
      children: /* @__PURE__ */ jsxs15("div", { className: "max-w-2xl mx-auto bg-clr-sky-white text-clr-sky-darkest p-8 sm:p-10 rounded-xl shadow-2xl border border-clr-sky-light", children: [
        /* @__PURE__ */ jsxs15("p", { className: "text-center text-lg text-clr-sky-dark mb-8", children: [
          "See ",
          COMPANY_NAME,
          " in action! Fill out the form below, and one of our experts will contact you to schedule a demo tailored to your organization's needs."
        ] }),
        isSubmitted && /* @__PURE__ */ jsx16("div", { className: "mb-6 p-4 bg-clr-sky-base bg-opacity-20 text-clr-sky-dark border border-clr-sky-base rounded-md text-center", children: "Thank you for your request! We'll be in touch shortly to schedule your demo." }),
        /* @__PURE__ */ jsxs15("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsxs15("label", { htmlFor: "fullName", className: "block text-sm font-medium text-clr-sky-dark", children: [
              "Full Name ",
              /* @__PURE__ */ jsx16("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx16("input", { type: "text", name: "fullName", id: "fullName", value: formData.fullName, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest placeholder-clr-sky-dark" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsxs15("label", { htmlFor: "workEmail", className: "block text-sm font-medium text-clr-sky-dark", children: [
              "Work Email ",
              /* @__PURE__ */ jsx16("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx16("input", { type: "email", name: "workEmail", id: "workEmail", value: formData.workEmail, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest placeholder-clr-sky-dark" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsxs15("label", { htmlFor: "companyName", className: "block text-sm font-medium text-clr-sky-dark", children: [
              "Company Name ",
              /* @__PURE__ */ jsx16("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx16("input", { type: "text", name: "companyName", id: "companyName", value: formData.companyName, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest placeholder-clr-sky-dark" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsxs15("label", { htmlFor: "jobTitle", className: "block text-sm font-medium text-clr-sky-dark", children: [
              "Job Title ",
              /* @__PURE__ */ jsx16("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx16("input", { type: "text", name: "jobTitle", id: "jobTitle", value: formData.jobTitle, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest placeholder-clr-sky-dark" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsx16("label", { htmlFor: "phoneNumber", className: "block text-sm font-medium text-clr-sky-dark", children: "Phone Number" }),
            /* @__PURE__ */ jsx16("input", { type: "tel", name: "phoneNumber", id: "phoneNumber", value: formData.phoneNumber, onChange: handleChange, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest placeholder-clr-sky-dark" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsxs15("label", { htmlFor: "companySize", className: "block text-sm font-medium text-clr-sky-dark", children: [
              "Company Size ",
              /* @__PURE__ */ jsx16("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxs15("select", { name: "companySize", id: "companySize", value: formData.companySize, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest appearance-none", children: [
              /* @__PURE__ */ jsx16("option", { value: "", className: "text-clr-sky-dark", children: "Select company size" }),
              /* @__PURE__ */ jsx16("option", { value: "1-50", className: "text-clr-sky-darkest", children: "1-50 employees" }),
              /* @__PURE__ */ jsx16("option", { value: "51-200", className: "text-clr-sky-darkest", children: "51-200 employees" }),
              /* @__PURE__ */ jsx16("option", { value: "201-1000", className: "text-clr-sky-darkest", children: "201-1000 employees" }),
              /* @__PURE__ */ jsx16("option", { value: "1000+", className: "text-clr-sky-darkest", children: "1000+ employees" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs15("div", { children: [
            /* @__PURE__ */ jsx16("label", { htmlFor: "message", className: "block text-sm font-medium text-clr-sky-dark", children: "Anything specific you'd like to see? (Optional)" }),
            /* @__PURE__ */ jsx16("textarea", { name: "message", id: "message", rows: 3, value: formData.message, onChange: handleChange, className: "mt-1 block w-full px-3 py-2 bg-clr-sky-white border border-clr-sky-light rounded-md shadow-sm focus:outline-none focus:ring-clr-sky-base focus:border-clr-sky-base text-clr-sky-darkest placeholder-clr-sky-dark" })
          ] }),
          /* @__PURE__ */ jsx16("div", { children: /* @__PURE__ */ jsx16(
            "button",
            {
              type: "submit",
              className: "w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-clr-sky-white bg-clr-sky-base hover:bg-clr-sky-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-clr-sky-base transition-colors duration-150",
              children: "Submit Request"
            }
          ) }),
          /* @__PURE__ */ jsxs15("p", { className: "text-xs text-clr-sky-dark text-center", children: [
            "By submitting this form, you agree to our ",
            /* @__PURE__ */ jsx16("a", { href: "#", className: "underline hover:text-clr-sky-darkest", children: "Privacy Policy" }),
            " and ",
            /* @__PURE__ */ jsx16("a", { href: "#", className: "underline hover:text-clr-sky-darkest", children: "Terms of Service" }),
            "."
          ] })
        ] })
      ] })
    }
  );
};
var RequestDemoPage_default = RequestDemoPage;

// App.tsx
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
var App = () => {
  const [showCookieBanner, setShowCookieBanner] = useState4(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);
  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };
  const handleDeclineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowCookieBanner(false);
  };
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" }
  ];
  return /* @__PURE__ */ jsx17(HashRouter, { children: /* @__PURE__ */ jsxs16("div", { className: "flex flex-col min-h-screen bg-clr-sky-white", children: [
    /* @__PURE__ */ jsx17(Navbar_default, { navLinks }),
    /* @__PURE__ */ jsx17("main", { className: "flex-grow", children: /* @__PURE__ */ jsxs16(Routes, { children: [
      /* @__PURE__ */ jsx17(Route, { path: "/", element: /* @__PURE__ */ jsx17(HomePage_default, {}) }),
      /* @__PURE__ */ jsx17(Route, { path: "/features", element: /* @__PURE__ */ jsx17(FeaturesPage_default, {}) }),
      /* @__PURE__ */ jsx17(Route, { path: "/pricing", element: /* @__PURE__ */ jsx17(PricingPage_default, {}) }),
      /* @__PURE__ */ jsx17(Route, { path: "/about", element: /* @__PURE__ */ jsx17(AboutUsPage_default, {}) }),
      /* @__PURE__ */ jsx17(Route, { path: "/contact", element: /* @__PURE__ */ jsx17(ContactUsPage_default, {}) }),
      /* @__PURE__ */ jsx17(Route, { path: "/request-demo", element: /* @__PURE__ */ jsx17(RequestDemoPage_default, {}) }),
      /* @__PURE__ */ jsx17(Route, { path: "*", element: /* @__PURE__ */ jsx17(Navigate, { to: "/", replace: true }) })
    ] }) }),
    /* @__PURE__ */ jsx17(Footer_default, {}),
    showCookieBanner && /* @__PURE__ */ jsx17("div", { className: "fixed bottom-0 left-0 right-0 bg-clr-sky-darkest text-clr-sky-white p-4 shadow-lg z-50 border-t border-clr-sky-dark", children: /* @__PURE__ */ jsxs16("div", { className: "container mx-auto flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsx17("p", { className: "text-sm mb-2 sm:mb-0", children: "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies." }),
      /* @__PURE__ */ jsxs16("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsx17(
          "button",
          {
            onClick: handleAcceptCookies,
            className: "bg-clr-sky-base hover:bg-clr-sky-dark text-clr-sky-white font-semibold py-2 px-4 rounded text-sm transition-colors duration-150",
            children: "Accept"
          }
        ),
        /* @__PURE__ */ jsx17(
          "button",
          {
            onClick: handleDeclineCookies,
            className: "bg-clr-sky-light hover:bg-opacity-80 text-clr-sky-darkest font-semibold py-2 px-4 rounded text-sm transition-colors duration-150",
            children: "Decline"
          }
        )
      ] })
    ] }) })
  ] }) });
};
var App_default = App;

// index.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
var root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsx18(React6.StrictMode, { children: /* @__PURE__ */ jsx18(App_default, {}) })
);
