const quiz = [
  {
  question: 'Q1. わが国の死因順位の第1位は悪性新生物（がん）である。',
  choices: [
  '〇',
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
  {
  question: 'Q11. 医薬品医療機器等法の規制の対象になるのは、「医薬品」、「医薬部外品」、「化粧品」、「医療機器」の4種類である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q12. 体外診断用医薬品の新しい品日（新規品目）については、承認後しばらくはクラス1の品目として取り扱われる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q13. 体外診断用医薬品では、医薬品医療機器等法の規定により、「体外診断用医薬品基本要件基準」が制定されている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q14. 承認前の体外診断用医薬品の名称、製造方法、効能・効果または性能に関する広告を行うことは、医療関係者を対象とする場合に限って認められている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q15. 臨床検査技師等に関する法律には衛生検査所の構造設備、管理組織その他の事項について必要最低限の基準が定められている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q16. SDS（Safery Data Sheer）制度は、水質汚濁防止法により交付が義務付けられている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q17. 臨床検育薬情報担当者が、卸売販売業者の納入価格について医療機関等と意見を交換することは、独占禁止法上特に問題はない。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q18. PL法において、製造物とは製造または加工された動産のことをいう。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q19. 医療にかかる費用の保障のため、勤め人（会社員、公務員など）は就職したら会社などが運営する健康保険（組合健保、共済組合など）に加入する',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q20. 診療所とは患者を入院させるための施設を有しないもののみをいう。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q21. 医療保険制度の構成員は被保険者と保険者の2者からなる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q22. 医療給付の方法のひとつである現金給付は、保険者から被保険者に相当額が現金で支払われるものである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q23. 診療報酬制度では、実施した臨床検査のすべてが請求できる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q24. 体外診断用医薬品の医療保険診療報酬上の取扱いは、医薬品と同じく薬値基準が定められている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q25. ISO13485は、臨床検査室の品質と能力に関する必要条件（要求事項）を示している国際規格の1つである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q26. 体外診断用医薬品の添付文害は、医薬品医療機器等法で規定されている使用者への情報提供のための公的な文書である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q27. 体外診断用医薬品添付文書の記載項目には、製品コード番号が必ず記載されている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q28. 体外診断用医薬品添付文書が改訂された場合、その年月および版数が添付文書の右または左上隅等に記載される。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q29. 体外診断用医薬品添付文書の「名称」欄には、製造販売承認（認証）を受けた販売、あるいは製造販売届出を行った販売名が記載されている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q30. 体外診断用医薬品添付文書の「形状・構造等（キットの構成）」欄において、反応系に関与する成分名称のうち抗体（抗血清）については、その由来（動物種）を記載し、モノクローナル抗体かポリクローナル抗体かの区別をする必要は無い',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q31. 体外診断用医薬品添付文書の用法・用量の項目で測定（使用方法）において、専用分析装置を使用する場合は、分析機器側からみた操作法が参考として記載されることがある。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q32. 体外診断用医薬品の添付文書において販売業者が製造販売業者とは異なる場合、当該販売業者名は明確に区別できる表記となっている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q33. 健常者の検査値の生理的変動要因として、食事、連動、性同期および感情などがあげられる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q34. 検査データの互換性確保に対応するため、基準となる認証標準物質を作成し、それに合わせていくことを標準化という。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q35. 現在、我が国では認証標準物が整備されているものを含む40項目について、共用基準範囲が公表されている',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q36. 回収率とは試料に既知濃度試料（A）を添加し定した際に得られた測定量（B）の百分率で、A／Bx100（%）で表される。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q37. ROC分析は基準範囲の設定に有用な分析手法であり、その検査項目の有用性を評価する方法の1つである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q38. 有病正診率とは、目的とする疾患群のなかでその検査結果が陰性となる例数の割合である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q39. 陰性反応的中度とは、検査結果陽性と出たものの中で、疾患を有さないものの割合である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q40. カットオフ値は固定された値ではなく、診断の目的によって変化する特徴を持っている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q41. 肺がんなどの悪性腫瘍の特定遺伝子変異を調べることで、抗がん剤に対する感受性を予測することができる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q42. 検体測定室は衛生検査所としての登録を必要とする。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q43. 検体として用いる随時尿は中間尿採取が一般的である',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q44. 正規分布では平均値+ 1.96SDの範囲に99%が含まれ、これが基準範囲となる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q45. 尿検査では採尿後1時間以内に検査するのが原則である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q46. 最初に開発された尿試験紙の項目は蛋白である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q47. NAGは尿細管上皮細胞に存在するため、尿中NAGは尿細管障害の指標となる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q48. CBC（complete blood count）とは全血球算定（血算）と称され自動血球分析装置での測定が主流となっている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q49. 赤血球数、自血球数は血液1d L中の数で表わされる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q50. 網状赤血球（網赤血球）は骨髄から血液中に放出されたばかりの若い細胞である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q51. アンチトロンビン（AT）活性が50%以下になると出血傾向を示す。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q52. AST、ALTのアミノ基転移酵素でALTのみが高値を呈する場合は、肝臓以外の臓器障害を示唆する所見となる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q53. 尿素はアンモニアの体外排泄のため、腎臓で合成される。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q54. HbA1Cは採血前 1ないし2か月の平均血糖値を反映する。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q55. 電解質の調節は肝臓を中心として厳格にコントロールされている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q56. 血中物濃度測定（TDM）では、薬物投与直前の値をトラフ値と呼ぶ。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q57. ルイス血液型性者に発生した勝がんでは、CA19-9は上昇しない。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q58. 尿中Cペプチトの測定でインスリンの1日分泌量の評価が可能である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q59. リン脂質（カルジオリピン）に対する抗体を検出するSTS検査は梅毒の血清学的診断に用いられる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q60. B型肝炎ウイルスは、血液などの体液や輸血製剤を介して侵入し、感染成立の確率はC型肝炎ウイルスより低い。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q61. イムノクロマトグラフィは、肉眼判定による定性法として診察室やベッドサイドで迅速に施行できる方法である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q62. 尿培養では、早朝の中間尿を検査材料として採尿する。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q63. グラム染色で自血球を多数認める炎症所見があるが、菌が見えない場合はウイルス感染の可能性が高い。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q64. 起炎菌を同定することは、抗菌薬投与の選択において必須である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q65. 核酸とは糖と蛋白質が交互に結合した糖鎖に塩基が結合したものである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q66. RAS遺伝子はウイルス増殖に関与する遺伝子である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q67. ハイブリダイゼーションとは特定の塩基配列の存在を検出する方法である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q68. 輸血を実施する前にはインフォームド・コンセントは必須でない。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q69. ABO式血液型の判定にあたっては、オモテ試験とウラ試験の血液型は通常一致しなければならない。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q70. 免疫抗体とは輸血、妊娠および移植により産生され、主としてIgMである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q71. 細胞の内部を仕切る細胞膜は、リン脂質を主成分とする脂質二重層よりなっている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q72. 心筋は自律神経支配の不随意筋であり、横紋がみられる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q73. 肝臓に入る血管には、固有肝動脈と門所がある。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q74. 甲状腺ホルモンの分泌は、上皮小体（副甲状腺）一甲状腺系によって調整される。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q75. 高血圧の診断では、診察室血圧と診察室外血圧により、正常血圧と持続性高血圧の2つに分類される。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q76. 心不全では心拍出量の増加がみられる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q77. 心房細動では抗不整脈薬に加え、心房内血栓を防ぐ抗凝固薬を併用する。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q78. 原因細菌を推定するには、詳細な病歴聴取も重要であり、24時間風呂の使用や温泉旅行歴などがあれば、インフルエンザ菌による肺炎を疑う。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q79. イソニアジドとリファンピシンに耐性を示す結核菌を多剤耐性結核菌という。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q80. 慢性閉塞性肺疾患(COPD)の最大の原因は大気汚染である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q81. ヘリコバクター・ピロリ菌感染は縮性胃炎の原因の一つとして注目されている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q82. 肝細胞がん発症原因の一つにNASH（非アルコール性脂肪性肝炎）がある。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q83. 急性糸球体腎炎は小児に好発し、起因菌は大部分が肺炎球菌である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q84. WHOの高血の基準では、成人男性、成人女性ともにヘモグロビン量12g/dL未満と定められている。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q85. 血清フェリチン値は身体全体の貯蔵鉄量を反映している。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q86. 膵臓細胞の破壊により発症し、通常は絶対的インスリン欠乏にいたる糖尿病は、2型糖尿病である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q87. 橋本病は自己免疫疾患の一つである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q88. 血中のリポ白の代謝は、外因性（食事性）、内因性（肝臓由来）の2 系統である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q89. 排卵後、エストロゲンの分泌量が増える時期が黄体期である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q90. 染色体の異常には、部分的な構造異常に加え、トリソミー等の数的な異常もある。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q91. 乳がんの大多数は浸潤がんである。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q92. 抗原がいったん免疫機構に認識されると、リンパ球によって記憶されるため、再侵入した際にはすばやく排除されるようになる',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q93. B細胞は抗体を産生し、液性免疫の中心的な役割を担う。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q94. 全身性エリテマトーデス(SLE)の99%で抗CCP抗体が陽性となる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q95. ある限られた時期に伝染病患者が多発して、世界的な規模での大流行をパンデミックという。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q96. 通常は病原性がないか、あるいは極めて弱い微生物によって、抵抗力の弱い生体に発症する感染症を日和見感染症と称する。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '〇'
  },
  {
  question: 'Q97. ELISA法やPA法により、HIV抗体が陽性になれば、ただちにHIV感染と確定できる。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q98.  自律性增殖、浸潤と転移、悪液質は、それぞれ、がん固有の特徴であり、良性腫瘍では認められない。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q99. がんのTNM分類は、腫瘍の広がりと進達度を組み合わせた臨床病期（ステージ)分類である。',
  choices: [
  '〇',
  '✕',
  ],
  correct: '✕'
  },
  {
  question: 'Q100. 免疫チェックポイント阻害剤は、免疫抑制反応を遮断する楽剤である。',
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
 
 let missIndex = 0;
 var miss=new Array();
 
 const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    miss[missIndex]=quizIndex;
    window.alert("不正解！:"+missIndex);
    missIndex++;
  }
  
  quizIndex++;
   if (quizIndex < quizLength) {
     setupQuiz();
  } else {
   window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
   document.write("<h1>間違えた問題</h1>");
   let cnt=0;
   while(cnt<missIndex){
     document.write(quiz[miss[cnt]].question+"<br><br>");
     cnt++;
   }
  }

 }
  
 let handlerIndex = 0;
 while(handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;

 }
 
