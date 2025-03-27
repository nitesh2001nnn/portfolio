import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./question-practice.scss";
import Radio from "../../../../global/components/radio/radio";

const Questionpractice = forwardRef((props: any, ref) => {
  const [answer, setAnswer] = useState<any>([
    {
      id: 1,
      question: "what is VS Code",
      options: [
        "IDE",
        "Database",
        "Background remover",
        "programming langauage",
      ],
      selectedOption: props?.data?.answer?.[0]?.selectedOption ?? null,
      correctAnswer: "IDE",
    },
    {
      id: 2,
      question: "what isthe color of VS Code icon",
      options: ["red", "blue", "green", "white"],
      selectedOption: props?.data?.answer?.[1]?.selectedOption ?? null,
      correctAnswer: "blue",
    },
  ]);

  const [isValid, setValid] = useState<any>(false);

  const [accuracy, setAccuracy] = useState({
    correctAnswers: 0,
    percentage: 0,
  });

  useEffect(() => {
    let correctCount = 0;
    let allAnswer=true;
    answer?.map((item: any) => {
      if (item?.selectedOption === item?.correctAnswer) {
        correctCount = correctCount + 1;
      }
      if (item.selectedOption === null) {
        allAnswer=false
      }
    });

    setAccuracy((prev: any) => {
      return {
        ...prev,
        correctAnswers: correctCount,
        percentage: ((correctCount / answer.length) * 100).toFixed(2),
      };
    });

    setValid(allAnswer);
  }, [answer]);

  useEffect(() => {
    if (props.onCheckValidation) {
      props.onCheckValidation(isValid);
    }
  }, [isValid, props.onCheckValidation]);

  useImperativeHandle(ref, () => ({
    handleChangeScreen: () => {
      props.changeScreen(
        {
          name: "check-result",
          data: { answer, accuracy },
        },
        true
      );
    },
   
  }));

  const handleChangeRadio = (questionIndex: any, value: any) => {
    const updateOption = [...answer];

    updateOption[questionIndex].selectedOption = value;
    setAnswer(updateOption);
  };



  return (
    <div className="question-practice-wrapper">
      <span className="heading">Please select correct given options</span>
      <div className="question-practice-container">
        <div className="questions-container">
          {answer.map((item: any, index: any) => {
            return (
              <div key={index}>
                <div className="question-text">{item.question}</div>
                <div className="choose-answer">
                  {item.options.map((subitem: any, subindex: any) => {
                    return (
                      <div className="answer-text" key={subindex}>
                        <Radio
                          labelText={subitem}
                          value={subitem}
                          isChecked={item.selectedOption === subitem}
                          handleChange={(value) =>
                            handleChangeRadio(index, value)
                          }
                        ></Radio>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Questionpractice;
