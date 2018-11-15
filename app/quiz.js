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

const quiz = $('#quiz');
const submit = $('#submit');

const ansHTML = () => {

};

const displayQ = () => {
  var output = [];

  qs.forEach((q, qNum) => {
    let allA = [];
    let cQ = `
    <p>
    <h6>${qNum}. ${q}</h6>
    </p>
    <p>`
    output.push(cQ);

    answers.forEach((ans) => {
      let a = `
      <label for='${ans.value}'>
      <input name='q${qNum}' type='radio' id='q${qNum}-${ans.value}' value='${ans.value}'/>
      <span>${ans.text}</span>
      </label>
      </p>`;
      allA.push(a);

    });

    output.push(allA);
    $('#quiz').html(`<form id = 'myForm'>${output.join('')}</form><br><input type='submit' id='submit'>`);
  });
  console.log(output);
};

displayQ();


