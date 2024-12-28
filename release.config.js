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
            name: "yldio-percoct-ui-${nextRelease.gitTag}.tgz",
            label: "Percoct-UI (${nextRelease.gitTag}) Distribution",
          },
          {
            path: "manifest.json",
            name: "yldio-percoct-ui-${nextRelease.gitTag}-manifest.json",
            label: "Percoct-UI (${nextRelease.gitTag}) Manifest",
          },
          {
            path: "attestation.json",
            name: "yldio-percoct-ui-${nextRelease.gitTag}-attestation.json",
            label: "Percoct-UI (${nextRelease.gitTag}) Attestation",
          },
        ],
      },
    ],
  ],
};
