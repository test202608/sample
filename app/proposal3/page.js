export default function Proposal3() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案③：ステップ配信一覧における設定内容のマウスオーバープレビュー機能の追加
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>ステップ配信一覧では管理名・進行状況のみが表示され、設定内容（配信タイミング・ステップ数・条件分岐など）が確認できない（UI/UX）</li>
          <li>設定内容を確認するために編集画面へ遷移する必要があり、往復操作が多く運用効率が低下する（運用面）</li>
          <li>ステップ配信が複数存在する場合、設定内容の把握に時間がかかり、誤認や設定ミスの原因となる（運用面）</li>
          <li>一覧画面が「俯瞰」できる構造になっておらず、ステップ配信の全体像を把握しづらい（UI/UX）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          ステップ配信一覧の「管理名」にマウスオーバーすると、設定内容の概要（配信タイミング・ステップ数・条件分岐・タグ付与・最終更新者など）が
          ポップアップで表示される機能を追加します。
          編集画面に遷移せずに一覧画面だけで設定内容を俯瞰できるため、運用効率が大幅に向上します。
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
                <li>・ステップ配信（改善）</li>
                <li>・タグ管理</li>
                <li>・設定</li>
              </ul>
            </div>

            {/* 右側 UIモック */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                ステップ配信一覧（UIイメージ）
              </h3>

              {/* 一覧画面 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>ステップ配信一覧</h4>

                <div style={{ marginBottom: "20px" }}>
                  <strong>管理名：新規ユーザー育成フロー</strong>
                  <span style={{ marginLeft: "10px", color: "#4a90e2" }}>（マウスオーバー）</span>
                </div>

                {/* ポップアップ */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "60%",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}>
                  <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>設定内容プレビュー</h4>
                  <div style={{ lineHeight: "1.8", fontSize: "14px" }}>
                    <div>・ステップ数：5</div>
                    <div>・配信タイミング：友だち追加後 1日目</div>
                    <div>・ステップ間隔：1日 → 2日 → 3日</div>
                    <div>・条件分岐：あり（タグ：購入者）</div>
                    <div>・タグ付与：ステップ3で「見込み客」付与</div>
                    <div>・最終更新：2026/08/10 11:32（由二）</div>
                  </div>
                </div>
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
{`ステップ配信一覧を表示
  ↓
管理名にマウスオーバー
  ↓
該当ステップ配信IDを取得
  ↓
既存の「ステップ配信設定取得API」を呼び出し
  ↓
設定内容をポップアップとして表示
  ↓
マウスアウトで非表示`}
        </pre>
      </section>

      {/* 5. 工数 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px" }}>
          <thead>
            <tr style={{ backgroundColor: "#2E7D32", color: "white" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>項番</th>
              <th style={{ padding: "10px", textAlign: "left" }}>作業内容</th>
              <th style={{ padding: "10px", textAlign: "left" }}>利用技術</th>
              <th style={{ padding: "10px", textAlign: "left" }}>工数</th>
              <th style={{ padding: "10px", textAlign: "left" }}>根拠</th>
            </tr>
          </thead>
          <tbody>

            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>1</td>
              <td style={{ padding: "10px" }}>既存ステップ配信設定APIの確認</td>
              <td style={{ padding: "10px" }}>PHP / JavaScript / API</td>
              <td style={{ padding: "10px" }}>0.5〜1人日</td>
              <td style={{ padding: "10px" }}>
                編集画面で使用しているAPIを一覧画面でも利用するため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>2</td>
              <td style={{ padding: "10px" }}>ポップアップUI設計</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript</td>
              <td style={{ padding: "10px" }}>1人日</td>
              <td style={{ padding: "10px" }}>
                設定内容を視認しやすい形で表示する新規UIが必要なため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>3</td>
              <td style={{ padding: "10px" }}>マウスオーバーイベント実装</td>
              <td style={{ padding: "10px" }}>JavaScript / jQuery</td>
              <td style={{ padding: "10px" }}>1人日</td>
              <td style={{ padding: "10px" }}>
                一覧画面でのイベント処理とAPI呼び出しを追加するため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>4</td>
              <td style={{ padding: "10px" }}>テスト</td>
              <td style={{ padding: "10px" }}>UIテスト / API応答確認</td>
              <td style={{ padding: "10px" }}>1人日</td>
              <td style={{ padding: "10px" }}>
                マウスオーバー時の表示・非表示、API応答の整合性を確認するため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#C8E6C9", fontWeight: "bold" }}>
              <td style={{ padding: "10px" }}>合計</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>3.5〜4人日</td>
              <td style={{ padding: "10px" }}>UI改善のみのため低コストで実現可能</td>
            </tr>

          </tbody>
        </table>
      </section>

      {/* 6〜9 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>
          編集画面で既に利用しているステップ配信設定取得APIを一覧画面でも再利用できるため、
          実現可能性は高い。UI改善のみで完結する。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>
          既存のステップ配信ロジックを変更せず、一覧画面に情報表示を追加するだけで整合性を保てる。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          ステップ配信は運用頻度が高く、設定内容の確認ニーズが強いため優先度は高い。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>APIレスポンスの項目名と表示項目の整合性</li>
          <li>マウスオーバー時の表示遅延の最小化</li>
          <li>スマホ版でのタップ時の表示仕様</li>
          <li>既存ステップ配信との互換性</li>
        </ul>
      </section>

      <div style={{ marginTop: "40px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

    </main>
  );
}
