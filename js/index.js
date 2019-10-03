window.onload = function () {
    let toolbar = document.querySelector('.toolbar');
    let nav = document.querySelector('.nav');
    let myMenu = document.querySelector('#myMenu');
    console.log(toolbar);
    console.log(nav);
    new fullpage('#fullpage',{
        //options here
        // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#000', '#000','#f0f','#ff0','#ff0'],
        verticalCentered:false,
        //使字置顶
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage','sixthPage','seventhPage'],
        menu: '#myMenu',
        onLeave: function (origin, destination, direction) {
            // console.log(origin, destination, direction);
            if(destination.isFirst){
                //第一层
                toolbar.style.display = "block";
                nav.style.top = "42px";
                myMenu.style.display = "none";
            }else {
                //不是第一层
                toolbar.style.display = "none";
                nav.style.top = "0";
                myMenu.style.display = "block";
            }
        }
    });
    let items = document.querySelectorAll('#sc4 li');
    let imgs = document.querySelectorAll("#sc4 img");
    let h3 = document.querySelectorAll('#sc4 h3');
    // console.log(h3);
    // console.log(imgs);
    // console.log(items);
    for (let i = 0; i< items.length; i++){
        let item = items[i];
        item.onmouseenter = function () {
            // console.log(1);
            items[0].style.width = "20%";
            items[1].style.width = "20%";
            items[2].style.width = "20%";
            items[i].style.width = "60%";
            imgs[i].style.opacity = 1;
            h3[i].style.opacity = 0;
            if (i === 0 ){
                imgs[0].style.left = 0;
            } else if(i === 2){
                imgs[2].style.right = 0;
            }
        };
        item.onmouseleave = function () {
            items[0].style.width = "33%";
            items[1].style.width = "34%";
            items[2].style.width = "33%";
            imgs[i].style.opacity = 0.5;
            h3[i].style.opacity = 1;
            if (i === 0 ){
                imgs[0].style.left = "-150px";
            } else if(i === 2){
                imgs[2].style.right = "-150px";
            }
        }
    }
}