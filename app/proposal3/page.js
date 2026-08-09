export default function Proposal3() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案③：テスト送信機能の明確化とエラー原因の可視化
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>1. 具体的な課題点</h2>
        <ul>
          <li>テスト送信が失敗した際、原因が分かりづらい（UI/UX）</li>
          <li>LINE公式アカウント側か L Message 側か、どちらの設定ミスか判別しづらい（機能面）</li>
          <li>Webhook の疎通確認がどこで行われているか分かりにくい（UI/UX）</li>
          <li>非エンジニアにとって「何を直せば良いか」が理解しづらい（UI/UX）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>2. 改善内容</h2>
        <p>
          テスト送信結果を「成功／失敗」だけでなく、失敗時の原因をカテゴリ別に表示します。
          また、LINE公式アカウント側の設定（Webhook・アクセストークン）と、
          L Message 側の設定（チャネルID・シークレット）を一画面で確認できる
          「診断モード」を追加します。
        </p>
      </section>

      {/* 3. 図解（画面イメージ） */}
      <section style={{ marginBottom: "60px" }}>
        <h2>3. 図解</h2>

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
                <li>・テスト送信</li>
                <li>・診断モード</li>
                <li>・設定確認</li>
              </ul>
            </div>

            {/* 右側：診断モード UI */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                テスト送信診断モード（UIイメージ）
              </h3>

              {/* 診断ボタン */}
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
                }}>診断を実行</button>
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
                  <div style={{ color: "green" }}>✔ LINE公式アカウントの設定は正常です</div>
                  <div style={{ color: "green" }}>✔ L Message 側の設定も問題ありません</div>
                  <div style={{ color: "red" }}>✖ テスト送信が失敗しました（自動応答がOFFになっています）</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. フローチャート */}
      <section style={{ marginBottom: "60px" }}>
        <h2>4. フローチャート</h2>
        <pre style={{
          background: "#f7f7f7",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "14px"
        }}>
{`テスト送信失敗
  ↓
原因はどこ？
  ├─ LINE公式アカウント側 → 設定ミスを表示
  ├─ L Message 側 → 入力値の誤りを表示
  └─ ネットワーク → 再試行を案内`}
        </pre>
      </section>

      {/* 5. 工数（合計あり） */}
      <section style={{ marginBottom: "60px" }}>
        <h2>5. 工数</h2>
        <ul>
          <li>要件整理：1人日</li>
          <li>UI設計：2人日</li>
          <li>機能設計：1.5人日</li>
          <li>簡易テスト：1人日</li>
        </ul>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          ■ 合計：5.5人日
        </p>
      </section>

      {/* 6. 実現可能性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>6. 実現可能性</h2>
        <ul>
          <li>既存テスト送信機能に診断ロジックを追加するだけなので技術的に可能</li>
          <li>LINE API の仕様変更は不要</li>
          <li>UI改善と軽微なバックエンド追加で対応可能</li>
        </ul>
      </section>

      {/* 7. 既存機能との整合性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>7. 既存機能との整合性</h2>
        <p>
          現行のテスト送信機能を拡張するだけなので、
          既存ユーザーの運用に影響はありません。
        </p>
      </section>

      {/* 8. 優先順位 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>8. 優先順位</h2>
        <p>
          テスト送信は初期設定の最終確認であり、
          ここが改善されることで設定ミスの早期発見につながります。
          問い合わせ削減効果も高く、優先度は高いです。
        </p>
      </section>

      {/* 9. 実装時の確認事項 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>9. 実装時の確認事項</h2>
        <ul>
          <li>LINE公式アカウント API のレスポンス仕様の確認</li>
          <li>診断ロジックが誤判定しないか</li>
          <li>既存テスト送信機能との整合性</li>
        </ul>
      </section>

    </main>
  );
}
