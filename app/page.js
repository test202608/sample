export default function Home() {
  return (
    <main style={{ padding: "40px", lineHeight: "1.8" }}>
      <h1>L Message 改善提案サイト</h1>
      <p>以下の改善提案を閲覧できます。</p>

      <section style={{ marginTop: "30px" }}>
        <h2>改善提案一覧</h2>
        <ul style={{ fontSize: "18px" }}>
          <li>
            <a href="/proposal1" style={{ color: "#0066cc" }}>
              改善案①：初期設定導線の改善
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

      <section style={{ marginTop: "40px" }}>
        <h2>サイトについて</h2>
        <p>
          このサイトは、L Message の改善提案を非エンジニアにも分かりやすく
          図解・フローチャートを用いてまとめたものです。
        </p>
        <p>
          Basic認証および noindex 設定により、外部検索エンジンには表示されません。
        </p>
      </section>
    </main>
  );
}
