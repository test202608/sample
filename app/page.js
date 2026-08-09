export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        L Message 改善提案
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        この改善案の番号は、重要度に基づく優先順位です。
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>改善案の優先順位と理由</h2>
        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>
            <strong>改善案①</strong>  
            初期設定の成否を左右し、全機能の利用可否に直結するため。
          </li>
          <li>
            <strong>改善案②</strong>  
            初期設定の最終確認であり、設定ミスの早期発見に直結するため。
          </li>
          <li>
            <strong>改善案③</strong>  
            運用効率の向上が目的であり、初期設定の成功が前提となるため。
          </li>
        </ul>
      </section>

      {/* 改善案一覧（番号＝優先順位） */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>改善提案一覧（番号＝優先順位）</h2>
        <ul style={{ fontSize: "18px", lineHeight: "2" }}>
          <li>
            <a href="/proposal1" style={{ color: "#0066cc" }}>
              改善案①：LINE連携・内部設定の自動診断（ヘルスチェック）機能
            </a>
          </li>
          <li>
            <a href="/proposal2" style={{ color: "#0066cc" }}>
              改善案②：テスト送信機能の明確化とエラー原因の可視化
            </a>
          </li>
          <li>
            <a href="/proposal3" style={{ color: "#0066cc" }}>
              改善案③：ステップ配信の視認性向上と設定ミス防止
            </a>
          </li>
        </ul>
      </section>

    </main>
  );
}
