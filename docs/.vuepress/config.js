module.exports = {
  title: 'Daniel Simionescu',
  description: "Learn programming fast, free and fully",
  base: "/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apps', link: '/apps/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'GitHub', link: 'https://github.com/danielsimionescu' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCPIe87uLDW-QZ5FnUZqdxoA' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    repo: 'danielsimionescu/website',
    repoLabel: 'Contribute!',
    editLinkText: 'Help me improve this page!'
  }
}