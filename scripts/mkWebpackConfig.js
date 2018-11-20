const { assemble, pipe, depend } = require("webpack-pipe");

// 入口配置
const entry = (config) => depend.merge({
    entry:{
        app: ["./src"],
    }
}, config);


// 输出配置
const output = (config) => depend.merge({
    output:{
        publicPath: "/public/",
        path: depend.tool.resolveAppPath("public/build"),
    }
}, config);


const resolve = (config) => depend.merge({
    resolve: {
        "modules": [
            // "node_modules",
            "web_modules",
            "src"
        ]
    }
}, config);



/**
 * 格式化不同的样式loader
 * @param otherLoader
 * @return {*}
 */
const formatStyleLoader = (otherLoader = null) => {
    const { MiniCssExtractPlugin, autoprefixer } = depend;

    const baseLoaders = [
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                ident: 'postcss', 	// https://webpack.js.org/guides/migrating/#complex-options
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9' // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009'
                    })
                ]
            }
        }
    ];

    if(otherLoader) {
        // 针对scss进行css-module处理
        if(otherLoader.loader == 'sass-loader'){
            baseLoaders[0] = {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            }
        }

        baseLoaders.push(otherLoader);
    }

    baseLoaders.unshift(MiniCssExtractPlugin.loader);

    return baseLoaders;
};

/**
 * babel antd 支持antd-mobile 配置
 * @param config
 * @return {*}
 */
const antdMobile = (config) => {
    /**
     * 自定义antd的样式
     * @type {{"@primary-color": string, "@font-size-base": string, "@body-background": string, "@layout-body-background": string}}
     */
    const customAntdStyle = {};

    config.module.rules.push({
        test: /\.less/,
        use: formatStyleLoader({
            loader: 'less-loader',
            options: {
                sourceMap: true,
                modifyVars: customAntdStyle
            }
        })
    });

    config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader"){
            // `style: true` for less
            // babel-plugin-import
            rule.options.plugins.push(['import', {libraryName: 'antd-mobile', 'libraryDirectory': 'es', style: true}]);

            return rule;
        }

        return rule;
    });

    return config;
};



/**
 * 组装webpack config
 * @return {*}
 */
module.exports = (pipeNodes = []) => {
    const config = assemble([
        ...pipeNodes,
        pipe.base,
        pipe.staticResource,
        pipe.css,
        pipe.scss,
        // pipe.babelAntd,
        antdMobile,
        pipe.babelReact,

        pipe.miniCssExtractPlugin,
        pipe.provideReactPlugin,
        // pipe.autoDllReactPlugin,
        pipe.webpackbarPlugin,

        resolve,
        output,
        entry,
    ]);

    return config;
};
