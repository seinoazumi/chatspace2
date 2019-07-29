$(document).on('turbolinks:load', function(){
  function buildMessage(message){
    var imageUrl = message.image.url ? message.image.url : '';
    var html = `<div class="message">
                  <div class="upper-info">
                    <p class="upper-info__user">${message.user_name}</p>
                    <p class="upper-info__date">${message.date}</p>
                  </div>
                    <p class="message__text">${message.text}</p>
                    <img src="${imageUrl}" class="message__text">
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // FormDataの中にthisの中身を入れ、変数 formDataに代入
    var formData = new FormData(this);
    // thisの中のaction属性の中身をurlに代入
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',  
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildMessage(data);
      $('.messages').append(html);
      $('.new-message')[0].reset();

      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('メッセージの送信に失敗しました');
    });
  });
});
