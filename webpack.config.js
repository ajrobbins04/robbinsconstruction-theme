const path = require("path"); // Helper for resolving paths
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // For extracting CSS into separate files
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); // For live reloading
const CleanWebpackPlugin = require("clean-webpack-plugin"); // Wipes dist before each build

const isProduction = process.env.NODE_ENV === "production"; // Check if we're in production mode

module.exports = {
    entry: {
        main: "./src/ts/main.ts", // Entry point for TypeScript
        style: "./src/scss/style.scss" // Entry point for SCSS
    },
    output: {
        filename: "[name].js", // Output file name based on entry point
        path: path.resolve(__dirname, "dist"), // Output directory
        publicPath: "/dist/", // Public URL of the output directory
        clean: true // Clean the output directory before each build
    },
    
    mode: isProduction ? "production" : "development", // Set mode based on environment variable
    devtool: isProduction ? false : "source-map", // Disable source maps in production

    module: {
        rules: [
            {
                test: /\.ts$/, // Match TypeScript files
                use: "ts-loader", // Use ts-loader to compile TypeScript
                exclude: /node_modules/ // Exclude node_modules
            },
            {
                test: /\.scss$/, // Match SCSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate files
                    {
                        loader: "css-loader", // Translates CSS into CommonJS
                        options: { sourceMap: !isProduction } // Enable source maps in development
                    },
                    {
                        loader: "sass-loader", // Compiles Sass to CSS
                        options: { sourceMap: !isProduction } // Enable source maps in development
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|woff2?|ttf|eot)$/i, // Match image and font files
                type: "asset/resource", // Use asset module to handle these files
                generator: {
                    filename: "assets/[path][name][ext]" // Output path for assets
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 // Inline files smaller than 8kb
                    }
                },
                include: path.resolve(__dirname, "src/assets") // Only include assets from src/assets
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"], // Resolve TypeScript and JavaScript files
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "style.css", // Output CSS file name
        }),

        new BrowserSyncPlugin(
            {
                proxy: "http://localhost/robbinsconstruction", // Proxy to local XAMPP server
                files: [
                    "**/*.php", // Watch PHP files for changes
                    "dist/*.css", // Watch compiled CSS files
                    "dist/*.js" // Watch compiled JS files
                ],
                open: false, // Don't open the browser automatically
                notify: false, // Disable notifications
            },
            { reload: true } // Reload the browser on changes
        )
    ],

    optimization: {
        minimize: isProduction, // Minimize output in production mode
    }
}