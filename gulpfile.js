/**
 * Created by Administrator on 2016/2/21.
 */
var gulp = require('gulp'),      //gulp
    concat = require('gulp-concat'), //合并文件
    uglify = require('gulp-uglify'),   //压缩js
    clean = require('gulp-clean'),     //清除文件
    less = require('gulp-less'),      //编译less
    minifycss = require('gulp-minify-css'),    //压缩css
    sourcemaps = require('gulp-sourcemaps'),
    order = require('gulp-order'),             //按顺序合并js
    stripDebug = require('gulp-strip-debug');   //debug

const config={
        JS_WATCH:['src/js/*.js'],
        LESS_WATCH:['src/less/*.less']
};
//帮助
gulp.task('help',function(){
    console.log('	gulp p	  文件生产环境压缩打包');

    console.log('	gulp			    文件变动监控打包');

    console.log('	gulp help			gulp参数说明');

    console.log('	gulp less			less');

    console.log('	gulp less-min			编译压缩less');

})
//生产环境输出
 gulp.task('p',['min', 'less-min', 'js-min']);

//开发环境输出
gulp.task('default',['watch-less', 'watch-js']);

//监视编译js
gulp.task('watch-js',function(){
     gulp.watch(config.JS_WATCH,['js'])
})
//监视less
gulp.task('watch-less',function(){
    gulp.watch(config.LESS_WATCH,['less']);
})

gulp.task('min',function(){
    gulp.src(config.JS_PATH)   //
        .pipe(uglify({outSourceMap:false}))
        .pipe(stripDebug())  //去除console
        .pipe(uglify({outSourceMap:false}))  //压缩js
        .pipe(concat('plugin.min.js'))
        .pipe(gulp.dest('demo/js'));
});
//jss编译，普通版（未压缩）
gulp.task('js',function(){
    gulp.src(config.JS_WATCH)
        //.pipe(stripDebug())  //console
        .pipe(concat('alertify.js'))
        .pipe(gulp.dest('demo/js'));
});
//js编译，压缩版
gulp.task('js-min',function(){
    gulp.src(config.JS_WATCH)   //
        .pipe(uglify({outSourceMap:false}))
        .pipe(stripDebug())  //去除console
        .pipe(uglify({outSourceMap:false}))  //压缩js
        .pipe(concat('alertify.min.js'))
        .pipe(gulp.dest('demo/js'));
})
//less编译，普通版（未压缩）
gulp.task('less',function(){
    gulp.src(config.LESS_WATCH)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(concat('alertify.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('demo/css'));
})
//less编译，压缩版
gulp.task('less-min',function(){
    gulp.src(config.LESS_WATCH)
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(concat('alertify.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('demo/css'))
})
