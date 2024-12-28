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
            label: "Files being published",
          },
        ],
      },
    ],
  ],
};
