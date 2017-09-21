const conf = require('./gulp.conf');
const proxyMiddleware = require('http-proxy-middleware');

var middleware = undefined;
  // uncomment this line to configure a proxy
  middleware = proxyMiddleware('/api/**', {target: 'http://spotippos.vivareal.com', changeOrigin: true, pathRewrite: {'^/api' : ''}});

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      middleware: middleware
    },
    open: false
  };
};
