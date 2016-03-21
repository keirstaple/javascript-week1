var userRepos = require('./../js/githubUser.js').userRepos;

$(document).ready(function() {
  $('.usernameSubmit').click(function() {
    var githubUser = $('#githubUser').val();
    $('.githubRepos').empty();

    userRepos(githubUser);
  });
});
