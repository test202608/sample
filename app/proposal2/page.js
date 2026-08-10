export default function Proposal2() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

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

      {/* 5. 工数（項番を数字に変更＋合計行追加） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px" }}>
          <thead>
            <tr style={{ backgroundColor: "#2E7D32", color: "white" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>項番</th>
              <th style={{ padding: "10px", textAlign: "left" }}>作業内容</th>
              <th style={{ padding: "10px", textAlign: "left" }}>利用技術</th>
              <th style={{ padding: "10px", textAlign: "left" }}>工数</th>
              <th style={{ padding: "10px", textAlign: "left" }}>根拠</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>1</td>
              <td style={{ padding: "10px" }}>既存コード理解</td>
              <td style={{ padding: "10px" }}>PHP / JavaScript / HTML / CSS / jQuery</td>
              <td style={{ padding: "10px" }}>4〜6人日</td>
              <td style={{ padding: "10px" }}>
                配信機能・内部設定・LINE連携の3領域を横断して調査する必要があるため。
              </td>
            </tr>
            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>2</td>
              <td style={{ padding: "10px" }}>チェックロジック実装</td>
              <td style={{ padding: "10px" }}>PHP / JSON処理 / API通信（HTTP）</td>
              <td style={{ padding: "10px" }}>4〜6人日</td>
              <td style={{ padding: "10px" }}>
                配信対象判定・内部設定整合性チェック・エラー分類ロジックを実装するため。
              </td>
            </tr>
            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>3</td>
              <td style={{ padding: "10px" }}>UI作成</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript / jQuery / Bootstrap / LME-UI</td>
              <td style={{ padding: "10px" }}>1〜2人日</td>
              <td style={{ padding: "10px" }}>
                チェックボタン・結果表示エリア・警告表示など新規UIコンポーネントを追加するため。
              </td>
            </tr>
            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>4</td>
              <td style={{ padding: "10px" }}>テスト</td>
              <td style={{ padding: "10px" }}>PHP / API応答検証 / UIテスト</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                配信対象ゼロ・内部設定不整合・LINE連携不備など複数パターンの検証が必要なため。
              </td>
            </tr>

            {/* 合計行 */}
            <tr style={{ backgroundColor: "#C8E6C9", fontWeight: "bold" }}>
              <td style={{ padding: "10px" }}>合計</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>11〜17人日</td>
              <td style={{ padding: "10px" }}>リスク工数込み</td>
            </tr>
          </tbody>
        </table>

        {/* 注意文 */}
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
          上記は、エルメの作業未経験者を想定したリスク込みの工数です。
        </p>
      </section>

      {/* 6〜9（既存のまま） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>既存APIと内部設定情報を利用するため、技術的に実現可能です。</p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>メッセージ配信機能の安全性を高める補完機能であり、整合性が高いです。</p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          配信エラーの事前防止により、ユーザーの運用負荷が軽減し、  
          結果として問い合わせ削減につながる可能性があります。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>チェックロジックの正確性</li>
          <li>API応答の正確な判定</li>
          <li>UIの視認性</li>
          <li>内部設定の正確な取得</li>
        </ul>
      </section>

      <div style={{ marginTop: "40px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

    </main>
  );
}
