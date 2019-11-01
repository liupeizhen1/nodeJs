let gulp = require('gulp'); // gulp包
let concat = require('gulp-concat'); //合并文件的
let minifyHtml = require('gulp-minify-html'); //压缩html
let uglify = require('gulp-uglify'); //压缩JS
let minifyCss = require('gulp-minify-css'); //压缩CSS 
let rename = require('gulp-rename');//重命名
let minifyImg = require('gulp-imagemin');//压缩图片
let babel = require('gulp-babel'); //ES6转ES5
let reload = require('gulp-connect'); //浏览器自动刷新；
let load = require('gulp-load-plugins');//自动加载
gulp.task('lala',function(done){ //试试
    console.log('执行任务中');
    done();
})
gulp.task('default',function(done){ //默认 gulp返回的
    console.log('听说了吗');
    done();
})
gulp.task('copy',function(done){ //拷贝CSS到指定文件夹
    gulp.src('./css/*.css')
    .pipe(gulp.dest('./dist'));
    done()
});
gulp.task('minify',function(){ //压缩html
    return gulp.src('./*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist'))
    .pipe(reload.reload())
});
gulp.task('copyJs',function(){ //拷贝JS到指定文件夹
    return gulp.src('./js/*.js','!./js/j*.js')
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('concatJs',function(){ //合并JS
    return gulp.src(['./js/*.js','!./js/j*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(reload.reload())
})
gulp.task('uglify',function(){ //压缩JS
    return gulp.src('./dist/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})
gulp.task('minifyCss',function(){ //压缩CSS
    return gulp.src('./dist/css/main.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('babel',function(){ //ES6转ES5
    return gulp.src('./js/c*.js')
    .pipe(babel({presets: ['@babel/preset-env']})).pipe(gulp.dest('./js'));
})

gulp.task('concatCss',function(done){ //合并CSS
    gulp.src('./css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload.reload())
    done();
});

gulp.task('reload',function(done){ //自动更新
    reload.server({
        livereload: true,  
    });
    done();
});

gulp.task('listen',function(done){ //监听啊
    gulp.watch('./css/*.css',gulp.series('concatCss'));
    gulp.watch('./js/*.js',gulp.series('concatJs'));
    gulp.watch('./*.html',gulp.series('minify'));
    done();
});

gulp.task('run',gulp.series('reload','listen'));