/**
 * Nos traemos los modulos que necesitamos para 
 * compilar SASS y PUG
*/
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoplefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');
/**
 *  Creamos la tarea en gulp para compilar SASS
 * "Nombre tarea",funcion a ejecutar
*/
gulp.task('sass', function () {
    //Ruta a buscar los archivos
    gulp.src('./modules_scss/**/*.scss')
        .pipe(sass(
            //Opciones para identitar el codigo
            {
                outputStyle: "expended"
            }))
        .pipe(autoplefixer())
        .pipe(gulp.dest('./styles'))
});

/**
 *Tarea para compilar pug 
 */
gulp.task('pug', function () {
    gulp.src('./modules_pug/index.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./'))
})

/***
 *Tarea por defecto 
 */
gulp.task('default', function () {
    gulp.watch('./modules_scss/**/*.scss',["sass"]);
    gulp.watch('./modules_pug/**/*.pug',["pug"]);
})
