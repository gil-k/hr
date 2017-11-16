/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
// streams.users.shawndrost = [];
// streams.users.sharksforcheap = [];
// streams.users.mracus = [];
// streams.users.douglascalhoun = [];
streams.users.gilkwak = [];
window.users = Object.keys(streams.users);

window.tweetCount = 0;

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

var newTweets = 1;

for(var i = 0; i < newTweets; i++){
  generateRandomTweet( + newTweets);
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  window.tweetCount += newTweets;
  updateNewTweetCount(window.tweetCount);
  setTimeout(scheduleNextTweet, Math.random() * 10000);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};

var maxTweetsDisplayed = 15;

function updateTweets() {
  window.tweetCount = 0;
  var $container = $('#container');
  var index = streams.home.length - 1;  
  var tweetsDisplayed = 0;
  updateNewTweetCount(window.tweetCount);//streams.users.gilkwak.length);

  $container.html("");

  while(index > 0 && tweetsDisplayed <= maxTweetsDisplayed){
    tweetsDisplayed++;
    var tweet = streams.home[index]; streams.users.gilkwak

    var date = new Date();
    var timeElapsed = timeDifference(date.getTime(), tweet.created_at);

    var $tweet = $('<br><div  class="card"></div>');
    $tweet.html('<h4 class="card-header bg-muted text-success">' + '@' + tweet.user + 
      '</h4><div class="card-body"><p class="card-text text-muted">' + tweet.message +  '</p><p class="time text-muted">' + timeElapsed + '</p></div>');

    $tweet.appendTo($container);
    index -= 1;
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

