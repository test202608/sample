export default function Proposal1() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案①：LINE連携・内部設定の自動診断（ヘルスチェック）機能の追加
      </h1>

      {/* 1. 課題点（カテゴリ保持） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>初期設定後に「どこが間違っているか分からない」状態が発生する（UI/UX）</li>
          <li>Webhook応答エラーの原因が特定できない（機能面）</li>
          <li>Messaging APIの設定不一致が画面上で分からない（機能面）</li>
          <li>内部設定の漏れが気づきにくい（UI/UX）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容（自動診断機能）</h2>
        <p>
          LINE連携・Webhook・Messaging API・内部設定を自動診断し、
          問題箇所を画面上に表示する機能を追加します。
        </p>
      </section>

      {/* 3. 図解（画面イメージ） */}
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
              </ul>
            </div>

            {/* 右側：診断画面 */}
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

              {/* 診断ボタン群 */}
              <div style={{
                display: "flex",
                gap: "15px",
                marginBottom: "25px"
              }}>
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

              {/* 診断結果表示エリア（一般ユーザー向け表現） */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>診断結果</h4>

                <div style={{ lineHeight: "2" }}>
                  <div style={{ color: "green" }}>✔ Webhookは正常に応答しています</div>
                  <div style={{ color: "green" }}>✔ LINEとの連携設定は問題ありません</div>
                  <div style={{ color: "green" }}>✔ アクセストークンは有効です</div>
                  <div style={{ color: "red" }}>✖ 自動応答がOFFになっています（ONにしてください）</div>
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
{`ユーザー操作
  ↓
診断開始
  ↓
Webhook応答チェック
  ↓
Messaging APIチェック
  ↓
内部設定チェック
  ↓
結果表示
`}
        </pre>
      </section>

      {/* 5. 工数（合計復元） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>
        <ul>
          <li>診断ロジック：3〜4人日</li>
          <li>UI作成：2人日</li>
          <li>テスト：2人日</li>
        </ul>

        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          ■ 合計：7〜8人日
        </p>
      </section>

      {/* 6〜9（省略なし） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>既存APIと内部設定情報を利用するため、技術的に実現可能です。</p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>初期設定ウィザードの“設定後の弱点”を補完する機能であり、整合性が高いです。</p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>問い合わせ削減効果が大きく、優先度は高いです。</p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>診断ロジックの正確性</li>
          <li>API応答の分類精度</li>
          <li>UIの視認性</li>
          <li>内部設定の取得精度</li>
        </ul>
      </section>

    </main>
  );
}
