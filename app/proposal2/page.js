export default function Proposal2() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案②：メッセージ配信の成功率を最大化する「送信前安全チェック」機能
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>配信直前に「今送れる状態か」が分からない（運用面）</li>
          <li>配信エラーが発生した際、原因が特定しづらい（機能面）</li>
          <li>配信対象がゼロのまま誤配信してしまうリスクがある（運用面）</li>
          <li>内部設定の不整合が配信直前まで気づけない（UI/UX）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          メッセージ配信前に、LINE連携状態・配信対象・メッセージ内容・内部設定を自動チェックし、
          配信成功率を最大化する「送信前安全チェック機能」を追加します。
        </p>
      </section>

      {/* 3. 図解（UIモック） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>3. 図解</h2>

        <div style={{
          background: "#eef2f7",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
        }}>

          <div style={{ display: "flex" }}>

            {/* 左メニュー */}
            <div style={{
              width: "22%",
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "20px",
              marginRight: "20px"
            }}>
              <h3 style={{ fontSize: "16px", marginBottom: "15px" }}>メニュー</h3>
              <ul style={{ listStyle: "none", paddingLeft: "0", lineHeight: "2" }}>
                <li>・ダッシュボード</li>
                <li>・チャット</li>
                <li>・メッセージ配信</li>
                <li>・リッチメニュー</li>
                <li>・設定</li>

                {/* NEW */}
                <li style={{
                  marginTop: "20px",
                  padding: "10px",
                  background: "#e8f3ff",
                  border: "1px solid #4a90e2",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  color: "#4a90e2"
                }}>
                  送信前安全チェック（NEW）
                </li>
              </ul>
            </div>

            {/* 右側：送信前チェック画面 */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                送信前安全チェック（UIイメージ）
              </h3>

              {/* チェックボタン */}
              <div style={{ marginBottom: "25px" }}>
                <button style={{
                  padding: "12px 20px",
                  background: "#4a90e2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}>送信前チェックを実行</button>
              </div>

              {/* 結果表示 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>チェック結果</h4>

                <div style={{ lineHeight: "2" }}>
                  <div style={{ color: "green" }}>✔ LINE連携は正常です</div>
                  <div style={{ color: "green" }}>✔ 配信対象ユーザー数は問題ありません</div>
                  <div style={{ color: "green" }}>✔ メッセージ内容は正常です</div>
                  <div style={{ color: "red" }}>✖ 内部設定の一部が未登録です（確認してください）</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. フローチャート */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>4. フローチャート</h2>
        <pre style={{
          background: "#f7f7f7",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "14px"
        }}>
{`送信前安全チェック（NEW）をクリック
  ↓
チェック画面が開く
  ↓
「送信前チェックを実行」を押す
  ↓
内部設定・LINE連携・配信対象・メッセージ内容を確認
  ↓
問題があれば警告を表示
`}
        </pre>
      </section>

      {/* 5. 工数（改善②の実態に合わせて再計算済み） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>
        <ul>
          <li>既存コード理解：4〜6人日</li>
          <li>チェックロジック実装（PHP）：4〜6人日</li>
          <li>UI作成（HTML/CSS/JavaScript）：1〜2人日</li>
          <li>テスト：2〜3人日</li>
        </ul>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          ■ 合計：11〜17人日（リスク工数込み）
        </p>
      </section>

      {/* 6. 実現可能性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>既存APIと内部設定情報を利用するため、技術的に実現可能です。</p>
      </section>

      {/* 7. 既存機能との整合性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>メッセージ配信機能の安全性を高める補完機能であり、整合性が高いです。</p>
      </section>

      {/* 8. 優先順位 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          配信エラーの事前防止により、ユーザーの運用負荷が軽減し、  
          結果として問い合わせ削減につながる可能性があります。
        </p>
      </section>

      {/* 9. 実装時の確認事項 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>チェックロジックの正確性</li>
          <li>API応答の正確な判定</li>
          <li>UIの視認性</li>
          <li>内部設定の正確な取得</li>
        </ul>
      </section>

    </main>
  );
}
