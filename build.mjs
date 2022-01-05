import glob from "tiny-glob"
import path from "path"

import { build } from "esbuild"
import { sassPlugin } from "esbuild-sass-plugin"
import vuePlugin from "@franklx/esbuild-plugin-vue3"

const is_devel = true;

(async () => {
    await build({
        entryPoints: await glob("./client/*.mjs"),
        plugins: [
            sassPlugin({
                importMapper: path => path.replace(/^@\//, "./")
            }),
            vuePlugin({
                enableOptionsApi: true,
                enableDevTools: is_devel,
            }),
            //pnpPlugin(),
            //cleanPlugin(),
        ],
        loader: {
            ".gif": "file",
            ".jpg": "file",
            ".jpeg": "file",
            ".png": "file",
            ".svg": "file",
            ".eot": "file",
            ".ttf": "file",
            ".woff": "file",
            ".woff2": "file",
        },
        bundle: true,
        minify: !is_devel,
        metafile: true,
        splitting: !is_devel,
        platform: "browser",
        format: "esm",
        sourcemap: is_devel,
        target: ["es2017"],
        outdir: "assets",
    })
})()
