const answers = [
  {
    text: 'YES',
    value: 1
  },
  {
    text: 'yes',
    value: 2
  },
  {
    text: 'yes and no',
    value: 3
  },
  {
    text: 'no',
    value: 4
  },
  {
    text: 'NO',
    value: 5
  }
];

const qs = [
  {
    q: 'You often contemplate the complexities of life and the universe.',
    a: answers
  }, {
    q: 'You find it difficult to introduce yourself to other people.',
    a: answers
  }, {
    q: 'You often get so lost in thought that you ignore or forget your surroundings.',
    a: answers
  }, {
    q: 'You prefer going out to a club or bar to staying home and watching tv on the weekends.',
    a: answers
  }, {
    q: 'You love to travel to new destinations and learn new things about people and cultures different from yourself.',
    a: answers
  }, {
    q: 'You struggle to make small talk with strangers.',
    a: answers
  }, {
    q: 'Your mood can change quickly, depending on outside circumstances.',
    a: answers
  }, {
    q: 'You become highly engaged with fictional media.',
    a: answers
  }, {
    q: 'You believe that everyone should seek to improve upon themselves.',
    a: answers
  }, {
    q: 'In a discussion, truth should be more important than people’s sensitivities.',
    a: answers
  }, {
    q: 'You rarely worry about how your actions affect other people.',
    a: answers
  }
];

const survey = document.getElementById('surveyQs');
const enter = document.getElementById('enter');

const ansHTML = () => {
  var allA = [];
  answers.forEach((ansr, n) => {
    let cA = `<label for='${ansr.value}'>
           <input name='q${n}' type='radio' id='q${n}-${ansr.value}' value='${ansr.value}'/>
            <span>${ansr.text}</span>
            </label>
        </p>`;
    allA.push(cA);
  });
  console.log(allA);
  return allA;
};



const displayQ = () => {
  var output = [];

  qs.forEach((q, qNum) => {

    let cQ = `
    <p>
    <h6>${qNum}. ${q.q}</h6>
    </p>
    <p>`
    output.push(cQ);

    ansHTML();

    $('#surveyQs').html(`${output.join('')}<br><input type='enter' id='enter'>`);
  });
  console.log(output);
};

displayQ();


