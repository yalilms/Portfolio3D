const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const ip = require('ip')
const portFinderSync = require('portfinder-sync')

const infoColor = (_message) =>
{
    return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`
}

module.exports = merge(
    commonConfiguration,
    {
        stats: 'errors-warnings',
        mode: 'development',
        infrastructureLogging:
        {
            level: 'warn',
        },
        devServer:
        {
            host: '0.0.0.0',
            port: portFinderSync.getPort(8080),
            open: true,
            server: 'http',
            allowedHosts: 'all',
            hot: false,
            watchFiles: ['src/**', 'static/**'],
            static: [
                {
                    watch: true,
                    directory: path.join(__dirname, '../static')
                },
                {
                    watch: true,
                    directory: path.join(__dirname, '../public'),
                    publicPath: '/'
                }
            ],
            client:
            {
                logging: 'none',
                overlay: true,
                progress: false
            },
            setupMiddlewares: (middlewares, devServer) =>
            {
                const port = devServer.options.port
                const protocol = devServer.options.server === 'https' ? 'https' : 'http'
                const localIp = ip.address()
                const domain1 = `${protocol}://${localIp}:${port}`
                const domain2 = `${protocol}://localhost:${port}`

                console.log(`Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`)

                return middlewares
            }
        }
    }
)
