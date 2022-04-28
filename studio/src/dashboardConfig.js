export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626abef9b84577005936e001",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gd9rchd7",
                  apiId: "f7327bb7-2f03-47c9-864f-2b73eab70b09",
                },
                {
                  buildHookId: "626abefa3fe4e139cbe8f392",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-124dkrky",
                  apiId: "c77c9d18-19fc-4262-beb5-5e6d1a47b353",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/JamesTsetsekas/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-124dkrky.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
