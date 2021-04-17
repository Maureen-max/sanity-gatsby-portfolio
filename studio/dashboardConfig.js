export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607a9097117881c7a00ef472',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8jy5qywh',
                  apiId: 'a42e69bf-b2c8-4cc4-8804-a068cb483ad8'
                },
                {
                  buildHookId: '607a9098007437d8796d23f3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ddwtj2my',
                  apiId: 'a0d9b845-73f0-4816-bc58-c649e9cb6d95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Maureen-max/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ddwtj2my.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
