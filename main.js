const quiz = [
 {
 question: 'Q1. わが国の死因順位の第1位は悪性新生物（がん）である。',
 choices: [
 '--〇',
 '✕',
 ],
 correct: '〇'
 },
 {
 question: 'Q2. もっとも早くから自動化が進んだ検査分野は、免疫学的検査である。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '✕'
 },
 {
 question: 'Q3. 臨床検査の基準測定操作法として、酵索活性測定にはIFCC法JSCC法などがあるが、測定する試薬の組成、測定法等の規定はしていない。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '✕'
 },
 {
 question: 'Q4. 卸企業の基本的な役割は体外診断用医薬品の安全かつ安定的供給である。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '〇'
 },
 {
 question: 'Q5. 病院施設内でのFMS方式とは、検査室の施設、検査技師などの従業員は病院の管理下であるが、検査機器、試薬、検査室の運営は検査センターに委託されている形態をいう。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '〇'
 },
 {
 question: 'Q6. わが国においては、病んでいる人がいれば等しく医療を受ける権利を有している。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '〇'
 },
 {
 question: 'Q7. 人間らしい生活を送り続けることにより人の尊厳を保つことができるという考え方をSOLという。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '✕'
 },
 {
 question: 'Q8. 体外診断用医薬品の添付文に関しては法的規制を受けており、記載しなければならない事項等が詳細に定められているが、広告直伝に関しては制限が無い。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '✕'
 },
 {
 question: 'Q9. 臨床検査薬企業は、臨床検査業が適正に使用されるために、医療機関に対して的確な情報の伝達を行うことが重要である。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '〇'
 },
 {
 question: 'Q10. DMRは専門的および法規制度の知識を有し、なおかつ医療に奉仕する高い倫理観を持って業務を遂行しなければならない。',
 choices: [
 '〇',
 '✕',
 ],
 correct: '〇'
 },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
 
const button = document.getElementsByTagName('button');
const buttonLength = button.length;
 
const setupQuiz = () => {
 document.getElementById('question').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength) {
　　　　 button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
　　　　 buttonIndex++;
 }
}
 
setupQuiz();

const clickHandler = (e) => {
 if (quiz[quizIndex].correct === e.target.textContent) {
   window.alert("正解！");
   score++;
 } else {
   window.alert("不正解！");
 }
 
 quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
 } else {
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 }
}
 
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
 button[handlerIndex].addEventListener('click', (e) => {
   clickHandler(e);
 });
 handlerIndex++;
 
}
