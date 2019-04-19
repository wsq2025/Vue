<template>
    
</template>

<script>
export default {

}

//*号函数geranator函数，返回遍历器对象,使用于异步处理
//yield为代码执行的暂停标志
function es6Study(){
    let y;
    var func = function(time){
        setTimeout(function(){
            console.log(time,"on");
            y.next(time);

        },time);
        
    };
    var gen = function * genarator(){
        var f1 = yield func(3000);
        console.log('f1 :',f1);
        var f2 = yield func(1000);
        console.log('f2 :',f2);
    };
    y = gen();
    y.next();


    //Promise函数，有两种状态resolve(已完成),reject(未完成), 使用于异步操作
    function p1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("aaaa");
                resolve(123);
            },3000);
        });
    };
    function p2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("bbbb");
                resolve(234);
            },3000);
        });
    };
    function p3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("cccc");
                reject(345);//返回异常
            },3000);
        });
    };
    function p4(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("dddd");
            },3000);
        });
    };
    
    //通过resolve和reject两个状态来依次调用函数
    p1().then(p2).then(p3).then(function(data){
        console.log('收到参数：'+data);
    }).catch(function(err){
        console.log('出错：'+err);
        if(err==123){
            p3().then(p4);
        }
    })
}
</script>

<style>

</style>
