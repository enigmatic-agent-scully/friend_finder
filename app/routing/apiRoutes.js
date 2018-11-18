var friendData = require('../data/friends');

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    return res.json(friendData);
  });

  app.post('/api/friends', (req, res) => {
    console.log(req.body);
    var allFriendsArr = [];
    var newFriendArr = [];
    req.body.scores.map(e => {
      newFriendArr.push(parseInt(e));
    });
    console.log(`new friend scores: ${newFriendArr}`);
    for (var i = 0; i < friendData.length; i++) {
      allFriendsArr.push(friendData[i].scores);
    }
    console.log('all pals', allFriendsArr);
    var someArr = calc(newFriendArr, allFriendsArr);
    var indexOfSmallestArr = getIndexOfSmallest(someArr);
    console.log(`some array : ${someArr}`);
    console.log('Indexes of smallest Array:', indexOfSmallestArr);

    friendData.push(req.body);

    // The matching person is:
    var matchedPerson = friendData[indexOfSmallestArr[0]];
    console.log(matchedPerson);
    res.json(matchedPerson);

  })
}



var calc = function (firstArray, secondArray) {
  var finalResultsArray = [];
  secondArray.forEach(secondArrayElements => {
    var temp = [];
    for (i in secondArrayElements) {
      for (j in firstArray) {
        if (i == j) {
          temp.push(Math.abs(firstArray[j] - secondArrayElements[i]));
        }
      }
    }
    finalResultsArray.push(temp.reduce((a, b) => a + b, 0));
  });
  return finalResultsArray;
}

var getIndexOfSmallest = (finalRes) => {
  Array.min = (array) => {
    return Math.min.apply(Math, array);
  }
  var smallest = Array.min(finalRes);
  var indexOfSmallest = [];
  for (let i = 0; i < finalRes.length; i++) {
    const element = finalRes[i];
    if (element == smallest) {
      indexOfSmallest.push(finalRes.indexOf(smallest, i));
    }
  }
  return indexOfSmallest;
}