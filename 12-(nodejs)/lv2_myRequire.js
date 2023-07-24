/*
使用`module._load`加载模块
使用`module.__resolveFilename` 将相对路径=>绝对路径+文件后缀
缓存模块 `module._cache`
 新建一个模块 `new Module`;Module有两个主要属性id(路径)， exports={}
使用`tryModuleLoad`尝试加载模块
*/
let path = require('path');
let fs = require('fs');
let vm = require('vm');

function Module(path){
    this.id = path;
    this.exports = {};
}
//`Module.wrap`包裹读取的字符串内容；
Module.wrapper = [
    '(function(exports, require, module, __filename,__dirname){',
    '})'
]
Module.extensions = {
    '.js': function(module) {
      let content = fs.readFileSync(module.id, 'utf8');
      let fnStr = Module.wrapper[0] + content + Module.wrapper[1];

      //`runInThisContext`运行包裹后的字符串；将字符串转为函数
      let wrapperFn = vm.runInThisContext(fnStr);
      //运行函数，并将this.exports（默认空对象）作为this绑定到函数的this上
      wrapperFn.call(module.exports, module.exports, req, module, __filename, __dirname);
      // 该方法是用户自定义给module.exports赋值；
    }, 
    '.json': function(module) {
      let json = fs.readFileSync(module.id, 'utf8');
      module.exports = json;
    },
    '.node': {
      //
    }
}
function tryModuleLoad(module) {
    let extension = path.extname(module.id);
  
    Module.extensions[extension](module);
    //通过`Module._extensions`上后缀对应的方法加载模块->读取文件
}
Module._cache = {};

function req(modulePath) {
    let resolvedPath = path.resolve(modulePath);
    // 如果路径的文件未写扩展名;需要按照默认扩展名依次查找
    let i = 0;

    function findFilePath(parsePath) {
      try {
        fs.accessSync(parsePath);
        return parsePath;
      } catch(e){
        let extensions = Object.keys(Module.extensions);
        let tempPath= resolvedPath + extensions[i++];
        return findFilePath(tempPath);
      }
    }

    let absolutePath = findFilePath(resolvedPath);
    if(Module._cache[absolutePath]) {
      return Module._cache[absolutePath].exports;
    }
    const module = new Module(absolutePath);
    tryModuleLoad(module); //使用`tryModuleLoad`尝试加载模块
    Module._cache[absolutePath] = module;
    return module.exports;
}
console.log(req('./1'));