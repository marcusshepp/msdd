export default async function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy('src/styles/main.css');
    return {
        input: 'src',
        includes: 'includes',
        layouts: 'layouts',
    };
}
