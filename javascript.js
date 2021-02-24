/*ツイートの長さ*/
var tweet_length;

/*作品名*/
var work_name ="";

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
    tweet_product = `${work_name}　#wj${document.getElementById('no').value}\n${document.getElementById('tweetdraft').value}`;

    tweet_length = 140 - tweet_product.length;
    document.getElementById("tweet_length").value =  tweet_length;

    if(tweet_length < 0){
        document.getElementById("tweet_length").classList.add("tweet_length_over");
        }else{
            document.getElementById("tweet_length").classList.remove("tweet_length_over");
    }
}

/*感想欄のクリア*/
function form_clear(){
    document.getElementById("tweetdraft").value = "";
}

setInterval(realtime, 100);