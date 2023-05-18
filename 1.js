var move=document.querySelector('.center>.button2')
var items=document.getElementsByClassName('items')
var itemsmove=document.getElementsByClassName(`itemsmove`)
var classname0=[]//点击,存0,赋1;
var classname1=['itemsmove i1','itemsmove i2','itemsmove i3','itemsmove i4',
'itemsmove i5','itemsmove i16','itemsmove i15','itemsmove i14',
'itemsmove i6','itemsmove i7','itemsmove i8','itemsmove i13',
'itemsmove i12','itemsmove i11','itemsmove i10','itemsmove i9',]
var maintain=[]
var choice
var tarea=document.getElementsByTagName('textarea')
for(var i=0;i<tarea.length;i++){
    tarea[i].innerText=localStorage.getItem(`${i}`)
}
move.onclick=function(){
    if(items.length==0){//点击鼠标结束
        for(i=0;i<itemsmove.length;i++){//获取结束时的状态
            maintain[i]=window.getComputedStyle(itemsmove[i]).backgroundColor
        }
        while(itemsmove.length != 0){
            var i=itemsmove.length-1
            itemsmove[i].style.backgroundColor=maintain[i]//将结束时样式设置给相应单元
            itemsmove[i].className=classname0[i]  
        }
        //在停止后根据--choosed属性判断哪个块被选中了
        for(i=0;i<items.length;i++){
            if(window.getComputedStyle(items[i]).backgroundColor=='rgb(246, 196, 69)'){
                choice=i//停在i上了,通过操作赋予类名使其增加新的样式
                items[i].className=items[i].className+` items${i+1}`
            }
        }
        $('.button2').addClass('disappear2')
        $('.button1').removeClass('disappear1')
        $('.button3').removeClass('disappear3')
        $('svg').removeClass('disappear1')
        //每次删除display:none时,动画就会重新出现
        $('.button2').text('点我!!!')
    }
    else{//点击鼠标开始
        for(i=0;i<items.length;i++){//将原有类名存放
            classname0[i]=items[i].className
        }
        while(items.length != 0){//赋予新的类名
            var i=items.length-1
            items[i].style.backgroundColor=''//items.removeAttr()
            items[i].className=classname1[i]
        }
        $('.button2').text('媳妇儿不要啊(╥_╥)')
    }
}//实现通过点击改变类名,以到达改变样式的效果
//实现内容输入并保存
//在某个文本域被选中时(即被点击),获取其内容
$('textarea').on('change',function(){
    //判断哪个对象触发了点击事件,获取其索引
    for(var i=0;i<$('textarea').length;i++){
        console.log($('textarea')[i].value)
        localStorage.setItem(i,$('textarea')[i].value)//node.js就是垃圾
    }
})
//点击
$('.button1').click(function(){
    items[choice].className=items[choice].className.replace(` items${choice+1}`,'')
    setTimeout(function(){
        $('.button1').addClass('disappear1')
        $('.button3').addClass('disappear3')
        $('.button2').removeClass('disappear2')
        $('.button2').trigger('click')
    },000)
})
$('.button3').click(function(){
    items[choice].className=items[choice].className.replace(` items${choice+1}`,'')
    $('.button1').addClass('disappear1')
    $('.button3').addClass('disappear3')
    $('.button2').removeClass('disappear2')
    //这里需要加一个弹窗
})

