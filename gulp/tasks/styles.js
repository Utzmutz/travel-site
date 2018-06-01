var gulp = require("gulp");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var postcss = require("gulp-postcss");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var gutil = require("gulp-util");
var mixins = require("postcss-mixins");

gulp.task("styles", function() {
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(plumber({ errorHandler: function(err) {
		notify.onError({
			title: "Gulp error in " + err.plugin,
			message: err.toString()	
		})(err);
		gutil.beep();
	}}))
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])).pipe(gulp.dest("./app/temp/styles"));
});



//.on("error", function(err) {
//		console.log(err.toString());
//		this.emit("end");
//	})