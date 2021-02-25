/*作品名*/
var work_name ="";

// ツイート文字数
var tweet_length;

/*ツイート内容*/
var tweet_product;

/*作品名取得＆表示*/
function tag(tag_name){
    work_name = tag_name;
    document.getElementById("work_name_display").value = work_name;
}

/*ツイートコピー*/
function copy(){
    document.getElementById("tweet_product_box").value = tweet_product;
    tweet_product_box.select(); 
    document.execCommand("copy");
}

/*自動関数*/
function realtime(){
    // ツイート内容の生成
    tweet_product = `${work_name}　#wj${document.getElementById('no').value}\n${document.getElementById('tweetdraft').value}`;

    // 文字数の計測と表示
    tweet_length = 140 - tweet_product.length;
    document.getElementById("tweet_length").value =  tweet_length;


    // 文字数に応じたスタイル
    var p = document.getElementById('tweet_length');
    if(tweet_length < 0){
        p.style.backgroundColor = "#E73A38";
    }else if(tweet_length < 11){
        p.style.backgroundColor = "#FFAD34";
    }else{
        p.style.backgroundColor = "#07A1EF";
    }
}

/*感想欄のクリア*/
function form_clear(){
    document.getElementById("tweetdraft").value = "";
}

// 自動関数の実行
setInterval(realtime, 100);
