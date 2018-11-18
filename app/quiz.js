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


`<p>
            <h6>You often contemplate the complexities of life and the universe.</h6>
          </p>
          <p>
            <select>
              <option value=''></option>
            </select>
            <p>
              <h6>You find it difficult to introduce yourself to other people.</h6>
            </p>
            <p>
              <label for='q2-1'>
                <input name='q2' name='q1' type='radio' id='q2-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q2-2'>
                <input name='q2' type='radio' id='q2-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q2-3'>
                <input name='q2' type='radio' id='q2-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q2-4'>
                <input name='q2' type='radio' id='q2-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q2-5'>
                <input name='q2' type='radio' id='q2-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>You often get so lost in thought that you ignore or forget your surroundings.</h6>
            </p>
            <p>
              <label for='q3-1'>
                <input name='q3' type='radio' id='q3-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q3-2'>
                <input name='q3' type='radio' id='q3-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q3-3'>
                <input name='q3' type='radio' id='q3-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q3-4'>
                <input name='q3' type='radio' id='q3-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q3-5'>
                <input name='q3' type='radio' id='q3-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>You prefer going out to a club or bar with friends to staying home and watching tv on the weekends.</h6>
            </p>
            <p>
              <label for='q4-1'>
                <input name='q4' type='radio' id='q4-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q4-2'>
                <input name='q4' type='radio' id='q4-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q4-3'>
                <input name='q4' type='radio' id='q4-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q4-4'>
                <input name='q4' type='radio' id='q4-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q4-5'>
                <input name='q4' type='radio' id='q4-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>You love to travel to new destinations and learn new things about people and cultures different
                from
                yourself.</h6>
            </p>
            <p>
              <label for='q5-1'>
                <input name='q5' type='radio' id='q5-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q5-2'>
                <input name='q5' type='radio' id='q5-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q5-3'>
                <input name='q5' type='radio' id='q5-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q5-4'>
                <input name='q5' type='radio' id='q5-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q5-5'>
                <input name='q5' type='radio' id='q5-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>You struggle to make small talk with strangers.</h6>
            </p>
            <p>
              <label for='q6-1'>
                <input name='q6' type='radio' id='q6-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q6-2'>
                <input name='q6' type='radio' id='q6-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q6-3'>
                <input name='q6' type='radio' id='q6-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q6-4'>
                <input name='q6' type='radio' id='q6-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q6-5'>
                <input name='q6' type='radio' id='q6-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>Your mood can change quickly, depending on outside circumstances.</h6>
            </p>
            <p>
              <label for='q7-1'>
                <input name='q7' type='radio' id='q7-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q7-2'>
                <input name='q7' type='radio' id='q7-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q7-3'>
                <input name='q7' type='radio' id='q7-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q7-4'>
                <input name='q7' type='radio' id='q7-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q7-5'>
                <input name='q7' type='radio' id='q7-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>You have a tendency to become highly engaged with fictional worlds and characters.</h6>
            </p>
            <p>
              <label for='q8-1'>
                <input name='q8' type='radio' id='q8-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q8-2'>
                <input name='q8' type='radio' id='q8-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q8-3'>
                <input name='q8' type='radio' id='q8-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q8-4'>
                <input name='q8' type='radio' id='q8-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q8-5'>
                <input name='q8' type='radio' id='q8-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>You believe that everyone should seek to improve upon themselves, not only for their own benefit
                but
                for the betterment of humankind.</h6>
            </p>
            <p>
              <label for='q9-1'>
                <input name='q9' type='radio' id='q9-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q9-2'>
                <input name='q9' type='radio' id='q9-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q9-3'>
                <input name='q9' type='radio' id='q9-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q9-4'>
                <input name='q9' type='radio' id='q9-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q9-5'>
                <input name='q9' type='radio' id='q9-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <h6>In a rational discussion, truth should be more important than people’s sensitivities.</h6>
            </p>
            <p>
              <label for='q10-1'>
                <input name='q10' type='radio' id='q10-1' value='1' />
                <span>YES</span>
              </label>
            </p>
            <p>
              <label for='q10-2'>
                <input name='q10' type='radio' id='q10-2' value='2' />
                <span>yes</span>
              </label>
            </p>
            <p>
              <label for='q10-3'>
                <input name='q10' type='radio' id='q10-3' value='3' />
                <span>yes and no</span>
              </label>
            </p>
            <p>
              <label for='q10-4'>
                <input name='q10' type='radio' id='q10-4' value='4' />
                <span>no</span>
              </label>
            </p>
            <p>
              <label for='q10-5'>
                <input name='q10' type='radio' id='q10-5' value='5' />
                <span>NO</span>
              </label>
            </p>
            <p>
              <input type='submit' id='enter' />
            </p>
        </div>`