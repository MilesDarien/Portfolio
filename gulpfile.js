		
var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");
// Put this after including our dependencies
	
var paths = {
	
    styles: {
	
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
	
        src: "./scss/*.scss",
	
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
	
        dest: "./"
	
    }
	
};
function style() {
	
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            // Add browsersync stream pipe after compilation
            .pipe(browserSync.stream())
    );
}
// Add browsersync initialization at the start of the watch task	
// A simple task to reload the page
function reload() {
    browserSync.reload();
}	
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch("./*.html", reload);
    gulp.watch("./style.css", reload);
	
}
	
exports.watch = watch
	
 