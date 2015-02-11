module.exports = {
    browserify: {
        command: './node_modules/.bin/browserify -t brfs --entry public/js/app.js --debug > static/bundle.js'
    }
};
