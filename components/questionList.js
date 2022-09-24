import Question from './question';

export default function QuestionList({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </div>
  );
}
