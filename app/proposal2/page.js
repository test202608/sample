export default function Proposal2() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案②：ステップ配信の視認性向上と設定ミス防止
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>1. 具体的な課題点</h2>
        <ul>
          <li>ステップ配信の全体構造が一目で把握しづらい（UI/UX）</li>
          <li>配信条件が複数画面に分散し、理解しづらい（UI/UX）</li>
          <li>どのステップがどの条件で送られるか分かりにくい（機能面）</li>
          <li>設定ミスが起きても原因が特定しづらい（機能面）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>2. 改善内容</h2>
        <p>
          ステップ配信を「タイムライン形式」で視覚化し、配信順序・条件・分岐を
          一画面で把握できるようにします。条件設定は一つのモーダルに統合し、
          設定漏れを防ぐチェック機能を追加します。
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
                <li>・ステップ一覧</li>
                <li>・条件設定</li>
                <li>・配信履歴</li>
              </ul>
            </div>

            {/* 右側：タイムラインUI */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                ステップ配信（タイムラインUIイメージ）
              </h3>

              <div style={{ lineHeight: "2" }}>
                <div style={{ marginBottom: "20px" }}>
                  <strong>ステップ1（友だち追加直後）</strong><br />
                  条件：全員
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <strong>ステップ2（1日後）</strong><br />
                  条件：タグ「興味あり」
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <strong>ステップ3（3日後）</strong><br />
                  条件：属性「女性」
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <strong>ステップ4（7日後）</strong><br />
                  条件：購入者のみ
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
{`ステップ開始
  ↓
条件を満たす？
  ├─ YES → 配信する
  └─ NO  → 次のステップへ`}
        </pre>
      </section>

      {/* 5. 工数（合計あり） */}
      <section style={{ marginBottom: "60px" }}>
        <h2>5. 工数</h2>
        <ul>
          <li>要件整理：1.5人日</li>
          <li>UI設計：2.5人日</li>
          <li>機能設計：1人日</li>
          <li>簡易テスト：1人日</li>
        </ul>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          ■ 合計：6人日
        </p>
      </section>

      {/* 6. 実現可能性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>6. 実現可能性</h2>
        <ul>
          <li>既存ロジックを流用できるため、バックエンド改修は最小限</li>
          <li>UI改善が中心で、技術的難易度は高くない</li>
          <li>LINE API の仕様変更は不要</li>
        </ul>
      </section>

      {/* 7. 既存機能との整合性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>7. 既存機能との整合性</h2>
        <p>
          現行のステップ配信機能を視覚化するだけなので、
          既存ユーザーの設定が壊れることはありません。
        </p>
      </section>

      {/* 8. 優先順位 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>8. 優先順位</h2>
        <p>
          ステップ配信は多くのユーザーが利用する重要機能であり、
          設定ミスが売上に直結するため優先度は高いです。
        </p>
      </section>

      {/* 9. 実装時の確認事項 */}
      <section style={{ marginBottom: "60px" }}>
        <h2>9. 実装時の確認事項</h2>
        <ul>
          <li>既存ステップ配信データとの整合性</li>
          <li>条件分岐の誤判定が起きないか</li>
          <li>UI変更による操作負荷の増減</li>
        </ul>
      </section>

    </main>
  );
}
