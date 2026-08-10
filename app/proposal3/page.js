export default function Proposal3() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
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

      {/* 5. 工数（作業内容と利用技術を分離） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px" }}>
          <thead>
            <tr style={{ backgroundColor: "#2E7D32", color: "white" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>作業内容</th>
              <th style={{ padding: "10px", textAlign: "left" }}>利用技術</th>
              <th style={{ padding: "10px", textAlign: "left" }}>工数</th>
              <th style={{ padding: "10px", textAlign: "left" }}>根拠</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>既存UI構造の理解</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript / jQuery / Bootstrap / LME-UI</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                リッチメニュー編集画面の既存導線・UI構造を把握する必要があるため。
              </td>
            </tr>
            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>新UI導線の設計</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript / jQuery / Bootstrap / LME-UI</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                ボタン配置・編集項目・即時反映など新規導線を設計するため。
              </td>
            </tr>
            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>UI実装</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript / jQuery / Bootstrap / LME-UI</td>
              <td style={{ padding: "10px" }}>3〜5人日</td>
              <td style={{ padding: "10px" }}>
                プレビューUI・編集項目UI・即時反映ロジックなど複数コンポーネントを実装するため。
              </td>
            </tr>
            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>テスト</td>
              <td style={{ padding: "10px" }}>PHP / UIテスト / API応答検証</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                UI反映タイミング・編集内容保存・複数メニュー切替など複数パターンの検証が必要なため。
              </td>
            </tr>
          </tbody>
        </table>

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

      <div style={{ marginTop: "40px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

    </main>
  );
}
