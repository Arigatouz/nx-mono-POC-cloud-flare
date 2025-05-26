# MultiAppInRoutes

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your remote caching setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/GPuz3awMBn)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve app-shell
```

To create a production bundle:

```sh
npx nx build app-shell
```

To see all available targets to run for a project, run:

```sh
npx nx show project app-shell
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Deploying to Cloudflare Pages

This project is configured for deployment to Cloudflare Pages, a fast, secure, and developer-friendly platform for deploying web applications.

### Prerequisites

1. A Cloudflare account
2. Cloudflare Wrangler CLI installed (`npm install -g wrangler`)
   - Note: If you previously installed `@cloudflare/wrangler`, you should uninstall it first: `npm uninstall -g @cloudflare/wrangler`
3. Authenticated with Cloudflare (`wrangler login`)

### Deployment Steps

1. Build the application for production:
   ```sh
   npm run build
   ```

2. Deploy to Cloudflare Pages:
   ```sh
   npm run deploy
   ```

   Or use the more explicit command:
   ```sh
   npm run deploy:cloudflare
   ```

Alternatively, you can set up continuous deployment by connecting your GitHub repository to Cloudflare Pages:

1. Go to the Cloudflare Dashboard
2. Navigate to Pages
3. Click "Create a project"
4. Connect your GitHub repository
5. Configure the build settings:
   - Build command: `npm ci && npm run build`
   - Deploy command: `npx wrangler pages deploy dist/apps --project-name=multi-app-in-routes`
   - Build output directory: `dist/apps`
   - Root directory: `/`

   **IMPORTANT**: Make sure to use `wrangler pages deploy` in your deploy command, not just `wrangler deploy` which is for Workers projects.

### Configuration Files

- `cloudflare.yml`: Contains the main configuration for Cloudflare Pages
- `wrangler.toml`: Contains additional configuration for Cloudflare Workers
- `apps/app-shell/public/_redirects`: Configures routing for the SPA
- `apps/app-shell/public/_headers`: Configures HTTP headers for security and caching

### Wrangler Version

This project uses the latest version of Wrangler (v4+). If you're migrating from Wrangler v1 (@cloudflare/wrangler), please note the following changes:

- The package name has changed from `@cloudflare/wrangler` to `wrangler`
- The command to deploy to Cloudflare Pages has changed from `wrangler pages publish` to `wrangler pages deploy`
- **IMPORTANT**: Always use `wrangler pages deploy` for Pages projects, not `wrangler deploy` which is for Workers projects
- The wrangler.toml configuration for Pages projects is simplified and only requires a few fields:
  ```toml
  name = "multi-app-in-routes"
  pages_build_output_dir = "dist/apps"
  compatibility_date = "2025-05-26"
  ```

  **IMPORTANT**: Do not use the `[assets]` section in wrangler.toml for Pages projects as it is not supported and will cause deployment errors.
- For more information, see the [Wrangler Migration Guide](https://developers.cloudflare.com/workers/wrangler/migration/migrating-from-wrangler-1/#update-wrangler-version)

### HTTPS and Security

This application is configured to use HTTPS for all connections. Cloudflare Pages automatically provides HTTPS for all deployments, but there are a few things to keep in mind:

1. Always use HTTPS URLs in your application code, especially for Module Federation remotes.
2. Update the Content-Security-Policy header in `apps/app-shell/public/_headers` to include your actual deployment domain.
3. If you see an error like "The connection for this site is not secure" or "uses an unsupported protocol", it's likely because your application is trying to load resources over HTTP instead of HTTPS, or because the Content-Security-Policy header is not configured correctly.

### Module Federation in Production

The application uses Module Federation to load micro-frontends. In production, the remotes are configured to use the Cloudflare Pages domain:

```typescript
// apps/app-shell/webpack.prod.config.ts
remotes: [
  ['hr', 'https://d9175b79.nx-mono-poc.pages.dev/hr'],
  ['timeMangment', 'https://d9175b79.nx-mono-poc.pages.dev/timeMangment'],
  ['calandar', 'https://d9175b79.nx-mono-poc.pages.dev/calandar'],
  ['tracker', 'https://d9175b79.nx-mono-poc.pages.dev/tracker'],
  ['projects', 'https://d9175b79.nx-mono-poc.pages.dev/projects'],
]
```

**Note**: Make sure to update the domain in the webpack.prod.config.ts file to match your actual deployment domain. The example above uses 'd9175b79.nx-mono-poc.pages.dev', but your deployment might use a different domain.

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
