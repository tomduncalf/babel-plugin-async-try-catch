async function declaration (filename) {
    try {
        let contents = await fs.readFileAsync(filename, 'utf8');
        console.log(contents);
    } catch (error) {
        asyncError.call(this, error);
    }
}
