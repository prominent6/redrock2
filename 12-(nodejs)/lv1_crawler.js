// 用到cheerio库
//目标获取信息是<li></li>标签中的<a></a>的href属性值，以及子标签<img>的_src和alt属性
var http=require('http')
//它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio=require('cheerio');
const { log } = require('console');
//目标地址 要http开头的
var url='https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_e7eaf77aef094c05beacfbfb12f54410';
http.get(url,(res)=>{
    var html='';
    //获取页面数据
    res.on('data',(data)=>{
        html+=data
    })
    //数据获取结束
    res.on('end',()=>{
        //通过过滤页面信息获取实际需求的轮播图信息
        var slideListData=filterSliderList(html);
        //打印信息
        printInfo(slideListData)
    })
}).on('error',()=>{
    console.log('获取数据出错！');
})

// 过滤页面信息
function filterSliderList(html){
    if(html){
        var $=cheerio.load(html);
        //根据id获取轮播图列表信息
        var slideList=$('.slider_wrapper')
        var slideListData=[] //轮播图数据

        //轮播图列表信息遍历
        slideList.find('li').each((item)=>{
            var pic=$(this);
            var pic_href=pic.find('a').attr('href');
            var pic_src=pic.find('a').children('img').attr('src');
            // var pic_alt=pic.find('a').children('img').attr('alt');
            //插入数据
            slideListData.push({
                pic_href:pic_href,
                // pic_alt:pic_alt,
                pic_src:pic_src
            });
        });
        //返回轮播图列表信息
        return slideListData;
    } else {
        console.log('无数据传入！');
    }
}

//打印信息
function printInfo(slideListData){
    var count=0;
    slideListData.forEach((item)=>{
        var pic_src=item.pic_src;
        var pic_href=item.pic_href;
        // var pic_alt=item.pic_alt;
        console.log('第'+(++count)+'个轮播图');
        // console.log(pic_alt);
        console.log(pic_href);
        console.log(pic_src);
        console.log('\n');
    })
}