import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";


export const userf=[
  {
    id: "home",
    title: "Home",
    path: "/register"
  },
  {
    id: "features",
    title: "Resources",
    path: "/dashboard"
  },
  {
    id: "loan",
    title: "About",
    path: "/profile"
  },
  {
    id: "clients",
    title: "Sign in",
    path: "/registration"
  },
]
export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/"
  },
  {
    id: "features",
    title: "Resources",
    path: "/resources"
  },
  {
    id: "loan",
    title: "About",
    path: "/about"
  },
  {
    id:"loan",
    title:'Apply for loan',
    path :"/loan"
  }
  
  
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "On-campus support",
    content:
      "FeeFi provides on-campus support to students, including seminars, workshops, and counseling sessions, to help them make informed decisions about their education financing options.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Flexible repayment options",
    content:
      " FeeFi platform offers flexible repayment options, allowing students to customize their repayment plans based on their income after graduation. This ensures that students do not face a financial burden after graduation and can repay their loans without stress.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "FeeFi's AI-driven credit scoring helped me secure an affordable loan for my MBA program",
      name:"Sonia",
      title: "Student/MBA",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "FeeFi's user-friendly platform made the loan application process smooth and stress-free",
    name: "Abhishek",
    title: "Student/B.Tech",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "FeeFi's transparent fee structure and competitive interest rates saved me a lot of money",
    name: "Anirudh",
    title: "Student/MBBS",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];