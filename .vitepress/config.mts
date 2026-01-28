import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: "Roadmap Developer 2026",
  description: "Guia completo para desenvolvedores em 2026",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Trilhas', items: [
        { text: 'Comum', link: '/roadmaps/general/common' },
        { text: 'Frontend', link: '/roadmaps/frontend/frontend' },
        { text: 'Backend', link: '/roadmaps/backend/backend' },
        { text: 'Mobile', link: '/roadmaps/mobile/mobile' },
        { text: 'DevOps', link: '/roadmaps/devops/devops' },
        { text: 'AI', link: '/roadmaps/ai/artificial-intelligence' }
      ]},
      { text: 'Conselhos', link: '/advices' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'Início', link: '/' },
          { text: 'Conselhos de Carreira', link: '/advices' }
        ]
      },
      {
        text: 'Trilhas de Estudo',
        items: [
          { text: 'Trilha Comum (Base)', link: '/roadmaps/general/common' },
          { text: 'Frontend', link: '/roadmaps/frontend/frontend' },
          { text: 'Backend', link: '/roadmaps/backend/backend' },
          { text: 'Mobile', link: '/roadmaps/mobile/mobile' },
          { text: 'DevOps', link: '/roadmaps/devops/devops' },
          { text: 'Inteligência Artificial', link: '/roadmaps/ai/artificial-intelligence' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kamranahmedse/developer-roadmap' } // Keeping credit or changing to repo link if known
    ],

    footer: {
      message: 'Lançado sob a licença MIT.',
      copyright: 'Copyright © 2026 Roadmap Developer'
    },

    search: {
      provider: 'local'
    }
  }
}))
