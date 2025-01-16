/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app() {
    return {
      name: "hostingnextjs-example",
      home: "aws",
      providers: {
        aws: {
          region: "eu-central-1",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("NextjsExample");
  },
});
