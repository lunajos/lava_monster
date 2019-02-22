'use strict';

const gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*']
});

const path = {
	styles: {
		src: './views/**/*.scss',
		dest: './public'
	}
};


gulp.task('sass', function  (done) {
	gulp.src(path.styles.src)
	.pipe(plugins.sass().on('error', plugins.sass.logError))
	.pipe(gulp.dest(path.styles.dest));

	done();
});

gulp.task('@sass', function (done) {
	gulp.watch(path.styles.src, gulp.parallel(['sass']));

	done();
});
