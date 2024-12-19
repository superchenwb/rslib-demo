import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ["./src/**"],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: "esm",
      output: {
        distPath: {
          root: 'es'
        }
      }
    },
    {
      bundle: false,
      dts: true,
      format: "cjs",
      output: {
        distPath: {
          root: 'lib'
        }
      }
    }
  ],
});
