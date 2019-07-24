$(document).on('turbolinks:load', function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // FormDataの中にthisの中身を入れ、変数 formDataに代入
    var formData = new FormData(this);
    // thisの中のaction属性の中身をurlに代入
    var url = $(this).attr('action');

    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: 'json',
      // ajaxに備わっているデータ成形機能をキャンセルする（formDataですでに整っているので）
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
    
    })
    .fail(function(){
      alert('メッセージの送信に失敗しました');
    });
  });
});
