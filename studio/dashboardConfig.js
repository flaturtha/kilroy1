export default {
  widgets: [
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
                  buildHookId: '60b25fbbc75e1ea0e7758a07',
                  title: 'Sanity Studio',
                  name: 'kilroy-1-studio',
                  apiId: '25cd79fd-5263-4e14-8768-333984c623a6'
                },
                {
                  buildHookId: '60b25fbc9956e2b2db857ffb',
                  title: 'Blog Website',
                  name: 'kilroy-1',
                  apiId: '048e2fdc-32fe-49cb-bcc8-8ddeb6260dcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flaturtha/kilroy1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kilroy-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
