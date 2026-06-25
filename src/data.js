export const siteData = {
  site: {
    name: 'Isomero',
    tagline: 'Empowering teachers and students for a brighter future.',
    description: 'Supporting education and innovation.',
  },

  navigation: [
    {
      label: 'Programs',
      type: 'dropdown',
      to: '/programs',
      overviewLabel: 'All Programs',
      children: [
        { label: 'Materials for Learning', to: '/materials-for-learning' },
        { label: 'Education for Teachers', to: '/education-for-teachers' },
        { label: 'Support for Communities', to: '/support-for-communities' },
      ],
    },
    { label: 'Our Vision', to: '/our-vision' },
    { label: 'Our Team', to: '/our-team' },
    { label: 'Blog', to: '/blog' },
    { label: 'Donate', to: '/donate', highlight: true },
  ],

  home: {
    hero: {
      title: 'Empowering teachers and students for a brighter future.',
      subtitle: '',
      cta: { label: 'Our Vision', to: '/our-vision' },
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
    },

    editorial: {
      theme: 'light',
      title: 'Supporting education and innovation.',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image:
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80',
      imageAlt: 'Students in classroom',
    },

    programs: {
      theme: 'dark',
      title: 'Our Programs',
      items: [
        {
          slug: 'materials-for-learning',
          title: 'we lead people to learn so many things in IT and Software development',
          description:
            'Many educational materials in local languages are often out of date. We work with school leaders and teachers to create new materials in local languages.',
          image:
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
          cta: { label: 'Learn More', to: '/materials-for-learning' },
        },
        {
          slug: 'education-for-teachers',
          title: 'Continuing Education for Teachers',
          description:
            'We create bespoke continuing education programs to address the needs of teachers and their student communities.',
          image:
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
          cta: { label: 'Learn More', to: '/education-for-teachers' },
        },
        {
          slug: 'support-for-communities',
          title: 'Support for Communities',
          description:
            'Education happens within the context of a larger community. Our approach extends beyond the school to include families and local leaders.',
          image:
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
          cta: { label: 'Learn More', to: '/support-for-communities' },
        },
      ],
    },

    testimonial: {
      theme: 'black',
      quote:
        "With the support of Y'all, Isomero we're able to serve and to give the world our knowledge",
      author: 'Isomero Team',
      role: 'Principal Rule',
    },

    contact: {
      theme: 'light',
      title: 'Contact',
      subtitle: 'Feel free to contact us with any questions.',
      email: 'isomerobi@gmail.com',
      phone: '67908378',
      address: 'Rohero, No 12345',
      form: {
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'message', label: 'Message', type: 'textarea', required: true },
        ],
        submitLabel: 'Send',
        successMessage: 'Thank you! Your message has been sent.',
      },
    },
  },

  programs: {
    'materials-for-learning': {
      title: 'Materials for Learning',
      heroImage:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80',
      intro:
        'Many educational materials in local languages are often out of date. We work with school leaders and teachers to create new materials in local languages that reflect the needs of their students.',
      sections: [
        {
          title: 'Localized Content',
          text: 'We partner with educators to develop culturally relevant learning materials that resonate with students and their communities.',
        },
        {
          title: 'Open Resources',
          text: 'All materials we create are shared openly so schools everywhere can adapt and use them freely.',
        },
        {
          title: 'Program Video',
          videoURL: 'https://youtu.be/8x8-o5UUhow?si=nC_dp3wXw51rHBU3',
          videoURL: 'https://ik.imagekit.io/cy3dy3vcm/Isomero/arduino/VID_20260529_152614.mp4',
        },
        {
          title: 'Program Video',
          videoURL: 'https://youtu.be/8x8-o5UUhow?si=nC_dp3wXw51rHBU3',
        },
      ],
    },
    'education-for-teachers': {
      title: 'Education for Teachers',
      heroImage:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
      intro:
        'We create bespoke continuing education programs to address the needs of teachers and their student communities.',
      sections: [
        {
          title: 'Professional Development',
          text: 'Workshops and mentorship programs designed to help teachers grow their skills and confidence in the classroom.',
        },
        {
          title: 'Peer Learning',
          text: 'Teachers learn best from each other. We facilitate communities of practice across schools and regions.',
        },
      ],
    },
    'support-for-communities': {
      title: 'Support for Communities',
      heroImage:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80',
      intro:
        'Education happens within the context of a larger community. Our approach extends beyond the school to include families and local leaders.',
      sections: [
        {
          title: 'Family Engagement',
          text: 'We help schools build stronger partnerships with parents and caregivers to support learning at home.',
        },
        {
          title: 'Community Leadership',
          text: 'Local leaders play a vital role in sustaining educational progress. We equip them with tools and networks.',
        },
      ],
    },
  },

  programsOverview: {
    title: 'Our Programs',
    heroImage:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80',
    description:
      'Explore our initiatives designed to empower educators and students around the world.',
    items: [
      {
        title: 'Materials for Learning',
        to: '/materials-for-learning',
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
        video:'https://youtu.be/nJsaxe18D9I?si=N9fnu_AI4IzD25At',
      },
      {
        title: 'Education for Teachers',
        to: '/education-for-teachers',
        image:
          'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
      },
      {
        title: 'Support for Communities',
        to: '/support-for-communities',
        image:
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      },
    ],
  },

  vision: {
    title: 'Our Vision',
    hero: {
      title: 'Educators are innovators.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
    },
    paragraphs : [
    "ISOMERO BI TECHNOLOGIES est une entreprise spécialisée dans les technologies de l’information "+
    "et de la communication (TIC). Elle offre des services informatiques de pointe, des solutions "+
    "numériques innovantes, ainsi que des activités d’enseignement et de formation professionnelle.,"+
    "Ses activités principales s'articulent autour de plusieurs axes majeurs : les solutions numériques, "+
    "les infrastructures techniques, le commerce d'équipements et la formation professionnelle.,"+
    
    "Développement de logiciels et d’applications web et mobiles ; "+
    "Conception, maintenance et administration des systèmes et réseaux informatiques ; "+
    "Vente et fourniture d’équipements technologiques et de laboratoires ; "+
    "Enseignement, formation et accompagnement en transformation digitale."
],
    quote: {
      text: 'Education is the most powerful weapon which you can use to change the world.',
      author: 'Master of Scientist',
      role: ' Mentor',
    },
    cta: { label: 'Donate', to: '/donate' },
  },

  team: {
    title: 'Our Team',
    intro: 'Meet the people behind our mission to transform education.',
    members: [
      {
        name: 'IRUMVA Brice Berry,NININAHAZWE Jean Lionel,Kantore Jean Gildas',
        role: 'Executive Director',
        bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Isomero/team/team.png',
      },
      // {
      //   name: 'First Name Last Name',
      //   role: 'Program Director',
      //   bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
      //   image:
      //     'https://media.licdn.com/dms/image/v2/D5603AQGeVXGeEAcxYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726721792103?e=1784160000&v=beta&t=bcYGN_OaSdGdUaSuzyMCnLGFA9ZOoVhY7U46ikKQ7iQ',
      // },
      // {
      //   name: 'First Name Last Name',
      //   role: 'Community Lead',
      //   bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
      //   image:
      //     'https://media.licdn.com/dms/image/v2/D5603AQGY7wqzMZFulg/profile-displayphoto-shrink_800_800/B56ZSSs8hLHwAg-/0/1737628044457?e=1784160000&v=beta&t=mw8CDyxIbFpG2nwCOzPpvlnGXvFM3bAJo3JXVbmjyGs',
      // },
      // {
      //   name: 'First Name Last Name',
      //   role: 'Operations Manager',
      //   bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
      //   image:
      //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
      // },
    ],
  },

  blog: {
    title: 'Blog',
    posts: [
      {
        slug: 'blog-post-four',
        title: 'Blog Post Four',
        author: 'Guest User',
        date: 'March 15, 2026',
        excerpt:
          'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1434030216441-b6bbad806804?w=800&q=80',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
      {
        slug: 'blog-post-three',
        title: 'Blog Post Three',
        author: 'Guest User',
        date: 'February 28, 2026',
        excerpt:
          'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
      {
        slug: 'blog-post-two',
        title: 'Blog Post Two',
        author: 'Guest User',
        date: 'January 10, 2026',
        excerpt:
          'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1497633762263-8f9fb803b40a?w=800&q=80',
        content:
          'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      },
      {
        slug: 'blog-post-one',
        title: 'Blog Post One',
        author: 'Guest User',
        date: 'December 5, 2025',
        excerpt:
          'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
        content:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
      },
    ],
  },

  donate: {
    title: 'Donate',
    headline: 'Make a Difference',
    description:
      'Your contribution helps us empower teachers and students around the world. Every gift makes an impact.',
    amounts: [25, 50, 100, 250],
    customAmountLabel: 'Custom Amount',
    customAmountPlaceholder: 'Please enter an amount',
    submitLabel: 'Donate Now',
    successMessage: 'Thank you for your generous donation!',
  },

  footer: {
    organization: 'The Isomero Foundation',
    location: 'Rohero, No 13',
    links: [
      { label: 'Materials for Learning', to: '/materials-for-learning' },
      { label: 'Education for Teachers', to: '/education-for-teachers' },
      { label: 'Support for Communities', to: '/support-for-communities' },
    ],
  },
}

export default siteData