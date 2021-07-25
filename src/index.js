import "./styles.css";

const onclickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list_row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete_list").appendChild(div);
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onclickAdd());
