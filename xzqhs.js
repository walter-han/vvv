


//这里是选择器函数，可以选取body下任意元素
function xzq(Element,child){
        function del(obj){
var n =[]
for(var sb=0;sb<obj.length;sb++){ for(var sb2=0;sb2<obj.length;sb2++){  ;if(sb==sb2){continue};if(obj[sb]===obj[sb2]){ n.push(sb);n.push(sb2); }  }           }
for(var sb3=0;sb3<n.length;sb3++){for(var sb4=0;sb4<n.length;sb4++){ if(sb3==sb4){continue};if(n[sb3]==n[sb4]){n.splice(sb4,1,'重复的数字就删了吧')}   }     }
for(sb5=0;sb5<n.length;sb5++){ if(isNaN(n[sb5])){n.splice(sb5,1);sb5--}  }    
for(var sb6=0;sb6<n.length;sb6++){ for(var sb7=0;sb7<n.length;sb7++){ if(sb6==sb7){continue};if(obj[n[sb6]]==obj[n[sb7]]){n[sb7]+='我删还不行吗'}   }   }    
for(var sb8=0;sb8<n.length;sb8++){ if(isNaN(n[sb8])){n.splice(sb8,1);sb8--}   } 
for(var sb9=0;sb9<n.length;sb9++){ obj.splice(n[sb9],1);}
            }   


    if(typeof(Element)=='string'){ 
            if(child===false)
                {
                    if(Element.slice(0,1)=='#'){return document.getElementById(Element.replace('#',''));}
                    else if(Element.slice(0,1)=='.'){var dgarray=[];var body =document.getElementsByTagName('body'); for(var i=0;i<body[0].children.length;i++){if(body[0].children[i].length===0){continue}; if(body[0].children[i].className==Element.replace('.','')){dgarray.push(body[0].children[i])}; function dg(o){ if(o.children.length===0){return}; for(var i=0;i<o.children.length;i++){ if(o.children[i].className==Element.replace('.','')){dgarray.push(o.children[i])}; dg(o.children[i]);  }    } ;dg(body[0].children[i]);       };del(dgarray); return dgarray  }
                    else{var Earray=[];var aaa=document.getElementsByTagName(Element);for(var i2=0;i2<aaa.length;i2++){Earray.push(aaa[i2]);}return Earray;}       
                }//这里是第一遍获取元素的分支

                                 }     //这里是第一遍获取元素的分支    

    
    else                         {
    
            /*先判断是否为ID元素，ID元素的length都是unedfined,取反就能走进这个ID元素下的获取元素分支*/
            if(!Element.length)
                {   
                    //在确认第一个元素为ID的情况下还有需要获取的元素是  标签元素 or class元素  所以if判断下第二个参数的前缀
                    if(child.slice(0,1)=='.'){var dg2=[];if(Element.children.length==0){return};for(var i3=0;i3<Element.children.length;i3++){if(Element.children[i3].className==child.replace('.','')){dg2.push(Element.children[i3]);};function dg3(o){if(o.children.length===0){return};for(var i=0;i<o.children.length;i++){if(o.children[i].className==child.replace('.','')){dg2.push(o.children[i])};dg3(o.children[i]);};  }; dg3(Element.children[i3]);     }; if(dg2.length===0){return false};del(dg2);return dg2;   }
                    else{var dg2=[];if(Element.children.length==0){return};for(var i4=0;i4<Element.children.length;i4++){if(Element.children[i4].tagName.toLowerCase()==child){dg2.push(Element.children[i4]);};function dg4(o){if(o.children.length===0){return};for(var i=0;i<o.children.length;i++){if(o.children[i].tagName.toLowerCase()==child){dg2.push(o.children[i])};dg4(o.children[i]);};  }; dg4(Element.children[i4]);     }; if(dg2.length===0){return false};del(dg2);return dg2;     }
               //这里是选取ID元素下标签元素，所以是不带.的 child tagName值return 大写字母，必须用js自带方法toLowerCase()转成小写才能识别输入的第二参数，或者将第二参数设置为只能传入大写字符串
                }  
            else{
                    
                    if(child.slice(0,1)=='.'){   var dg2=[];for(var i5=0;i5<Element.length;i5++){if(Element[i5].children.length==0){continue};for(var i6=0;i6<Element[i5].children.length;i6++){if(Element[i5].children[i6].className==child.replace('.','')){dg2.push(Element[i5].children[i6])};function dg6(o){if(o.children.length==0){return};for(var i=0;i<o.children.length;i++){if(o.children[i].className==child.replace('.','')){dg2.push(o.children[i])};dg6(o.children[i]);  } }; dg6(Element[i5].children[i6]); } }    if(dg2.length===0){return false};del(dg2); return dg2; } /*子元素是class的情况*/
                    else{var dg2=[];for(var i5=0;i5<Element.length;i5++){if(Element[i5].children.length==0){continue};for(var i6=0;i6<Element[i5].children.length;i6++){if(Element[i5].children[i6].tagName.toLowerCase()==child){dg2.push(Element[i5].children[i6])};function dg7(o){if(o.children.length==0){return};for(var i=0;i<o.children.length;i++){if(o.children[i].tagName.toLowerCase()==child){dg2.push(o.children[i])};dg7(o.children[i]);  } }; dg7(Element[i5].children[i6]); } }    if(dg2.length===0){return false};del(dg2); return dg2;}
                }      //8月9日凌晨4.25 先写到这把 这个非ID下选择器部分代码睡一觉再写  
                                 }         //这是第二遍获取元素的部分,只为了获取第一遍获取元素下的子元素，分两种情况，第一种第一参是ID元素，第二种是其他元素


} //这里是选择器函数完结


var sbc=document.getElementsByTagName('ul')
//alert(sbc[0].textContent)
alert(sbc[0].children.length)
//var obj=xzq(xzq('li',false),'li');
//var obj=xzq('li',false)
//alert(obj[1].children[0])


//alert(obj);  这个函数要获取第一遍的元素的时候 第一个参数只能是字符串，且第二个参数只能是 false， 要想第二遍获取元素下的子元素 第一个参数必须是一个元素不能为字符串且第二个参数是子元素的字符串名称
//且这个函数在选择ID元素的时候绝对不会用第二遍，因为ID只有一个 
// 这个函数不能选取同样的标签元素两遍 譬如li下的li得另外出个函数  经测试 如果某标签下的标签名称直接是这个标签名称一致那么，它的子元素就是空的 即使里面有个和自己同名的标签  DIV,ul,标签除外,一句话 标签别乱写！！！ 在构建网页样式的时候 标签千万不能乱写！！！ 一般没选中就先看看bug控制台
//告一段落了 这个函数写得无至少没有bug  很多东西 都解决了   8月11日 开始学习面对对象JS