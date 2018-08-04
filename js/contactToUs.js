// 送信ボタン
let send_btn = document.getElementById('send_btn');
// Eメール
let email = document.getElementById('email');
// ニックネーム
let nickname = document.getElementById('nickname');
// スキル
let skills = document.getElementsByName('skill');
// その他スキル
let etcetera_skill = document.getElementById('etcetera_skill');
// お問合わせ内容
let contact_content = document.getElementById('contact_content');
// 同意するチェック
let agree_check = document.getElementById('agree');
// 問い合わせ種別
let content_type = '応募';
// フォーム
let form_table = document.getElementById('top_form_table');
// フォーム種別が応募かどうか
let application_check = document.getElementsByName('example');
// SLACK表示用カラー
const application_color = '#89CEEB';
const contact_color     = '#36a64f';

// 送信ボタンのクリックイベントハンドラ
send_btn.addEventListener('click', () => {
    try {
        // フォーム種別判定
        if ( application_check[1].checked ){
            content_type = '問い合わせ';
        }
        
        if (agree_check.checked) {
            postMessage();
        } else {
            alert('個人情報保護方針をご一読の上、同意するにチェックしてください。');
        }
    } catch {
    }
});

/**
 * postMessage
 * 
 * SLACKにポストする関数
 * 
 */
function postMessage() {
    // webhookにのせる情報の準備
    let header = {
        'Content-Type' : 'application/json',
    };
    let method = 'POST';
    let body = createPayload();

    // まとめる
    let obj = { method, header, body };
    fetch('https://hooks.slack.com/services/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', obj )
    .then(() => {
        console.log('post request');
        let element = "<h1>ありがとうございます！</h1><p>記載いただいたメールアドレスに折り返しご連絡いたします。</p>";
        form_table.innerHTML = element;
    })
    .catch( error => {
        console.log( error );
    });
};


/**
 * createPayload
 * 
 * ペイロードの作成
 * 
 * @returns value JSON text
 */
function createPayload() {
    let bot_name = 'contact_to';
    let attachments = [];
    let message = '';

    if (content_type == '応募') {
        let activeSkill = '';

        // チェックのついたスキルを文字列結合
        skills.forEach(skill => {
            if(skill.checked){
                activeSkill += skill.value + ', ';
            }
        });
        // 最後のカンマ消したい
        if (activeSkill.length > 0) { 
            activeSkill = activeSkill.slice( 0, -2 ) 
        }
        // その他欄に入力した内容もがっちゃんこ
        message = activeSkill + etcetera_skill.value;

        attachments = createAttachments(message, application_color);
    } else {
        message = contact_content.value;

        attachments = createAttachments(message, contact_color);
    }

    // ペイロードのがっちゃんこ
    let payload = {
        'username': bot_name, 
        'attachments': attachments 
    };
    
    return JSON.stringify(payload);
}

/**
 * createAttachments
 * 
 * create attachments for the payload 
 * 
 * @param {*} msg 
 * @param {string} clr 
 * @returns obj
 */
function createAttachments(msg, clr) {
    return attachments = [
        {
            color: clr, //インデント線の色
            title: '以下の内容で新規の ' + type + ' がありました',//インデント内に表示されるタイトル
            text: 
`*ニックネーム* : ${nickname.value}
*e-mail* : ${email.value}
*${type}内容* : ${msg}`
        }
    ];
}
