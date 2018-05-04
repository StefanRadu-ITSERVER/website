module.exports = {
  title: 'Daniel Simionescu',
  description: 'Learn programming fast, free and fully',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'C#',
        items: [
          { text: "Strings", link: '/csharp/strings/declaration' },
          { text: "Arrays", link: '/csharp/arrays/definition' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/danielsimionescu' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCPIe87uLDW-QZ5FnUZqdxoA' },
    ],
    sidebar: {
      '/csharp/arrays/': [
        'definition',
        'declaration',
        'manipulation',
        'iteration',
        'arraylist',
        'methods',
        'procedurals',
        'aggregates',
        'quicksort',
        'binarysearch',
        'opinion',
      ],

      '/csharp/strings/': [
        'declaration',
        'literals',
        'comparing',
        'methods',
        'reversing',
        'splitting',
        'stringbuilder'
      ],

      '/': [
        ''
      ]
    },
    sidebarDepth: 3,
    repo: 'danielsimionescu/website',
    repoLabel: 'Contribute!',
    docsRepo: 'danielsimionescu/website',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help me improve this page!'
  }
}