window.tweetCount = 0;

var maxTweetsDisplayed = 20;

function updateTweets(user) {
  if (user === undefined) {

    window.tweetCount = 0;
    var $container = $('#container');
    var index = streams.home.length - 1;  
    var tweetsDisplayed = 0;
    // updateNewTweetCount(window.tweetCount);//streams.users.gilkwak.length);

    $container.html("");

    while(index > 0 && tweetsDisplayed <= maxTweetsDisplayed){
      tweetsDisplayed++;
      var tweet = streams.home[index]; 

      var date = new Date();
      var timeElapsed = timeDifference(date.getTime(), tweet.created_at);

      var user = tweet.user;
      var $tweet = $('<br><div class="card" id="border"></div>');
      $tweet.html('<a href="#" onclick="updateTweets(\'' +  tweet.user + '\')"><h4 class="card-header bg-muted text-primary">' + '@' + tweet.user + 
        '</h4><div class="card-body"><p class="card-text text-muted split-para">' + tweet.message +  '<span class="timestamp text-muted">' + timeElapsed + '</span></p></div></a>');

      $tweet.appendTo($container);
      index -= 1;
    }      
  } else {
    window.tweetCount = 0;
    var $container = $('#container');
    var index = streams.home.length - 1;  
    var tweetsDisplayed = 0;
    // updateNewTweetCount(window.tweetCount);//streams.users.gilkwak.length);

    $container.html("");

    while(index > 0 && tweetsDisplayed <= maxTweetsDisplayed){
      tweetsDisplayed++;
      var tweet = streams.home[index]; 
      if (user === tweet.user){
        var date = new Date();
        var timeElapsed = timeDifference(date.getTime(), tweet.created_at);

        var user = tweet.user;
        var $tweet = $('<br><div class="card" id="border"></div>');
        $tweet.html('<a href="#" onclick="updateTweets(\'' + tweet.user + '\')"><h4 class="card-header bg-muted text-primary">' + '@' + tweet.user + 
          '</h4><div class="card-body"><p class="card-text text-muted split-para">' + tweet.message +  '<span class="timestamp text-muted">' + timeElapsed + '</span></p></div></a>');

        $tweet.appendTo($container);        
      }

      index -= 1;
    }     
  }
}

function updateNewTweetCount(count){
  // alert('new tweets');

  var $count = $('#count');
  $count.html("");

  var $tweetCount = $('<div class="text-muted" id="tweetCount"></div>');
  // $tweetCount.html(streams.users.gilkwak.length);
  if (count === 1){
    $tweetCount.html(count + ' new tweet');
  } else {
    $tweetCount.html(count + ' new tweets');
  }
  $tweetCount.appendTo($count);
}

function userTimeLine(user){
  
}

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    } else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    } else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    } else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    } else {
        return 'months ago';   
    }
}

