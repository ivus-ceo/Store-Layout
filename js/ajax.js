function __ajaxSaveEdit(e) {
  var a = $(e).parent().find('p').html();
  $.post('ajax/edit-introduction.php', {
    user_introduction: a
  }, function(data, status) {
    if (status === 'success') {
      $(e).parent().find('.__edit-info').removeAttr('style');
      $(e).parent().find('.__edit-info').attr('onclick', '__summonEdit(this)');
      $(e).parent().find('p').removeAttr('contenteditable');
      $(e).parent().find('p').html(data);
      $(e).remove('button');
    }
  });
}

function __ajaxSaveEditSkills(e) {
  var a = $(e).parent().attr('dt-id');
  var b = $(e).parent().find('h1').html();
  var c = $(e).parent().find('p').html();
  var d = $(e).parent().find('.__skill-container');

  var data = [];

  for (var i = 0; i < d.length; i++) {
    data[i] = [d[i].attributes[1].value, d[i].children[0].children[0].textContent, d[i].children[1].children[1].value];
  }

  $.post('ajax/edit-skills.php', {
    skill_id: a,
    skill_title: b,
    skill_description: c,
    skill_progresses: data
  }, function(data, status) {
    if (status === 'success') {
      $(e).parent().find('i').removeAttr('style');
      $(e).parent().find('i').attr('onclick', '__summonEditSkill(this)');
      $(e).parent().find('h1').removeAttr('contenteditable');
      $(e).parent().find('p').removeAttr('contenteditable');
      $(e).parent().find('input').removeAttr('style');
      $(e).remove();
    }
  });
}

function __ajaxSaveEditEducation(e) {
  var a = $(e).parent().attr('dt-id');
  var b = $(e).parent().find('p:first-child').html();
  var c = $(e).parent().find('h1').html();
  var d = $(e).prev().html();

  $.post('ajax/edit-education.php', {
    education_id: a,
    education_time: b,
    education_title: c,
    education_description: d
  }, function(data, status) {
    if (status === 'success') {
      $(e).parent().find('i').attr('onclick', '__summonEditEducation(this)');
      $(e).parent().find('p, h1').removeAttr('contenteditable');
      $(e).remove();
    }
  });
}

function __ajaxSaveEditWork(e) {
  var a = $(e).parent().attr('dt-id');
  var b = $(e).parent().find('p:first-child').html();
  var c = $(e).parent().find('h1').html();
  var d = $(e).prev().html();

  $.post('ajax/edit-work.php', {
    work_id: a,
    work_time: b,
    work_title: c,
    work_description: d
  }, function(data, status) {
    if (status === 'success') {
      $(e).parent().find('i').attr('onclick', '__summonEditWork(this)');
      $(e).parent().find('p, h1').removeAttr('contenteditable');
      $(e).remove();
    }
  });
}

function __ajaxGetArticleData(e) {
  $.ajax({
    url: 'ajax/get-article.php',
    data: {article_id: e},
    type: 'post',
    success: function(data, status) {
      var json = jQuery.parseJSON(data);
      console.log(json);
      $('.__section-container-hidden').css('display', 'flex');
      $('.__section-article-container').html(json.article_category);
    }
  });
}
