import './App.css';
import React from 'react';
import Question from './Question'


function App() {
  var [questions,setQuestions]=React.useState([
      {
          title: 'Do I have to allow the use of cookies?',
          info:'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
        },
        {
          title: 'How do I change my My Page password?',
          info:'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
        },
        {
          title: 'What is BankID?',
          info:'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
        },
        {
          title: 'Whose birth number can I use?',
          info:'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
        },
        {
          title: 'When do I recieve a password ordered by letter?',
          info:'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
        },
  ])
  console.log(questions)
  return (
    <div className="">
      <div className='d-flex flex-wrap'>
        <div>
          <h5>Question and Answers About Login</h5>
        </div>
        <div>
          {
            questions.map((question,i)=>{
              return <Question question={question} i={i}></Question>
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
