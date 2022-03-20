document.getElementById('link').innerHTML = '\
    <li>\
        <a id="btnEnter1" href="javascript:void(0)" class="gray">未满18岁</a>\
    </li>\
    <li>\
        <a id="btnEnter2" href="javascript:void(0)" class="active">已满18+</a>\
    </li>\
    <li>\
        <a id="btnEnter3" href="javascript:void(0)">备用网址1</a>\
    </li>\
    <li>\
        <a id="btnEnter4" href="javascript:void(0)">备用网址2</a>\
    </li>\
    <li>\
        <a id="btnEnter5" href="javascript:void(0)">备用网址3</a>\
    </li>\
';
document.getElementById('email').innerHTML = 'xxdd0.cc@gmail.com';
document.getElementById('btnEnter1').onclick = function() {
    window.location.href = 'https://www.baidu.com';
}
document.getElementById('btnEnter2').onclick = function() {
    window.location.href = 'https://5.xxdd52.cc';
}
document.getElementById('btnEnter3').onclick = function() {
    window.location.href = 'https://6.xxdd52.cc';
}
document.getElementById('btnEnter4').onclick = function() {
    window.location.href = 'https://7.xxdd52.cc';
}
document.getElementById('btnEnter5').onclick = function() {
    window.location.href = 'https://8.xxdd52.cc';
}
