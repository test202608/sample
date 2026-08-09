export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        L Message 改善提案サイト
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        L Message の改善提案を、非エンジニアにも分かりやすく  
        図解（画面イメージ）とフローチャートでまとめています。
      </p>

      {/* 図解：サイト構造イメージ */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>サイト構造（図解）</h2>

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
                <li>・改善案①</li>
                <li>・改善案②</li>
                <li>・改善案③</li>
              </ul>
            </div>

            {/* 右側：説明画面 */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                改善提案サイト（UIイメージ）
              </h3>

              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px"
              }}>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  ・改善案を一覧で確認できます  
                  ・各改善案は図解とフローチャートで説明  
                  ・非エンジニアでも理解しやすい構成  
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 改善案一覧（改善案①を最新の内容に更新） */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>改善提案一覧</h2>
        <ul style={{ fontSize: "18px", lineHeight: "2" }}>
          <li>
            <a href="/proposal1" style={{ color: "#0066cc" }}>
              改善案①：LINE連携・内部設定の自動診断（ヘルスチェック）機能
            </a>
          </li>
          <li>
            <a href="/proposal2" style={{ color: "#0066cc" }}>
              改善案②：ステップ配信の視認性向上
            </a>
          </li>
          <li>
            <a href="/proposal3" style={{ color: "#0066cc" }}>
              改善案③：テスト送信機能の改善
            </a>
          </li>
        </ul>
      </section>

      {/* サイトについて */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>サイトについて</h2>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          このサイトは、L Message の改善提案を図解・フローチャートでまとめたものです。
        </p>
        <p style={{ fontSize: "18px" }}>
          Basic認証および noindex 設定により、外部検索エンジンには表示されません。
        </p>
      </section>

    </main>
  );
}
