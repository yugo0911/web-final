function showMemo() {
  let memos = [
    "提出前は、画像がちゃんと表示されるか確認する。",
    "CSSを少し変えるだけで、ページの印象がかなり変わる。",
    "リンク先のファイル名を間違えるとページが開かない。",
    "GitHubに上げる前に、ローカルで一度確認しておく。",
    "難しい機能より、まずは見やすさを大事にする。"
  ];

  let number = Math.floor(Math.random() * memos.length);
  document.getElementById("todayMemo").textContent = memos[number];
}
