export default function Proposal1() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>
      
      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案①：LINE連携・内部設定の自動診断（ヘルスチェック）機能
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>初期設定後に「どこが間違っているか分からない」状態が発生する（UI/UX）</li>
          <li>Webhook応答エラーの原因が特定できない（機能面）</li>
          <li>Messaging APIの設定不一致が画面上で把握できない（機能面）</li>
          <li>内部設定の漏れが気づきにくく、運用開始までの時間が増加する（UI/UX）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          LINE連携・Webhook・Messaging API・内部設定を自動診断し、問題箇所を画面上に表示する機能を追加する。<br />
          これにより、初期設定の品質を担保し、設定不備による運用停止を未然に防止する。
        </p>
      </section>

      {/* 3. 図解 */}
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
                  LINE連携診断（NEW）
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
                LINE連携診断（UIイメージ）
              </h3>

              <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
                <button style={{
                  padding: "12px 20px",
                  background: "#4a90e2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}>Webhook診断</button>

                <button style={{
                  padding: "12px 20px",
                  background: "#4a90e2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}>Messaging API診断</button>

                <button style={{
                  padding: "12px 20px",
                  background: "#4a90e2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}>内部設定診断</button>
              </div>

              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>診断結果</h4>
                <div style={{ lineHeight: "2" }}>
                  <div style={{ color: "green" }}>✔ LINEとの接続は正常である</div>
                  <div style={{ color: "green" }}>✔ LINE公式アカウントとの連携設定は問題ない</div>
                  <div style={{ color: "green" }}>✔ 必要な認証情報は正しく登録されている</div>
                  <div style={{ color: "red" }}>✖ 自動応答がOFFである（ONに設定する必要がある）</div>
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
{`LINE連携診断（NEW）をクリックする
  ↓
診断画面が開く
  ↓
ユーザーが診断ボタンを選択する
  ↓
診断処理を実行する
  ↓
診断結果を画面に表示する`}
        </pre>
      </section>

      {/* 5. 工数（フォント14px＋行間1.6） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", lineHeight: "1.6" }}>
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
              <td style={{ padding: "10px" }}>5〜7人日</td>
              <td style={{ padding: "10px" }}>LINE連携設定・Webhook設定・Messaging API設定・内部設定の4領域を横断して調査する必要があるためである。</td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>2</td>
              <td style={{ padding: "10px" }}>診断ロジック実装</td>
              <td style={{ padding: "10px" }}>PHP / JSON処理 / API通信</td>
              <td style={{ padding: "10px" }}>6〜8人日</td>
              <td style={{ padding: "10px" }}>各診断項目ごとにロジックを実装する必要があるためである。</td>
            </tr>

            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>3</td>
              <td style={{ padding: "10px" }}>UI作成</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript / Bootstrap</td>
              <td style={{ padding: "10px" }}>1〜2人日</td>
              <td style={{ padding: "10px" }}>新規UIコンポーネントを追加する必要があるためである。</td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>4</td>
              <td style={{ padding: "10px" }}>テスト</td>
              <td style={{ padding: "10px" }}>-</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>複数パターンの検証が必要であるためである。</td>
            </tr>

            <tr style={{ backgroundColor: "#C8E6C9", fontWeight: "bold" }}>
              <td style={{ padding: "10px" }}>合計</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>14〜20人日</td>
              <td style={{ padding: "10px" }}>未経験者を想定したリスクを加味する。</td>
            </tr>

          </tbody>
        </table>
      </section>

      {/* 6〜9 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>
          既存APIと内部設定情報を利用するため、技術的に実現可能である。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>
          初期設定ウィザードの弱点を補完する機能であり、既存機能との整合性は高い。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          初期設定ミスの可視化により、ユーザーの自己解決率が向上し、問い合わせ削減につながる可能性がある。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>診断ロジックの正確性</li>
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
