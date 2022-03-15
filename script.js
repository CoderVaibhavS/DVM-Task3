document.querySelector('.visit-1').addEventListener('mouseover', function run(){
    document.querySelector('.left-1').style.transform = 'translateX(-5px)';
    document.querySelector('.visit-1').addEventListener('mouseout', function run(){
        document.querySelector('.left-1').style.transform = 'translateX(0)';
    })
})

document.querySelector('.visit-2').addEventListener('mouseover', function run(){
    document.querySelector('.right-1').style.transform = 'translateX(5px)';
    document.querySelector('.visit-2').addEventListener('mouseout', function run(){
        document.querySelector('.right-1').style.transform = 'translateX(0)';
    })
})

/**************************************************************************************/
// document.querySelector('#wheelchair').addEventListener('mouseover', function run(){
//     document.querySelector('.tooltip-wrap').style.display = 'block';
// })

// document.querySelector('#wheelchair').addEventListener('mouseout', function run(){
//     document.querySelector('.tooltip-wrap').style.display = 'none';
// })

// document.querySelector('#news-events').style.height = document.querySelector('.news-events').style.height;
// console.log(document.querySelector('#news-events').style.height);
// console.log(document.querySelector('.news-events').style.height);

function change_content() {
    var  visit1, visit2;
    visit1 = document.querySelector('.image-1');
    visit2 = document.querySelector('.image-2');
    console.log(visit1);

    if(visit1.style.display != 'none') {
        visit1.style.display = 'none';
        visit2.style.display = 'flex';
    }
    else{
        visit2.style.display = 'none';
        visit1.style.display = 'flex';
    }
}

document.querySelector('#news-content-1').addEventListener('mouseover', function run(){
    document.querySelector('#news-content-1').childNodes[1].style.transform = 'translateY(-10px)';
})
document.querySelector('#news-content-1').addEventListener('mouseout', function run(){
    document.querySelector('#news-content-1').childNodes[1].style.transform = 'translateY(0)';
})
document.querySelector('#news-content-2').addEventListener('mouseover', function run(){
    document.querySelector('#news-content-2').childNodes[1].style.transform = 'translateY(-10px)';
})
document.querySelector('#news-content-2').addEventListener('mouseout', function run(){
    document.querySelector('#news-content-2').childNodes[1].style.transform = 'translateY(0)';
})
document.querySelector('#news-content-3').addEventListener('mouseover', function run(){
    document.querySelector('#news-content-3').childNodes[1].style.transform = 'translateY(-10px)';
})
document.querySelector('#news-content-3').addEventListener('mouseout', function run(){
    document.querySelector('#news-content-3').childNodes[1].style.transform = 'translateY(0)';
})
document.querySelector('#news-content-4').addEventListener('mouseover', function run(){
    document.querySelector('#news-content-4').childNodes[1].style.transform = 'translateY(-10px)';
})
document.querySelector('#news-content-4').addEventListener('mouseout', function run(){
    document.querySelector('#news-content-4').childNodes[1].style.transform = 'translateY(0)';
})
document.querySelector('#news-content-5').addEventListener('mouseover', function run(){
    document.querySelector('#news-content-5').childNodes[1].style.transform = 'translateY(-10px)';
})
document.querySelector('#news-content-5').addEventListener('mouseout', function run(){
    document.querySelector('#news-content-5').childNodes[1].style.transform = 'translateY(0)';
})