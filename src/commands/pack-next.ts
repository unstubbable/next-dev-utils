import clipboard from "clipboardy";

import { packNext as packNextLib } from "../lib/pack-next.js";
import { Arguments } from "yargs";

type Options = Arguments<{
  serve?: boolean;
  json?: boolean;
}>;

export async function packNext(options: Options) {
  if (options.json && options.serve) {
    throw new Error("Cannot use --json and --serve together");
  }

  const url = await packNextLib(options);
  await clipboard.write(url);
  if (!options.json) console.log("\nCopied URL to clipboard 🦄");
  if (options.json) console.log(url);
}
