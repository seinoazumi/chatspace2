$(document).on('turbolinks:load', function(){
  var search_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class='chat-group-user clearfix'>
                      <p class='chat-group-user__name' value='${user.id}' data-name="${user.name}" name='group[user_ids][]'>
                        ${user.name}
                      </p>
                      <a class='user-search-add chat-group-user__btn chat-group-user__btn--add'>
                        追加
                      </a>
                    </div>`;
    search_list.append(html);
    };

    function appendErrMsg(msg) {
      var html = `<li style="list-style: none;">
                    <div class='listview__element--right-icon'>"${ msg }</div>
                  </li>`
        search_list.append(html);
      };
    

  $('#user-search-field').on('keyup', function(){
    var input = $(this).val();
    var reg = new RegExp("^" + input);
    $.ajax({
      type: 'get',
      url: '/users',
      data: {search: input},
      dataType: 'json'
    })
    .done(function(users){
      if(users.length !== 0){
        if(input.length !==0){
          users.forEach(function(user){
            if (user.name.match(reg)) {
              $(appendUser(user));
            }; 
          });
        } else {
          $('#user-search-result').empty();
        };
      } else {
        $('#user-search-result').empty();
        var msg = "一致するユーザーはいません";
        appendErrMsg(msg);
      }
    })
    .fail(function(){
      alert('ユーザーの検索に失敗しました');
    });
  });
});
