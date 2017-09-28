require('./check-versions')();

process.env.NODE_ENV = 'production';

let buildWebpackConfig = require('./webpack.prod.conf');
let chalk = require('chalk');
let config = require('../config');
let path = require('path');
let merge = require('webpack-merge');
let rm = require('rimraf');
let webpack = require('webpack');
let webpackConfig = merge(buildWebpackConfig, {
    plugins: [
        new webpack.ProgressPlugin()
    ]
});

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, function (err, stats) {
        if (err) throw err;
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'));;
            process.exit(1);
        }

        console.log(chalk.cyan('  Build complete.\n'));
    });
});
