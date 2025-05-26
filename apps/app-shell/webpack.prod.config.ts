import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation(
  {
    ...config,
    /*
     * Remote overrides for production.
     * Each entry is a pair of a unique name and the URL where it is deployed.
     *
     * e.g.
     * remotes: [
     *   ['app1', 'https://app1.example.com'],
     *   ['app2', 'https://app2.example.com'],
     * ]
     */
    remotes: [
      ['hr', 'https://d9175b79.nx-mono-poc.pages.dev/hr'],
      ['timeMangment', 'https://d9175b79.nx-mono-poc.pages.dev/timeMangment'],
      ['calandar', 'https://d9175b79.nx-mono-poc.pages.dev/calandar'],
      ['tracker', 'https://d9175b79.nx-mono-poc.pages.dev/tracker'],
      ['projects', 'https://d9175b79.nx-mono-poc.pages.dev/projects'],
    ],
  },
  { dts: false }
);
