export default function Proposal1() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案①：LINE連携・内部設定の自動診断（ヘルスチェック）機能の追加
      </h1>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>初期設定後に「どこが間違っているか分からない」状態が発生する（UI/UX）</li>
          <li>Webhook応答エラーの原因が特定できない（機能面）</li>
          <li>Messaging APIの設定不一致が画面上で分からない（機能面）</li>
          <li>リッチメニューや自動応答の設定漏れが気づきにくい（UI/UX）</li>
          <li>問い合わせの大半が「設定したはずなのに動かない」系である（機能面）</li>
        </ul>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容（自動診断機能）</h2>

        <p>
          LINE連携・Webhook・Messaging API・エルメ内部設定を自動診断し、
          問題箇所を特定して画面上に表示する機能を追加します。
        </p>

        <ul style={{ lineHeight: "2.2", marginTop: "20px" }}>
          <li>① Webhook応答チェック（200/400/500の分類）</li>
          <li>② Messaging API接続チェック（ID・シークレット・トークン）</li>
          <li>③ LINE側の設定状態チェック（Messaging API ON/OFF）</li>
          <li>④ エルメ内部設定チェック（リッチメニュー・自動応答・フォーム）</li>
          <li>⑤ 診断結果を緑/赤で明確に表示</li>
        </ul>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>3. 図解（診断画面）</h2>

        <div style={{
          background: "#f7f7f7",
          border: "1px solid #ddd",
          padding: "30px",
          borderRadius: "8px",
          marginBottom: "40px"
        }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            診断結果（例）
          </h3>

          <div style={{
            border: "1px dashed #aaa",
            padding: "20px",
            background: "#fff",
            textAlign: "center"
          }}>
            ★ Webhook：200（正常）  
            ★ Messaging API：チャネルID一致  
            ★ アクセストークン：有効  
            ★ 自動応答：OFF（赤表示）
          </div>
        </div>
      </section>

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
結果表示（緑/赤）
  ↓
修正案の提示
`}
        </pre>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>
        <ul>
          <li>診断ロジック実装：3〜4人日</li>
          <li>UI作成：2人日</li>
          <li>テスト：2人日</li>
          <li>合計：7〜8人日</li>
        </ul>
      </section>

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
