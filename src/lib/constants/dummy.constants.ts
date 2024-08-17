export type User = {
  id: number
  fullname: string
  email: string
  userProfile: UserProfile | null
  posts: Post[]
  lastSeen: Date | 'online' | null
}

export type UserProfile = {
  gender: string
  avatarUrl: string
  dateOfBirth: Date
  socials: Social[]
  jobTitle: string
  company: string
}

export type Social = {
  name: string
  icon: string
  url: string
}

export type Post = {
  id: number
  content: string
  images: string[]
  comments: PostComment[]
}

export type PostComment = {
  id: number
  content: string
  date: Date
  author: PostCommentAuthor
  replies: PostComment[]
}

export type PostCommentAuthor = {
  id: number
  fullname: string
  avatarUrl: string
}

export type Event = {
  id: number
  icon: string
  title: string
  description: string
  featuredImage: string
  participants: {
    id: number
    fullname: string
    avatarUrl: string
  }[]
}

export const USERS: User[] = [
  {
    id: 1,
    fullname: 'Kayleigh Bysouth',
    email: 'kayleigh.bysouth@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: 'Ui/UX Designer',
      company: 'Technovation',
      avatarUrl: '/assets/images/dummy/avatar1.png',
      dateOfBirth: new Date('1990-05-15'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 1,
        content: 'Excited to start my new project!',
        images: ['https://via.placeholder.com/300'],
        comments: [
          {
            id: 1,
            content: 'Good luck with your project!',
            date: new Date(),
            author: {
              id: 2,
              fullname: 'Jess Phillips MP',
              avatarUrl: '/assets/images/dummy/avatar2.png',
            },
            replies: [],
          },
        ],
      },
    ],
    lastSeen: new Date(new Date().setMinutes(new Date().getMinutes() - 2)), // 2 minutes ago
  },
  {
    id: 2,
    fullname: 'Jess Phillips MP',
    email: 'jess.phillips@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: 'Founder and CEO',
      company: 'Meetmax',
      avatarUrl: '/assets/images/dummy/avatar2.png',
      dateOfBirth: new Date('1985-06-10'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 2,
        content: 'Had a productive meeting today!',
        images: [],
        comments: [
          {
            id: 2,
            content: 'Glad to hear it!',
            date: new Date(),
            author: {
              id: 3,
              fullname: 'MP Eslam Hisham',
              avatarUrl: '/assets/images/dummy/avatar3.png',
            },
            replies: [
              {
                id: 3,
                content: 'Thanks!',
                date: new Date(),
                author: {
                  id: 2,
                  fullname: 'Jess Phillips MP',
                  avatarUrl: '/assets/images/dummy/avatar2.png',
                },
                replies: [],
              },
            ],
          },
        ],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 3,
    fullname: 'MP Eslam Hisham',
    email: 'eslam.hisham@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar3.png',
      dateOfBirth: new Date('1987-04-22'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 3,
        content: 'Looking forward to the weekend!',
        images: ['https://via.placeholder.com/300'],
        comments: [
          {
            id: 4,
            content: 'Same here!',
            date: new Date(),
            author: {
              id: 4,
              fullname: 'Levizja Vetvendos',
              avatarUrl: '/assets/images/dummy/avatar4.png',
            },
            replies: [],
          },
        ],
      },
    ],
    lastSeen: new Date(new Date().setHours(new Date().getHours() - 8)), // 8 minutes ago
  },
  {
    id: 4,
    fullname: 'Levizja Vetvendos',
    email: 'levizja.vetvendos@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar4.png',
      dateOfBirth: new Date('1983-02-14'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 4,
        content: 'Amazing sunset today!',
        images: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/400',
        ],
        comments: [],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 5,
    fullname: 'Afrim Konjufca',
    email: 'afrim.konjufca@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar5.png',
      dateOfBirth: new Date('1992-09-30'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 5,
        content: 'Just finished a great book!',
        images: [],
        comments: [
          {
            id: 5,
            content: 'Which one?',
            date: new Date(),
            author: {
              id: 6,
              fullname: 'Adayin Vetvendosje',
              avatarUrl: '/assets/images/dummy/avatar6.png',
            },
            replies: [],
          },
        ],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 6,
    fullname: 'Adayin Vetvendosje',
    email: 'adayin.vetvendosje@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar6.png',
      dateOfBirth: new Date('1990-03-21'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 6,
        content: 'Can’t wait for the holidays!',
        images: ['https://via.placeholder.com/300'],
        comments: [],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 7,
    fullname: 'Albini Vjosa',
    email: 'albini.vjosa@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar7.png',
      dateOfBirth: new Date('1991-07-11'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 7,
        content: 'Learning a new programming language!',
        images: [],
        comments: [
          {
            id: 6,
            content: 'Which one?',
            date: new Date(),
            author: {
              id: 8,
              fullname: 'Eduardo Ortega',
              avatarUrl: '/assets/images/dummy/avatar8.png',
            },
            replies: [],
          },
        ],
      },
    ],
    lastSeen: new Date(new Date().setMinutes(new Date().getMinutes() - 15)), // 15 minutes ago
  },
  {
    id: 8,
    fullname: 'Eduardo Ortega',
    email: 'eduardo.ortega@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar8.png',
      dateOfBirth: new Date('1985-11-05'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 8,
        content: 'Check out this cool photo I took!',
        images: ['https://via.placeholder.com/300'],
        comments: [],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 9,
    fullname: 'Yasin Kawakamu',
    email: 'yasin.kawakamu@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar9.png',
      dateOfBirth: new Date('1988-08-20'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 9,
        content: 'I’m feeling inspired today!',
        images: [],
        comments: [
          {
            id: 7,
            content: 'What’s inspiring you?',
            date: new Date(),
            author: {
              id: 10,
              fullname: 'Edilson De Carvalho',
              avatarUrl: '/assets/images/dummy/avatar10.png',
            },
            replies: [],
          },
        ],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 10,
    fullname: 'Edilson De Carvalho',
    email: 'edilson.carvalho@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar10.png',
      dateOfBirth: new Date('1993-12-03'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 10,
        content: 'Had a great workout today!',
        images: [],
        comments: [],
      },
    ],
    lastSeen: 'online',
  },
  {
    id: 11,
    fullname: 'Albini Vjosa Glauki',
    email: 'albini.glauki@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '/assets/images/dummy/avatar11.png',
      dateOfBirth: new Date('1989-04-01'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [],
    lastSeen: 'online',
  },
  {
    id: 12,
    fullname: 'Muhamet Murteza',
    email: 'muhamet.murteza@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '',
      dateOfBirth: new Date('1992-10-22'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [],
    lastSeen: new Date(new Date().setHours(new Date().getHours() - 2)), // 2 hours ago
  },
  {
    id: 13,
    fullname: 'Ose Antonio',
    email: 'jose.antonio@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '',
      dateOfBirth: new Date('1984-06-18'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [],
    lastSeen: new Date(new Date().setHours(new Date().getHours() - 2)), // 2 hours ago
  },
  {
    id: 14,
    fullname: 'Kujtim Rushiti',
    email: 'kujtim.rushiti@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '',
      dateOfBirth: new Date('1995-03-15'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [],
    lastSeen: 'online',
  },
  {
    id: 15,
    fullname: 'Astoja Ostojic',
    email: 'ostoja.ostojic@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '',
      dateOfBirth: new Date('1987-08-02'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [],
    lastSeen: 'online',
  },
  {
    id: 16,
    fullname: 'Xhevdet Cazimi',
    email: 'xhevdet.cazimi@example.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '',
      dateOfBirth: new Date('1991-01-09'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [],
    lastSeen: 'online',
  },
  {
    id: 17,
    fullname: 'Foysal Ahmed',
    email: 'test@foy.com',
    userProfile: {
      gender: 'male',
      jobTitle: '',
      company: '',
      avatarUrl: '',
      dateOfBirth: new Date('1995-09-10'),
      socials: [
        {
          name: 'Portfolio',
          icon: 'ExploreIcon',
          url: 'https://www.google.com',
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: 'https://www.instagram.com',
        },
      ],
    },
    posts: [
      {
        id: 17,
        content:
          'If you think adventure is dangerous, try routine, it’s lethal Paulo Coelho! Good morning all friends.',
        comments: [],
        images: [],
      },
    ],
    lastSeen: 'online',
  },
]

export const EVENTS: Event[] = [
  {
    id: 1,
    title: 'Graduation Ceremony',
    description: 'Join us for the graduation ceremony of the class of 2024!',
    icon: '/assets/images/dummy/book-icon.svg',
    featuredImage: '',
    participants: [],
  },
  {
    id: 1,
    title: 'Photography Ideas',
    description:
      'Reflections. Reflections work because they can create a sense of depth and drama.',
    icon: '/assets/images/dummy/camera-icon.svg',
    featuredImage: '',
    participants: [],
  },
]

export type Story = {
  id: number
  content: string
  author: {
    id: number
    fullname: string
    avatarUrl: string
  }
  date: Date
}

export const STORIES: Story[] = [
  {
    id: 1,
    content:
      'Today was a great day! I went to the park and enjoyed the sunshine.',
    author: {
      id: 1,
      fullname: 'John Doe',
      avatarUrl: '/assets/images/dummy/avatar1.png',
    },
    date: new Date('2023-10-01'),
  },
  {
    id: 2,
    content:
      'I just tried a new recipe for chocolate cake and it was delicious!',
    author: {
      id: 2,
      fullname: 'Jane Smith',
      avatarUrl: '/assets/images/dummy/avatar2.png',
    },
    date: new Date('2023-10-02'),
  },
  {
    id: 3,
    content: 'Visited the mountains last weekend. The view was breathtaking!',
    author: {
      id: 3,
      fullname: 'Alice Johnson',
      avatarUrl: '/assets/images/dummy/avatar3.png',
    },
    date: new Date('2023-10-03'),
  },
  {
    id: 4,
    content:
      'Attended a tech conference today. Learned a lot about AI and machine learning.',
    author: {
      id: 4,
      fullname: 'Bob Brown',
      avatarUrl: '/assets/images/dummy/avatar4.png',
    },
    date: new Date('2023-10-04'),
  },
  {
    id: 5,
    content:
      'Started a new workout routine this week. Feeling more energetic already!',
    author: {
      id: 5,
      fullname: 'Charlie Davis',
      avatarUrl: '/assets/images/dummy/avatar5.png',
    },
    date: new Date('2023-10-05'),
  },
  {
    id: 6,
    content: "Just finished reading 'The Great Gatsby'. Highly recommend it!",
    author: {
      id: 1,
      fullname: 'John Doe',
      avatarUrl: '/assets/images/dummy/avatar1.png',
    },
    date: new Date('2023-10-06'),
  },
  {
    id: 7,
    content: 'Visited an art exhibition today. The paintings were amazing!',
    author: {
      id: 2,
      fullname: 'Jane Smith',
      avatarUrl: '/assets/images/dummy/avatar2.png',
    },
    date: new Date('2023-10-07'),
  },
  {
    id: 8,
    content: 'Went to a music festival last night. The bands were fantastic!',
    author: {
      id: 3,
      fullname: 'Alice Johnson',
      avatarUrl: '/assets/images/dummy/avatar3.png',
    },
    date: new Date('2023-10-08'),
  },
  {
    id: 9,
    content:
      "Learned some new cooking tips from a friend. Can't wait to try them out!",
    author: {
      id: 4,
      fullname: 'Bob Brown',
      avatarUrl: '/assets/images/dummy/avatar4.png',
    },
    date: new Date('2023-10-09'),
  },
  {
    id: 10,
    content:
      'Spent the day gardening. My plants are looking healthier than ever!',
    author: {
      id: 5,
      fullname: 'Charlie Davis',
      avatarUrl: '/assets/images/dummy/avatar5.png',
    },
    date: new Date('2023-10-10'),
  },
]
