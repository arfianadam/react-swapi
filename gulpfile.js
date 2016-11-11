var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	webpack = require('webpack-stream'),
	historyFallback = require('connect-history-api-fallback'),
	imagemin = require('gulp-imagemin'),
	browserSync = require("browser-sync").create(),
	gutil = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber')

var assetsPath = './src/assets/'

gulp.task('sass', () => {
	return gulp.src(assetsPath + 'app.scss')
		.pipe(plumber((err) => {
				gutil.log(err.plugin)
			}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./public/assets/css"));
})

gulp.task('js-client', () => {
	return gulp.src('./src/index.js')
		.pipe(plumber())
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./public'))
})

gulp.task('js-server', () => {
	return gulp.src('./server.js')
		.pipe(plumber())
		.pipe(webpack(require('./webpack.server.config.js')))
		.pipe(gulp.dest('./'))
})