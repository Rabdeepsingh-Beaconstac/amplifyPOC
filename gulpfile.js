// import nunjucksRender from 'gulp-nunjucks-render';
// import gulp from 'gulp';

var gulp = require("gulp");
var nunjucksRender = require("gulp-nunjucks-render");

var COMPILE = {
    SRC: ['src/**/*.html', 'src/**/*.php'],
    DEST: 'webroot'
};

gulp.task('render', async function () {
    try {
        // reviews = await fetchQRCGReviewsFromDatastore();
        // reviewsUptoLimitValue = await reduceReviewstoLimitValue(reviews.data);
        // reviewsUptoLimitValue = JSON.parse(JSON.stringify(reviewsUptoLimitValue).replace(/'/g, '&apos;'));
        // jsonSchema = await createQRCGJSONSchema(reviewsUptoLimitValue, reviews.data);

        // faqJsonSchema = await createQRCGFAQSchema(faqJson);
        // faqJsonSchemaBuyQr = await createQRCGFAQSchema(faqJson);
        // product_Data = await fetchProductDetails();
        // product_Data = JSON.parse(JSON.stringify(product_Data).replace(/'/g, '&apos;'));
    } catch (e) {
        await Promise.reject(new Error(e));
    }
    return gulp.src(COMPILE.SRC)
        .pipe(nunjucksRender({
            path: ['src', 'src/layouts'],
        }))
        .pipe(gulp.dest(COMPILE.DEST));
});

gulp.task('watch', function () {
    gulp.watch(COMPILE.SRC, gulp.series('render'));
});
