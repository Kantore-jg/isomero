/**
 * Fichier central de configuration du site.
 * Modifiez uniquement ce fichier pour mettre à jour le contenu.
 */

export const siteData = {
  site: {
    name: 'Lusaka',
    tagline: 'Empowering teachers and students for a brighter future.',
    description: 'Supporting education and innovation.',
  },

  navigation: [
    {
      label: 'Projects',
      type: 'dropdown',
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
          title: 'Materials for Learning',
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
        'With the support from Lusaka, we have been able to serve our students better than ever.',
      author: 'Alonzo F.',
      role: 'School Principal',
    },

    contact: {
      theme: 'light',
      title: 'Contact',
      subtitle: 'Feel free to contact us with any questions.',
      email: 'email@example.com',
      phone: '(555) 555-5555',
      address: '123 Demo Street\nNew York, NY 12345',
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

  projects: {
    title: 'Materials for Learning',
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
    paragraphs: [
      'Use this page to describe your company\'s mission and goals. Nullam tempor dolor sed nulla auctor, nec placerat felis sodales. Etiam et turpis mattis, efficitur mi ut, ultrices diam. Donec consectetur, lorem eget bibendum sodales, augue velit cursus nunc.',
      'Sit amet fringilla nisi mollis eget. Sed a eros nec leo euismod eleifend sit amet ut nisl blandit. Sed a eros nec leo euismod eleifend sit amet ut nisl. Nullam tempor dolor sed nulla auctor, nec placerat felis sodales.',
    ],
    quote: {
      text: 'Education is the most powerful weapon which you can use to change the world.',
      author: 'Simone Lemoniere',
      role: 'Executive Director, Mentor',
    },
    cta: { label: 'Donate', to: '/donate' },
  },

  team: {
    title: 'Our Team',
    intro: 'Meet the people behind our mission to transform education.',
    members: [
      {
        name: 'First Name Last Name',
        role: 'Executive Director',
        bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      },
      {
        name: 'First Name Last Name',
        role: 'Program Director',
        bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
      },
      {
        name: 'First Name Last Name',
        role: 'Community Lead',
        bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
      },
      {
        name: 'First Name Last Name',
        role: 'Operations Manager',
        bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
      },
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
    organization: 'The Lusaka Foundation',
    location: 'New York, NY 12345',
    links: [
      { label: 'Materials for Learning', to: '/materials-for-learning' },
      { label: 'Education for Teachers', to: '/education-for-teachers' },
      { label: 'Support for Communities', to: '/support-for-communities' },
    ],
  },
}

export default siteData