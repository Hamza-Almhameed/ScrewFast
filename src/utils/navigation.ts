// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/ScrewFast/" },
  { name: "Products", url: "/ScrewFast/products" },
  { name: "Services", url: "/ScrewFast/services" },
  { name: "Blog", url: "/ScrewFast/blog" },
  { name: "Contact", url: "/ScrewFast/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/ScrewFast/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/ScrewFast/products" },
      { name: "Construction Services", url: "/ScrewFast/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/ScrewFast/" },
      { name: "Blog", url: "/ScrewFast/blog" },
      { name: "Careers", url: "/ScrewFast/" },
      { name: "Customers", url: "/ScrewFast/" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
