// JavaScript Document

$(document).ready(function(){
    // 我有把Howard的database複製一份起來、所以網址會跟你不一樣
    //var howarddb = new Firebase("https://tainanfood.firebaseio.com/");
    var connectdb = new Firebase("https://food-text.firebaseio.com/");

    // 讀取HowardDB寫入我自己的DB
    /*howarddb.on("value",function(snapshot){
        var data = snapshot.val();
        // console.log(data);
        connectdb.set(data);
    })*/

    connectdb.on("child_added",function(snapshot){
        var data = snapshot.val();

        // 建一個tainanrestaurant物件 裡面建一個key:food（value:data剛好是陣列）把所有資料裝起來
        var tainanrestaurant = {};
        tainanrestaurant.food = data;
        console.log(tainanrestaurant);
        // id=tpl是我在html裡建的樣板
        var template = $('#tpl').html();
        // 要把樣板跟資料組合起來
        var rendered = Mustache.render(template, tainanrestaurant);
        // 組合完畢丟進剛建立的容器裡 id=el render
        $('#el').html(rendered);

    });
});
