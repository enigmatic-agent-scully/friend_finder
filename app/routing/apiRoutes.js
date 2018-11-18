var friendData = require('../data/friends');

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    return res.json(friendData);
  });

  app.post('/api/friends', (req, res) => {
    friendData.push(req.body);
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
    console.log(`some array : ${someArr}`);
  })
}

// newFriend = [1, 2, 3]
// allFriend = [ [2, 3, 4], [4, 2, 1], [3, 5, 7] ]
//temp = [1,2,]

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
    // sum temp element, and add to finalResultsArray
    finalResultsArray.push(temp.reduce((a, b) => a + b, 0));
  });
  return finalResultsArray;
}

// const calc = function (arr1, arr2) {
//   var finalRes = [];
//   arr2.forEach(secondArrElem => {
//     var temp = [];
//     for (i in secondArrElem) {
//       for (j in arr1) {
//         temp.push(Math.abs(arr1[j] - secondArrElem[i]));
//       }
//     }
//     console.log(temp.reduce((a, b) => a + b));
//   }
//   )
//   return finalRes;
// }