import { src, dest, watch, series, parallel } from 'gulp';
import webpack from 'webpack-stream';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import gulpif from 'gulp-if';
import del from 'del';
import browserSync from "browser-sync";
import zip from "gulp-zip";
const PRODUCTION = yargs.argv.prod;

const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: "http://localhost:8888/ryanslowe",
  });
  done();
};

export const reload = done => {
  server.reload();
  done();
};

export const styles = () => {
  return src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility: 'ie8'})))
    .pipe(dest('dist/css'))
    .pipe(server.stream());
}

export const scripts = () => {
  return src('src/js/script.js')
    .pipe(webpack({
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: []
              }
            }
          }
        ]
      },
      mode: PRODUCTION ? 'production' : 'development',
      output: {
        filename: 'script.js'
      },
      externals: {
        jquery: 'jQuery'
      },
    }))
    .pipe(dest('dist/js'));
}

export const images = () => {
  return src('src/uploads/*.png')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('dist/images'));
}

export const clean = () => del(['dist']);

export const watchForChanges = () => {
  watch('src/scss/*.scss', styles);
  watch('src/js/**/*.js', series(scripts, reload));
  watch('src/images/**/*.{png}', series(images, reload));
  watch("**/*.php", reload);
}


export const compress = () => {
    return src([
      "**/*",
      "!node_modules{,/**}",
      "!bundled{,/**}",
      "!src{,/**}",
      "!.babelrc",
      "!.gitignore",
      "!gulpfile.babel.js",
      "!package.json",
      "!package-lock.json",
      ])
      .pipe(zip(`ryanlisa.zip`))
      .pipe(dest('bundled'));
    };

export const dev = series(clean, parallel(styles, scripts, images), serve, watchForChanges);
export const build = series(clean, parallel(styles, scripts, images), compress);
export default dev;