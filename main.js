




  $(".vcard-avatar").append("<img class='avatar rounded-2' height='230' src='" + user.avatar_url + "' width='230'/>");

  $(".vcard-names").append("<div class='vcard-fullname'>" + user.name + "</div>" + "<div class='vcard-username'>" + user.login + "</div>");

    var liStr = "<li class='vcard-detail py-1 css-truncate css-truncate-target' height='16' width='14'>";
    var octiLoc = "<span class='octicon octicon-location' height='16' width='12'></span>";
    var loca = user.location;
    var octiClock = "<span class='octicon octicon-clock' height='16' width='14'></span>";
    var joinedStr = "Joined on ";
    var time = "<time class='join-date' datetime='2015-11-21T01:21:59Z' day='numeric' is='local-time' month='short' year='numeric' title='Nov 20, 2015, 8:21 PM EST'>Nov 20, 2015</time>"

  $("ul.vcard-detail").append(liStr + octiLoc + " " + loca + "</li>");
  $("ul.vcard-detail").append(liStr + octiClock + " " + joinedStr + time + "</li>");

  // var statsArr = _.map(user, function(elem){
  //   return {
  //   followers,
  //   followers_url,
  //   following,
  //   following_url,
  //   elem = starred_url }
  // });

  //3 inline numbers+words

  var statsObj = {
    openerNum: "<strong class='vcard-stat-count d-block'>",
    closerNum: "</strong>",
    openerText: "<span class='text-muted'>",
    closerText: "</span>",
    followers: user.followers,
    followersText: "Followers",
    followersLink: user.followers_url,
    following: user.following,
    followingText: "Following",
    followingLink: user.following_url,
    starred: 0,
    starredText: "Starred"
  }

  $("div.vcard-stat.one").append(statsObj.openerNum + statsObj.followers + statsObj.closerNum + statsObj.openerText + statsObj.followersText + statsObj.closerText);
  $("div.vcard-stat.two").append(statsObj.openerNum + statsObj.following + statsObj.closerNum + statsObj.openerText + statsObj.followingText + statsObj.closerText);
  $("div.vcard-stat.three").append(statsObj.openerNum + statsObj.starred + statsObj.closerNum + statsObj.openerText + statsObj.starredText + statsObj.closerText);




var posts = "";
  repos.forEach(function(post, idx){
    posts += "<h3 class='repo-list-name'>"
      + "<a href=''#'' itemprop='name codeRepository'>"
      + "REPOS"
      + post.name
      + "</a>"
      + "</h3>"
      + "<div class='repo-list-stats tooltipped'>"
      + "<span>"
      + post.language
      + "</span>"
      + "<a href=''#'' class='repo-list-stat-item tooltipped'>"
      + "<span class='octicon octicon-star tooltipped'>"
      + post.stargazers_count
      + "</span>"
      + "</a>"
      + "<a href='#' class='repo-list-stat-item tooltipped'>"
      + "<span class='octicon octicon-git-branch'>"
      + post.forks
      + "</span>"
      + "</a>"
      + "</div>"

      + "<p class='repo-list-meta'>"
      + "Updated"
      + post.updated_at
      + "a day ago"
      + "</time>"
      + "</p>"
  });
$('.repo-list-item').append(posts);


var otherPosts = "";
publicAct.forEach(function(post, idx){
  otherPosts += "<img src='" + post.avatar_url + "'/>"
  + "<h3>"
  +"ACTIVITY"
  + post.login
  + "</h3>"
  + "<span>"
  + post.type
  + "</span>"
  + "<span>"
  + post.name
  + "</span>"
  + "<span>"
  + post.message
  + "</span>"
  + "<span>"
  + post.created_at
  + "</span>"
});
$('.news').append(posts);

$('.tabs').children('.inactive');

var navItem = $('.secNav').find('a');
navItem.click(function(event){
  event.preventDefault();
  console.log("SHOW ME");
  var selected = "." + $(this).attr('rel');
  console.log(selected);
  $(selected).removeClass('inactive');
  $(selected).siblings('div').addClass('inactive');
});
