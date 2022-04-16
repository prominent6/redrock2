const { compilation } = require('webpack');
const fs = require('fs');
const exec = require('child_process').exec;

class ReadmeWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap('ReadmeWebpackPlugin', compilation => {
            exec('git log', (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    return;
                }
                fs.writeFile('./dist/README.md', stdout + 'stderr:' + typeof stderr, () => { ReadmeWebpackPlugin.log("写入成功！") })
            });
        })
    }
}
module.exports = ReadmeWebpackPlugin