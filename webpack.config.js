import webpack from 'webpack'

import path from 'path'
import { fileURLToPath } from 'url'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = 'production'


const config = {
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),

    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //if you see any jsx files use the babel loader
            },
        ]
    },
    optimization: {
        splitChunks: {
            name: 'vendor', // will not rebuild node_modules
            chunks: 'all',
        },
    },
    devtool: 'source-map'

}


export default function() {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}