var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var path = require('path');
var less = require('gulp-less');

/**
 * Build (Webpack)
 */

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); 
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*.js', ['build']);
});

gulp.task('less', function(){
  let isSuccess = true;
  return gulp.src('./less/app.less')
    .pipe(less())
    .on('error', function handleError(error){
      isSuccess = false;
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./public/css'))
    .on('end', (success)=>{
      if(isSuccess){
        console.log('---------------LESS Compilation Complete----------------');
      }
    });
    
});

gulp.task('watch:less', function() {
  return gulp.watch('./less/**/*.less', ['less']);
});

/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  nodemon({
    exec: 'node ./node_modules/babel-cli/bin/babel-node.js ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});


/**
 * Main tasks
 */

gulp.task('serve', ['serve:node']);
gulp.task('watch', ['build', 'watch:build', 'less', 'watch:less']);
gulp.task('default', ['serve']);
