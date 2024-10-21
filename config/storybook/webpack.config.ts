import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/buildWebpackConfig";
import path from "path";
import webpack from "webpack";

export default ({ config }: { config: Required<webpack.Configuration> }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, "..", "..", "src"),
        html: "",
        entry: "",
        build: "",
    };
    config.resolve.modules?.push(paths.src);
    config.resolve.extensions?.push(".ts", ".tsx");

    config.module.rules = config.module!.rules?.map(rule => {
        if (/svg/.test(rule!.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules?.push({ test: /\.svg$/, use: ["@svgr/webpack"] });
    config.module.rules?.push(buildCssLoader(true));
    return config;
};
