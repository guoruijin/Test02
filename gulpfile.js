var gulp = require("gulp");

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// 创建一个静态的服务器
gulp.task('browser-sync',function() {
    browserSync.init({
        server:{
            baseDir:"src/"
        }
    });
});

var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var concat = require('gulp-concat');
gulp.task("scss", function() {
    gulp.src("src/scss/**/*.scss")
    .pipe(sass())//编译scss文件
    .pipe(gulp.dest("src/css"))
    //.pipe(concat("main.min.css"))//合并
    .pipe(cssnano())//压缩
    .pipe(gulp.dest("dist/css"))
       .pipe(reload({stream:true}));
});



// 压缩合并js文件，并放到上线环境中
var uglify = require("gulp-uglify");
gulp.task("js", function(){
    gulp.src(["src/js/*.js"])
        // .pipe(concat("main.min.js"))//合并
        .pipe(uglify())//使用uglify进行压缩，并保留部分注释
        .pipe(gulp.dest("dist/js"));
});


gulp.task("libs",function(){
    gulp.src("src/libs/js/*.js")
    .pipe(gulp.dest("dist/libs/js"));
    gulp.src("src/libs/css/*")
    .pipe(gulp.dest("dist/libs/css"));
})


//图片
var imagemin = require("gulp-imagemin");//优化图片
var cache = require("gulp-cache");//可以减少重复压缩
gulp.task("images", function() {
    //指明源文件路径、并进行文件匹配
    gulp.src("src/images/**/*.{png,jpg,gif}")
        .pipe(cache(imagemin({
            progressive:true,
            svgoPlugins:[{removeViewBox:false}],
            interlaced: true
        })))
        .pipe(gulp.dest("dist/images"));
});




//发布静态页面到dist目录中
var htmlmin = require("gulp-htmlmin");
gulp.task("html", function() {
    gulp.src("src/**/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest("dist"));
});




//监控文件变化 
gulp.task("watch", [ "browser-sync", "scss", "js", "images", "html", "libs"],function() {    
    gulp.watch("src/scss/**/*.scss", ["scss"]);
    gulp.watch("src/js/**/*.js",["js"]);
    gulp.watch('src/images/**/*.*',["images"]);
    gulp.watch('src/**/*.html',["html"]);
    gulp.watch("src/**/*.+(html|js)").on("change", reload);
});

gulp.task("default", function() {  
    gulp.start(["scss", "js", "images", "html","browser-sync", "watch", "libs"]);  
});





