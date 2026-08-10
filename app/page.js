export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      {/* タイトル（ロゴ＋テキスト） */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img 
          src="/logo-lme.png"
          alt="L Message ロゴ"
          style={{ height: "40px", width: "auto", marginRight: "12px" }}
        />
        <h1 style={{ fontSize: "32px", margin: 0 }}>
          改善提案
        </h1>
      </div>

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
            配信前に誤配信リスクを事前に把握でき、運用の安全性に直結するため。
          </li>
          <li>
            <strong>改善案③（運用効率の向上）</strong><br />
            一覧画面で設定内容を俯瞰できるようになり、編集画面への往復が不要になるため。
          </li>
        </ul>
      </section>

      {/* 改善案一覧（表形式・着色済み） */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>改善案一覧</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px" }}>
          <thead>
            <tr style={{ backgroundColor: "#2E7D32", color: "white" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>番号</th>
              <th style={{ padding: "10px", textAlign: "left" }}>改善案タイトル</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>改善案①</td>
              <td style={{ padding: "10px" }}>
                <a href="/proposal1" style={{ color: "#0066cc" }}>
                  LINE連携・内部設定の自動診断（ヘルスチェック）機能
                </a>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>改善案②</td>
              <td style={{ padding: "10px" }}>
                <a href="/proposal2" style={{ color: "#0066cc" }}>
                  送信前「誤配信防止チェック」機能
                </a>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>改善案③</td>
              <td style={{ padding: "10px" }}>
                <a href="/proposal3" style={{ color: "#0066cc" }}>
                  ステップ配信一覧における設定内容のマウスオーバープレビュー機能の追加
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 注意文（サブタイトル付き・小さめの文字） */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "16px", marginBottom: "10px", color: "#444" }}>ご注意</h2>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
          本改善案はアイデアレベルであり、机上検討では実現可能と判断しておりますが、<br />
          実証検証（PoC検証）を実施したものではありませんので、実現の保証は致し兼ねます。
        </p>
      </section>

    </main>
  );
}
