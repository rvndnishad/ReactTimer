var webpack= require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals : {
    jquery: 'jQuery'
  },
  plugins : [
    new webpack.ProvidePlugin({
      '$' : 'jquery',
      'jQuery' : 'jquery'
    })
  ],
  output : {
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve : {
    root: __dirname,
    alias: {
      applicationStyles:'app/styles/app.scss',
      Main : 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock:'app/components/Clock.jsx',
      Countdown:'app/components/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Timer:'app/components/Timer.jsx',
      Controls:'app/components/Controls.jsx'
    },
    extensions : ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query : {
           presets : ['react', 'es2015', 'stage-0'],
           compact: false
        },
        test : /\.jsx?$/,
        exclude: /(node_modules | bower_components)/

      }
    ]
  },
  devtool: 'eval-source-map'
};
