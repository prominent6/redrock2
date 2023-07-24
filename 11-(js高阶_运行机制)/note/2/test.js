const { NONAME } = require('dns')
const http = require('http')
const fs = require('fs').promises //方法转化为promise
const crypto = require('crypto')
const server = http.createServer((req, res) => {
    res.end("xxxx")
    if (req.url === '/img') {
        let img = await.readFile(jpg)
        res.end(img)
    }
    if (req.url === '/js') {
        let test = await fs.readFile(js)
        let atag = crypto.createHash('md5').update(test).digest('hex')
        let if_none_match = null
        if (req.headers['if-none-match']) {
            if_none_match = req.headers['if-none-match']
        }
        if (if_none_match != etag) {
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                //强制缓存20秒
                'Cache-Control': 'no-cache',
                'Etag': etag
            })
        } else {
            res.writeHead(304),
                res.end()
        }
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            //强制缓存20秒
            // 'Cache-Control': 'max-age=20'
            //Last-Modified / If-Modified-Since
        })
        res.end(test)

    }
    if (req.url === '/json') {
        let json = await fs.readFile(json)
            //解决跨域问题
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        res.end(json)
    }
})
server.listen(3000, () => {
    console.log("成功");
})