export default function Proposal3() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      {/* 上部：トップページに戻る */}
      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>
          ← トップページに戻る
        </a>
      </div>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案③：リッチメニュー操作性の最適化（ユーザー導線改善）
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>リッチメニューの編集画面が直感的でなく、操作ミスが発生しやすい（UI/UX）</li>
          <li>ボタン配置の視認性が低く、ユーザーが迷いやすい（UI/UX）</li>
          <li>編集内容の反映タイミングが分かりづらい（UI/UX）</li>
          <li>複数メニューの切り替えが煩雑で、運用負荷が高い（運用面）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          リッチメニュー編集画面の導線を最適化し、  
          ボタン配置の視認性向上・編集内容の即時反映・メニュー切り替えの簡略化を実現するUI改善を行います。
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
                <li>・リッチメニュー（改善）</li>
                <li>・設定</li>
              </ul>
            </div>

            {/* 右側：リッチメニュー改善UI */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                リッチメニュー編集（UIイメージ）
              </h3>

              {/* ボタン配置プレビュー */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>ボタン配置プレビュー</h4>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px"
                }}>
                  <div style={{ background: "#e8f3ff", padding: "15px", borderRadius: "6px" }}>ボタン①</div>
                  <div style={{ background: "#e8f3ff", padding: "15px", borderRadius: "6px" }}>ボタン②</div>
                  <div style={{ background: "#e8f3ff", padding: "15px", borderRadius: "6px" }}>ボタン③</div>
                  <div style={{ background: "#e8f3ff", padding: "15px", borderRadius: "6px" }}>ボタン④</div>
                </div>
              </div>

              {/* 編集項目 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>編集項目</h4>
                <ul style={{ lineHeight: "2" }}>
                  <li>・ボタン名の編集</li>
                  <li>・遷移先URLの設定</li>
                  <li>・アクション種別の選択</li>
                  <li>・メニュー切り替えの即時反映</li>
                </ul>
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
{`リッチメニュー編集画面を開く
  ↓
ボタン配置を確認
  ↓
編集項目を入力
  ↓
即時プレビューで反映を確認
  ↓
保存して公開
`}
        </pre>
      </section>

      {/* 5. 工数 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>
        <ul>
          <li>既存UI構造の理解：2〜3人日</li>
          <li>新UI導線の設計：2〜3人日</li>
          <li>UI実装（HTML/CSS/JavaScript）：3〜5人日</li>
          <li>テスト：2〜3人日</li>
        </ul>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          ■ 合計：9〜14人日（リスク工数込み）
        </p>
      </section>

      {/* 6. 実現可能性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>既存UI構造を活かした改善のため、技術的に実現可能です。</p>
      </section>

      {/* 7. 既存機能との整合性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>リッチメニュー機能の操作性向上に直結する改善であり、整合性が高いです。</p>
      </section>

      {/* 8. 優先順位 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          操作ミスの減少により、ユーザーの運用負荷が軽減し、  
          結果として問い合わせ削減につながる可能性があります。
        </p>
      </section>

      {/* 9. 実装時の確認事項 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>UI導線の分かりやすさ</li>
          <li>編集内容の即時反映の正確性</li>
          <li>ボタン配置の視認性</li>
          <li>内部設定の正確な取得</li>
        </ul>
      </section>

      {/* 下部：トップページに戻る */}
      <div style={{ marginTop: "40px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>
          ← トップページに戻る
        </a>
      </div>

    </main>
  );
}
