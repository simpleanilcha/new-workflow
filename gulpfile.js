var gulp = require ('gulp'),
  browserSync = require ('browser-sync').create();


// gulp.task('default', function(){
//   console.log('hello! gulp');
// });


gulp.task('default', function(){
    browserSync.init({
      server:''
    });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
});
