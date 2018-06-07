module.exports = {
  title: 'Daniel Simionescu',
  description: 'Learn programming fast, free and fully',
  base: '/',
  themeConfig: {
    nav: [
      {
        text: 'C#',
        items: [
          { text: "Strings", link: '/csharp/strings/' },
          { text: "Arrays", link: '/csharp/arrays/' },
          { text: "Dictionaries", link: '/csharp/dictionaries/' },
          { text: "Algorithms", link: '/csharp/algorithms/' },
          { text: "Casting", link: '/csharp/casting/' },
          { text: "Exceptions", link: '/csharp/exceptions/' },
          { text: "Functions", link: '/csharp/functions/' },
          { text: "Generics", link: '/csharp/generics/' },
          { text: "JSON", link: '/csharp/json/' },
          { text: "Lists", link: '/csharp/lists/' },
          { text: "LINQ", link: '/csharp/linq/' },
          { text: "OOP", link: '/csharp/objects/' },
          { text: "Operators", link: '/csharp/operators/' },
          { text: "Queues", link: '/csharp/queues/' },
          { text: "Structs", link: '/csharp/structs/' },
          { text: "Tasks", link: '/csharp/tasks/' },
          { text: "TDD", link: '/csharp/testing/' },
          { text: "Byte Serialization", link: '/csharp/byteserialization' },
          { text: "Namespaces", link: '/csharp/namespaces' },
          { text: "Numbers", link: '/csharp/numbers' },
          { text: "Value and reference", link: '/csharp/valueandreference' },
          { text: "Tips", link: '/csharp/tips' },
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: "Basics", link: '/javascript/basics/' },
          { text: "Statements", link: '/javascript/statements/' },
          { text: "Variables", link: '/javascript/variables/' },
          { text: "Strings", link: '/javascript/strings/' },
          { text: "Arrays", link: '/javascript/arrays/' },
          { text: "Functions", link: '/javascript/functions/' },
          { text: "Regex", link: '/javascript/regex/' },
          { text: "ES6 – ES8", link: '/javascript/ecmascript/' },
          { text: "Maps", link: '/javascript/maps/' },
          { text: "Procedural", link: '/javascript/procedurals/' },
          { text: "OOP", link: '/javascript/objectoriented/' },
          { text: "TypeScript", link: '/javascript/typescript/' },
          { text: "Functional", link: '/javascript/functional/' },
          { text: "Lodash", link: '/javascript/lodash/' },
          { text: "Vanilla JS", link: '/javascript/vanillajs/' },
          { text: "Vue.js", link: '/javascript/vuejs/' },
          { text: "Tips", link: '/javascript/tips' }
        ]
      },
      { text: 'Codementor', link: 'https://www.codementor.io/danielsimionescu1996' },
      { text: 'PayPal', link: 'https://www.paypal.me/danielsimi' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCPIe87uLDW-QZ5FnUZqdxoA' },
    ],
    sidebar: {
      // CSHARP
      '/csharp/strings/': [
        '',
        'declaration',
        'interpolation',
        'literals',
        'comparing',
        'methods',
        'reversing',
        'splitting',
        'stringbuilder'
      ],
      '/csharp/arrays/': [
        '',
        'definition',
        'declaration',
        'initializers',
        'arraylist',
        'resize',
        'iteration',
        'methods',
        'procedurals',
        'quicksort',
        'quicksort-generics',
        'quicksort-experiment',
        'binarysearch',
        'aggregates',
        'opinion',
      ],
      '/csharp/operators/': [
        '',
        'nameof',
        'nullcoalescing'
      ],
      '/csharp/linq/': [
        '',
        'range',
        'take',
        'where',
        'exercise'
      ],
      '/csharp/algorithms/': [
        '',
        'countfactors',
        'vowels'
      ],
      '/csharp/casting/': [
        '',
        'numbers'
      ],
      '/csharp/dictionaries/': [
        '',
        'declaration',
        'methods',
        'sorting'
      ],
      '/csharp/exceptions/': [
        '',
        'filters'
      ],
      '/csharp/functions/': [
        '',
        'declaration',
        'delegates',
        'expressionbodiedfunctions',
        'lambdaexpressions'
      ],
      '/csharp/generics/': [
        '',
        'generics'
      ],
      '/csharp/json/': [
        '',
        'jsonserializer'
      ],
      '/csharp/lists/': [
        '',
        'methods',
        'exercise1'
      ],
      '/csharp/objects/': [
        '',
        'instances',
        'propertyinitializers'
      ],
      '/csharp/structs/': [
        '',
        'declaration'
      ],
      '/csharp/tasks/': [
        '',
        'actions'
      ],
      '/csharp/testing/': [
        '',
        'bankexercise',
        'carexercise',
        'dogexercise',
        'studentexercise',
      ],

      // JAVASCRIPT
      '/javascript/basics/': [
        '',
        'types',
        'decimals',
        'features',
        'operators',
        'random',
        'swap'
      ],
      '/javascript/arrays/': [
        '',
        'iteration',
        'methods',
        'intersection',
      ],
      '/javascript/ecmascript/': [
        '',
        'defaultparameters',
        'arraydestructuring',
        'objectdestructuring',
        'iterators/',
        'iterators/usage',
        'iterators/customranges'
      ],
      '/javascript/statements': [
        '',
        'switch'
      ],
      '/javascript/functional/': [
        '',
        'comparison',
        'higherorderfunctions'
      ],
      '/javascript/functions/': [
        '',
        'async',
        'declaration'
      ],
      '/javascript/lodash/': [
        '',
        'map',
        'filter',
        'reduce',
        'find',
        'every',
        'some'
      ],
      '/javascript/maps/': [
        ''
      ],
      '/javascript/objectoriented/': [
        '',
        'inheritance',
        'getset'
      ],
      '/javascript/procedurals/': [
        '',
        'divisors',
        'primenumbers'
      ],
      '/javascript/regex/': [
        '',
        'capitalize'
      ],
      '/javascript/strings/': [
        '',
        'stringoperator',
        'methods',
        'templates',
        'extra'
      ],
      '/javascript/typescript/': [
        '',
        'installing',
        'arrowfunctions',
        'dictionaries',
        'features',
        'functions',
        'parameters',
        'readonly',
        'restparameters',
        'tips',
        'types'
      ],
      '/javascript/vanillajs/': [
        '',
        'document',
        'querying'
      ],
      '/javascript/variables/': [
        '',
        'declaration',
        'scope'
      ],
      '/javascript/vuejs/': [
        '',
        'inputtrigger',
        'customfilter'
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