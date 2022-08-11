import { useFormState } from '../../../framework/context/form';
import { useSectionIndex } from '../../../framework/context/section';
import getFormValueFromSection from '../../../framework/state/gerFromValueFromSection';
import getSectionState from '../../../framework/state/getSectionState';
import Navigation from '../Navigation';
import { Question } from '../Questions/Questions';
import s from './Question.module.css';
export interface QuestionInterface {
  text: string;
  name: string;
  low: string;
  high: string;
}
export interface ResultInterface {
  name: string;
  content: string;
}
const Question = ({
  question,
  index,
}: {
  question: Question;
  index: number;
}) => {
  const { state: sectionIndexState } = useSectionIndex();
  const { state: formState, dispatch: formDispatch } = useFormState();

  const value = getFormValueFromSection({
    sectionState: getSectionState({ formState, sectionIndexState }),
    sectionIndexState,
    field: question,
  });

  return (
    <div className={s.root}>
      <div className={s.content}>
        <h3>Question {index + 1}</h3>
        <p className={s.question}>{question.text}?</p>
      </div>
      <div className={s.inputWrapper}>
        <div className={s.inputContent}>
          <datalist className={s.datalist}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="5">5</option>
          </datalist>
          <input
            className={s.input}
            name={question.name}
            type="range"
            min="1"
            max="5"
            value={value}
            onChange={(e) => {
              formDispatch({
                type: 'UPDATE_FIELD',
                payload: {
                  name: question.name,
                  value: e.target.value,
                  section: Number(sectionIndexState.index),
                },
              });
            }}
          />
          <small className={s.small}>
            <span className={s.smallUppercase}>
              Drag the dial to best match your answer
            </span>{' '}
            - from 1 to 5
          </small>
          <div className={s.labels}>
            <span className={s.label}>{question.low}</span>
            <span className={s.label}>{question.high}</span>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};
export default Question;
