export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        L Message 改善提案
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        以下に改善案を3点提示します。<br />
        改善案の番号は、優先順位を表します。
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>改善案の優先順位と理由</h2>
        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>
            <strong>改善案①（設定の品質保証）</strong><br />
            初期設定の成否を左右し、全機能の利用可否に直結するため。
          </li>
          <li>
            <strong>改善案②（運用の安全保証）</strong><br />
            初期設定の最終確認であり、設定ミスの早期発見に直結するため。
          </li>
          <li>
            <strong>改善案③（運用効率の向上）</strong><br />
            運用効率の向上が目的であり、初期設定の成功が前提となるため。
          </li>
        </ul>
      </section>

      {/* 改善案一覧（表形式） */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>改善案一覧</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px", textAlign: "left" }}>番号</th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px", textAlign: "left" }}>改善案タイトル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>改善案①</td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                <a href="/proposal1" style={{ color: "#0066cc" }}>
                  LINE連携・内部設定の自動診断（ヘルスチェック）機能
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>改善案②</td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                <a href="/proposal2" style={{ color: "#0066cc" }}>
                  テスト送信機能の明確化とエラー原因の可視化
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>改善案③</td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                <a href="/proposal3" style={{ color: "#0066cc" }}>
                  ステップ配信の視認性向上と設定ミス防止
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>
  );
}
