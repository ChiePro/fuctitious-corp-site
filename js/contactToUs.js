// 送信ボタン
var send_btn = document.getElementById('send_btn');
// email
var email = document.getElementById('email');
// ニックネーム
var nickname = document.getElementById('name');
// スキル
var skills = document.getElementsByName('skill');
// お問合わせ内容
var kanso = document.getElementById('kanso');
// 同意するチェック
var agree_check = document.getElementById('agree');
// 問い合わせ種別
var type = '応募';
// フォーム
var form_table = document.getElementById('form_table');

send_btn.addEventListener('click', event => {
    try{
        // 入力チェック
        if(kanso.value.length < 5 && kanso.value.length > 0){
            alert('お問合わせ内容には5文字以上入力してください。');
            // 例外投げる以外にいいロジック思いつかなかった。（ネストは嫌い）
            throw new Exception;
        // 今はお問い合わせに文字が入っているかどうかでしか判別できない
        } else if(kanso.value.length > 5){
            type = '問合わせ';
        }

        if(agree_check.checked){
            postMessage();
        } else {
            alert('個人情報保護方針をご一読の上、同意するにチェックしてください。');
        }
    }catch{
    }
});

/**
 * postMessage
 * 
 * post a message(for applications, contact us) to the #contact of chiebukuro-dev Workspace in Slack
 * 
 */
function postMessage() {
    
    var header = {
        'Content-Type' : 'application/json',
    };

    var method = 'POST';

    var body = createPayload();
    fetch('https://hooks.slack.com/services/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', {method, header, body})
    .then((res) => {
        console.log('post request');
        var element = "<h1>ありがとうございます！</h1><p>記載いただいたメールアドレスに折り返しご連絡いたします。</p>";
        form_table.innerHTML = element;
    })
    .catch( error => {
        console.log(error);
    });
  };


/**
 * createPayload
 * 
 * create the payload for posting message
 * 
 */
function createPayload(){
    var username = 'contact_to'; //BOTの名前
    var attachments = [];
    if(type == '応募'){
        var activeSkill = '';

        // チェックのついたスキルを文字列結合
        skills.forEach(skill => {
            if(skill.checked){
                activeSkill += skill.value + ', ';
            }
        });
        // 最後のカンマ消したい
        if(activeSkill.length > 0){ activeSkill = activeSkill.slice( 0, -2 ) }

        attachments = [
            {
                color: '#89CEEB', //インデント線の色
                title: '以下の内容で新規の ' + type + ' がありました',//インデント内に表示されるタイトル
                text: 
`*ニックネーム* : ${nickname.value}
*e-mail* : ${email.value}
*スキル* : ${activeSkill}`
            }
        ];
    } else {
        attachments = [
            {
                color: '#89CEEB', //インデント線の色
                title: '以下の内容で新規の ' + type + ' がありました',//インデント内に表示されるタイトル
                text: 
`*ニックネーム* : ${nickname.value}
*e-mail* : ${email.value}
*お問い合わせ内容* : ${kanso.value}`
            }
        ];
    }

    // ペイロードのがっちゃんこ
    var payload = {
        'username': username, 
        'attachments': attachments 
    };
    
    return JSON.stringify(payload);
  }