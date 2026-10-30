// Global config for the self-hosted Renovate runner (.github/workflows/renovate-run.yaml).
// Repository settings live in the shared preset, renovate/default.json.
module.exports = {
  platform: 'github',
  // Commits go through the GitHub API so they are signed as the GitHub App.
  platformCommit: 'enabled',
  // Repos are configured from here, no onboarding PR or renovate.json needed.
  onboarding: false,
  requireConfig: 'optional',
  repositoryCache: 'enabled',
  extends: ['github>SigNoz/primus.workflows//renovate/default'],
  // Repos are onboarded explicitly, no autodiscover.
  repositories: [
    'SigNoz/primus.workflows',
  ],
};
