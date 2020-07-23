/**
 * Nos traemos los modulos que necesitamos para 
 * compilar SASS y PUG
*/
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoplefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');
const { watch } = require('gulp');

const paths = {
    pug: {
        src: 'modules_pug/index.pug',
        dest: './',
        watch: './modules_pug/**/*.pug'
    },
    sass: {
        src: 'modules_scss/**/*.scss',
        dest: 'styles/',
        watch: 'modules_scss/**/*.scss'
    }

}
/**
 *Tarea para compilar pug 
 */
function compilePug() {
    return gulp.src(paths.pug.src)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.pug.dest))
}

/**
 *Tarea para compilar sass 
 */

function compileSass() {
    return gulp.src(paths.sass.src)
    .pipe(sass(
        //Opciones para identitar el codigo
        {
            outputStyle: "expended"
        }))
    .pipe(autoplefixer())
    .pipe(gulp.dest(paths.sass.dest))
}

function watchCompile() {
   watch(paths.pug.watch,compilePug) 
   watch(paths.sass.watch,compileSass) 
}

exports.default = watchCompile