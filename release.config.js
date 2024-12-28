export default {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "yldio-percoct-ui-**.tgz",
            name: "Percoct-UI-${nextRelease.gitTag}",
            label: "Percoct-UI (${nextRelease.gitTag}) Distribution",
          },
          {
            path: "manifest.json",
            name: "Percoct-UI-${nextRelease.gitTag} Manifest",
            label: "Percoct-UI (${nextRelease.gitTag}) Manifest",
          },
          {
            path: "attestation.json",
            name: "Percoct-UI-${nextRelease.gitTag} Attestation",
            label: "Percoct-UI (${nextRelease.gitTag}) Attestation",
          },
        ],
      },
    ],
  ],
};
