
export const siteData = {
  site: {
    name: 'Isomero Bi Technologies',
    tagline: "L'innovation et l'excellence en digitalisation numerique.",
    description: 'Supporting education and innovation.',
    logo: '/iSOMERO-01.png',
    favicon: '/favicon.svg',
    linkedin: 'https://www.linkedin.com/company/135074078/',
    whatsapp: 'https://wa.me/25767908378',
  },

  navigation: [
    { label: 'Home', to: '/' },
    {
      label: 'Programs',
      type: 'dropdown',
      to: '/programs',
      overviewLabel: 'All Programs',
      children: [
        { label: 'Build with AI 2026', to: '/Leaders-build-with-ai' },
        { label: 'Education for Teachers', to: '/education-for-teachers' },
        { label: 'Support for Communities', to: '/support-for-communities' },
        { label: 'videos', to: '/videos' },
      ],
    },
    { label: 'Learn', to: '/learn' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Our Vision', to: '/our-vision' },
    // { label: 'Our Team', to: '/our-team' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact', highlight: true },
  ],

  home: {
    hero: {
      eyebrow: 'Isomero Bi Technologies',
      title: "you are in the right place",
      subtitle:
        "IT services, digital solutions, as well as teaching and vocational training activities.",
      primaryCta: { label: 'Explore Our Programs', to: '/programs' },
      secondaryCta: { label: 'Contact Us', to: '/contact' },
      image:
        'https://ik.imagekit.io/cy3dy3vcm/Isomero/home%20background/IMG_20260527_141150_HDR.jpg?updatedAt=1787141856144',
    },

    editorial: {
      theme: 'light',
      title: 'Supporting education and innovation.',
      text: 'At iSomero Bi Technologies, we believe that education and technology are powerful drivers of progress. We are committed to empowering individuals, businesses, and communities through innovative digital solutions, practical technology skills, and accessible learning opportunities. Our mission is to bridge the digital divide, inspire creativity, and build a smarter, more connected future for Burundi and beyond.',
      image:
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80',
      imageAlt: 'Students in classroom',
    },

    programs: {
      theme: 'dark',
      title: 'Our Programs',
      items: [
        {
          slug: 'Leaders-build-with-ai',
          title: 'we lead people to learn so many things in IT and Software development',
          description:
            'Many educational materials in local languages are often out of date. We work with school leaders and teachers to create new materials in local languages.',
          image:
            'https://ik.imagekit.io/cy3dy3vcm/Isomero/home%20background/IMG_20260404_155207_HDR.jpg?updatedAt=1787141855700',
          cta: { label: 'Learn More', to: '/Leaders-build-with-ai' },
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
            'https://ik.imagekit.io/cy3dy3vcm/Isomero/Community%20/community.png',
          cta: { label: 'Learn More', to: '/support-for-communities' },
        },

      ],
    },



   
  },

  programs: {
    'Leaders-build-with-ai': {
      title: 'Build with AI 2026',
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
        }
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
          title: 'Learning',
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
    'formation-excel': {
      title: 'Excel Formation',
      heroImage:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
      intro:
        "We're used to help communities for excel formation and other courses of microsoft.",
      sections: [
        {
          title: 'organisation',
          text: 'Workshops and mentorship programs designed to help teachers grow their skills and confidence in the classroom.',
        },
        {
          title: 'Personnal',
          text: 'Teachers learn best from each other. We facilitate communities of practice across schools and regions.',
        },
        {
          title: 'Using video on Youtube',
          text: 'Teachers learn best from each other. We facilitate communities of practice across schools and regions.',
        },
      ],
    },
    'videos': {
      title: 'Videos realized by Isomero',
      intro: 'A selection of video projects produced by Isomero Bi Technologies.',
      heroImage:
        'https://ik.imagekit.io/cy3dy3vcm/Isomero/videos/Pasted%20image%20(11).png',
        sections: [
          {
            title: 'Professional Development',
            text: 'directoring AI to realize the project',
          },
          {
            title: 'skills and knowledge',
            text: 'using tools for voice over and or dependencies to make a complete video',
          },
          {
            title: 'OAA International — 30th Edition',
            videoURL: 'https://youtu.be/1eS_TvnwoX8',
          },
          {
            title: 'Femme Leader',
            videoURL: 'https://youtu.be/-vuNC1BCowc',
          },
          {
            title: 'Journée Internationale de la Femme',
            videoURL: 'https://youtu.be/blcmZdSqhjQ',
          },
          {
            title: 'Propreté dans la Ville',
            videoURL: 'https://youtu.be/fTxLc7hAubY',
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
        title: 'Build with AI',
        to: '/Leaders-build-with-ai',
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
      {
        title: 'formation excel',
        to: '/formation-excel',
        image:
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      },
      {
        title: 'Videos',
        to: '/videos',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Isomero/videos/Pasted%20image%20(18).png',
      },
    ],
  },

    vision: {
      title: 'Our Vision',
      hero: {
      title: 'We believe digital learning and technical training should be accessible to everyone',
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
    cta: { label: 'Contact Us', to: '/contact' },
  },

  learn: {
    title: 'Learn',
    heroImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80',
    heroTitle: 'iSomero Academy',
    heroSubtitle:
      'Welcome to our learning hub, where we share insights, articles, and courses to help you stay ahead in the tech world.',
    items: [
      {
        slug: 'learn-post-one',
        title: 'The 5 Most Used Programming Languages in 2025',
        date: 'August 6, 2025',
        excerpt:
          'Why they matter, when to choose them, and what they can do for your next project.',
        image:
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80',
        cta: { label: 'Read More', to: '/learn/learn-post-one' },
        intro:
          'This learning track helps beginners and young developers understand which languages dominate the market today, and how Isomero uses them in real projects and training sessions.',
        sections: [
          {
            title: 'What you will learn',
            text: 'We cover Python, JavaScript, Java, TypeScript, and SQL with practical examples drawn from school projects, community workshops, and client work.',
          },
          {
            title: 'Why these languages',
            text: 'Each language has a clear role: web interfaces, backend services, automation, mobile foundations, and data workflows. Choosing well saves time and makes teams more productive.',
          },
          {
            title: 'How the program works',
            text: 'Learners move from concepts to small builds: scripts, simple APIs, and interactive pages. Mentors from Isomero guide the practice so theory becomes useful skill.',
          },
        ],
        relatedCta: { label: 'Join Build with AI 2026', to: '/Leaders-build-with-ai' },
      },
      {
        slug: 'learn-post-two',
        title: 'Growing Together Through Team Coding',
        date: 'July 28, 2025',
        excerpt:
          'How collaboration helps teams ship better products and learn faster in the process.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
        cta: { label: 'Read More', to: '/learn/learn-post-two' },
        intro:
          'Team coding is at the heart of Isomero’s learning method. Students and professionals grow faster when they build together, review each other’s work, and share responsibility.',
        sections: [
          {
            title: 'Collaboration as a skill',
            text: 'We teach Git workflows, pair programming, code reviews, and clear communication so every participant can contribute with confidence.',
          },
          {
            title: 'What the sessions look like',
            text: 'Groups define a small product goal, divide tasks, and ship an MVP. Mentors help unblock issues and keep the focus on learning by doing.',
          },
          {
            title: 'Outcomes for learners',
            text: 'Participants leave with a shared project, stronger soft skills, and a clearer understanding of how real software teams operate.',
          },
        ],
        relatedCta: { label: 'Explore Support for Communities', to: '/support-for-communities' },
      },
      {
        slug: 'learn-post-three',
        title: 'Why ERP Matters for Modern Businesses',
        date: 'July 11, 2025',
        excerpt:
          'A simple breakdown of how centralized tools improve coordination, reporting, and growth.',
        image:
          'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80',
        cta: { label: 'Read More', to: '/learn/learn-post-three' },
        intro:
          'This program introduces ERP thinking for local businesses and organizations that want better control of stock, sales, finance, and reporting in one place.',
        sections: [
          {
            title: 'The business problem',
            text: 'Many teams still manage operations with scattered spreadsheets and WhatsApp messages. That creates delays, errors, and weak visibility for decision makers.',
          },
          {
            title: 'What ERP changes',
            text: 'A centralized system connects customers, inventory, invoices, and reports. Managers get a clearer picture, and teams spend less time chasing information.',
          },
          {
            title: 'How Isomero supports you',
            text: 'We explain the core modules, map your current process, and train your team so digital tools fit the way you already work — then improve it step by step.',
          },
        ],
        relatedCta: { label: 'Contact us about ERP training', to: '/contact' },
      },
    ],
  },

  portfolio: {
    title: 'Portfolio',
    heroImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
    heroTitle: 'Selected Work',
    heroSubtitle:
      'A snapshot of projects, training initiatives, and digital products we have delivered for clients and communities.',
    items: [
      {
        title: 'Digital School Portal',
        category: 'Web Application',
        description: 'A lightweight school portal for communication, content, and admin workflows.',
        image:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80',
      },
      {
        title: 'Teacher Training Platform',
        category: 'Learning Platform',
        description: 'A training experience designed to support teachers with practical digital skills.',
        image:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80',
      },
      {
        title: 'Community Support Toolkit',
        category: 'Community Program',
        description: 'Digital tools and shared resources built for local coordination and outreach.',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80',
      },
      {
        title: 'Automation Dashboard',
        category: 'Business System',
        description: 'A simple dashboard concept for tracking operations and reporting progress.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      },
    ],
  },

  contactPage: {
    title: 'Contact',
    heroImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80',
    heroTitle: 'Let’s build something useful together',
    heroSubtitle:
      'Send us a message',
    email: 'isomerobi@gmail.com',
    phone: '67908378',
    address: 'Rohero, No 13',
    form: {
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'subject', label: 'Subject', type: 'text', required: true },
        { name: 'message', label: 'Message', type: 'textarea', required: true },
      ],
      submitLabel: 'Send Message',
      sendingLabel: 'Sending…',
      successMessage: 'Thank you for reaching out!',
      errorMessage: 'Sorry, we could not send your message. Please try again.',
    },
  },

  team: {
    title: 'Our Team',
    heroImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
    intro: 'Meet the people behind our mission to transform education.',
    members: [
      {
        name: 'IRUMVA Brice Berry,NININAHAZWE Jean Lionel,Kantore Jean Gildas',
        role: 'Executive Director',
        bio: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        image:
          'https://ik.imagekit.io/cy3dy3vcm/Isomero/team/team.png',
      },
    ],
  },

  blog: {
    title: 'Blog',
    heroImage:
      'https://ik.imagekit.io/cy3dy3vcm/Isomero/Blog%20background%20/InShot_20261102_104122288.jpg?updatedAt=1793609081183',
    posts: [
      {
        slug: "blog-post-four",
        title: "Turning a Business Idea into a Useful Digital Tool",
        author: 'Isomero Bi Technologies',
        date: "March 15, 2026",
        excerpt: "A practical guide to defining a problem, building a small first version, and learning from the people who will use it.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
        content: "A useful digital project starts with a problem people can describe. Before choosing a programming language or designing a screen, understand who needs help, what they are trying to do, and where their current process becomes difficult.",
        sections: [
          {
            title: "Start with one clear problem",
            text: "Imagine a small business that records orders in a notebook and sometimes loses track of deliveries. The first goal could be simple: make it easy to see which orders still need to be delivered. Talk to the people taking orders and making deliveries before deciding what the tool should include.",
          },
          {
            title: "Build the smallest useful version",
            text: "Write down the essential information: customer name, order details, delivery date, and status. Create a simple version that lets someone add an order and update its status. Extra features can wait until the core task works reliably.",
          },
          {
            title: "Test with the people doing the work",
            text: "Ask a future user to complete a typical task without step-by-step instructions. Watch where they hesitate and ask what feels unclear. Use sample data during early tests, and decide who should have access before entering real customer information.",
          },
          {
            title: "Plan for everyday use",
            text: "A project needs more than a launch date. Decide who will maintain it, how information will be backed up, and how users can report a problem. A small tool that people understand and can maintain is a strong foundation for future improvements.",
          },
        ],
      },
      {
        slug: "blog-post-three",
        title: "Practical Digital Skills for the Classroom",
        author: 'Isomero Bi Technologies',
        date: "February 28, 2026",
        excerpt: "Simple ways teachers can prepare reusable lessons, organize resources, and make digital activities accessible to more learners.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
        content: "Digital tools are most useful in a classroom when they support a clear learning goal. A well-organized lesson document, a simple spreadsheet, or a short demonstration can help teachers prepare and give students more ways to practice.",
        sections: [
          {
            title: "Choose the learning goal first",
            text: "Start with what students should be able to explain or do by the end of the lesson. Then choose a tool that supports that goal. For example, a spreadsheet can help students compare quantities, while a short presentation can introduce a discussion with images and questions.",
          },
          {
            title: "Prepare resources that can be reused",
            text: "Keep lesson plans, worksheets, and assessment templates in clearly named folders. Include the subject and topic in each file name so materials are easier to find. Keep an editable copy of your work and a version that can be shared or printed.",
          },
          {
            title: "Design for limited connectivity",
            text: "Prepare an offline version of essential materials where possible. If students share devices, organize small-group activities with clear roles. Offer a printed or spoken alternative so participation does not depend on owning a phone or having internet access at home.",
          },
          {
            title: "Protect student information",
            text: "Share only the information needed for an activity. Keep attendance records and individual results separate from public learning materials. Before sharing a photo or student work, follow your school’s consent procedures and check who will be able to see it.",
          },
        ],
      },
      {
        slug: "blog-post-two",
        title: "Building Digital Confidence Through Community Learning",
        author: 'Isomero Bi Technologies',
        date: "January 10, 2026",
        excerpt: "How shared practice, accessible activities, and small local projects can help people develop useful technology skills.",
        image: "https://images.unsplash.com/photo-1497633762263-8f9fb803b40a?w=900&q=80",
        content: "Learning technology becomes easier when people can ask questions and practice together. Community learning can begin with everyday tasks: writing a document, organizing files, sending an attachment, or keeping a simple record of expenses.",
        sections: [
          {
            title: "Begin with everyday needs",
            text: "Ask participants what they want to accomplish before planning a session. A job seeker may need to prepare a CV, while a community group may need a shared activity calendar. Choose one achievable task and explain how it connects to daily life.",
          },
          {
            title: "Make room for different starting points",
            text: "Demonstrate each step, then give participants time to try it themselves. Use familiar language and explain technical terms as they appear. When devices are shared, rotate roles so everyone gets hands-on practice.",
          },
          {
            title: "Create something useful together",
            text: "A group might build an event budget in a spreadsheet or prepare a notice for a local activity. Use sample information while learning. Break the work into small tasks and let participants explain what they contributed and how it works.",
          },
          {
            title: "Support practice after the session",
            text: "Provide a short set of instructions that participants can revisit offline. Encourage them to repeat the task with a new example and bring questions to the next meeting. Progress can be measured by what someone can now do independently, rather than how many tools were introduced.",
          },
        ],
      },
      {
        slug: "blog-post-one",
        title: "Start Learning Technology with One Small Project",
        author: 'Isomero Bi Technologies',
        date: "December 5, 2025",
        excerpt: "Choose a manageable goal, practice consistently, and turn your first steps in technology into something you can show and improve.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
        content: "You do not need a perfect idea to begin learning technology. A small project gives your practice a purpose and helps you see progress. Choose something you understand well enough to explain, then build it one step at a time.",
        sections: [
          {
            title: "Pick a goal you can finish",
            text: "Try creating a one-page personal website, a monthly expense sheet, or a simple program that calculates totals. Write one sentence describing what the finished project should do. Keep the first version focused on that single outcome.",
          },
          {
            title: "Learn what the next step requires",
            text: "Break the project into small tasks. For a personal website, you might begin with a heading and introduction, then add an image and contact link. Learn the concept needed for each task and apply it immediately instead of collecting tutorials without practicing.",
          },
          {
            title: "Keep a record of your progress",
            text: "Save working versions and write down the problems you solve. When asking for help, explain what you expected, what happened, and what you already tried. Clear questions make it easier for others to guide you and help you understand your own work.",
          },
          {
            title: "Share, reflect, and improve",
            text: "Show your project to someone and ask them to try it. Choose one improvement based on their feedback, complete it, and document the change. When you are ready for guided learning or help choosing a project, contact Isomero Bi Technologies to discuss your interests.",
          },
        ],
      },
    ],
  },

  footer: {
    organization: 'The Isomero Foundation',
    location: 'Rohero, No 13',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Learn', to: '/learn' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Build with AI 2026', to: '/Leaders-build-with-ai' },
      { label: 'Education for Teachers', to: '/education-for-teachers' },
      { label: 'Support for Communities', to: '/support-for-communities' },
    ],
  },
}

export default siteData
