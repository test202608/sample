export default function Proposal2() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案②：送信前「設定ミス検知」機能の追加
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>現状のテスト送信では「成功／失敗」しか分からず、失敗の原因が分からない（UI/UX）</li>
          <li>タグ付与・条件分岐・配信タイミングなど複数要素が絡むため、設定ミスの特定が困難（運用面）</li>
          <li>設定ミスが「送信後に発覚」する構造になっており、誤配信リスクが高い（運用面）</li>
          <li>編集画面と一覧画面が分離しており、整合性チェックが手動でしかできない（UI/UX）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          メッセージ配信・ステップ配信の送信前に、設定内容を自動チェックし、
          「送信できない可能性がある設定」を事前に検知して画面に表示する機能を追加します。
          テスト送信では分からない「原因の候補」を送信前に把握できるため、誤配信を未然に防止できます。
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
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}>
          <div style={{ display: "flex" }}>

            {/* 左メニュー */}
            <div style={{
              width: "22%",
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "20px",
              marginRight: "20px",
            }}>
              <h3 style={{ fontSize: "16px", marginBottom: "15px" }}>メニュー</h3>
              <ul style={{ listStyle: "none", paddingLeft: "0", lineHeight: "2" }}>
                <li>・1:1チャット</li>
                <li>・メッセージ配信</li>
                <li>・ステップ配信</li>
                <li>・自動応答</li>
                <li>・データ管理</li>
                <li>・設定</li>
              </ul>
            </div>

            {/* 右側 UIモック */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px",
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                送信前チェック（UIイメージ）
              </h3>

              {/* チェック結果 */}
              <div style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>設定ミス検知結果</h4>
                <div style={{ lineHeight: "1.8", fontSize: "14px" }}>
                  <div style={{ color: "red" }}>・条件分岐：タグ「購入者」が存在しません</div>
                  <div style={{ color: "red" }}>・配信タイミング：ステップ開始後の指定が不正です</div>
                  <div style={{ color: "red" }}>・ステップ2：配信メッセージが未設定です</div>
                </div>
              </div>

              {/* 送信ボタン */}
              <button style={{
                padding: "12px 20px",
                background: "#4a90e2",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}>
                チェックして送信
              </button>

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
          fontSize: "14px",
        }}>
{`送信前チェックを実行
  ↓
設定内容を自動解析
  ↓
不整合・未設定・不正値を検知
  ↓
原因候補を画面に表示
  ↓
修正後に送信を実行`}
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
              <td style={{ padding: "10px" }}>既存配信ロジックの解析</td>
              <td style={{ padding: "10px" }}>PHP / JavaScript / API</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                配信条件・タグ・ステップ構造の整合性を確認する必要があるため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>2</td>
              <td style={{ padding: "10px" }}>設定ミス検知ロジックの設計</td>
              <td style={{ padding: "10px" }}>PHP / JavaScript</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                不整合・未設定・不正値を検知する新規ロジックが必要なため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>3</td>
              <td style={{ padding: "10px" }}>UI実装（チェック結果表示）</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                チェック結果を視認しやすく表示する新規UIが必要なため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>4</td>
              <td style={{ padding: "10px" }}>テスト</td>
              <td style={{ padding: "10px" }}>UIテスト / ロジック検証</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                配信条件・タグ・ステップ構造の複数パターンを検証する必要があるため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#C8E6C9", fontWeight: "bold" }}>
              <td style={{ padding: "10px" }}>合計</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>8〜12人日</td>
              <td style={{ padding: "10px" }}>エルメの作業未経験者を想定したリスクを加味</td>
            </tr>

          </tbody>
        </table>
      </section>

      {/* 6〜9 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>
          既存の配信ロジックを解析し、整合性チェックを追加するだけで実現可能。UI改善と軽微なロジック追加で完結する。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>
          テスト送信機能を補完する位置づけであり、既存の配信ロジックを破壊しない。整合性は高い。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          設定ミスが送信後に発覚する現状の構造を改善できるため、UI構造上の課題として優先度は高い。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>検知対象となる設定項目の範囲を明確化する</li>
          <li>誤検知・過検知を防ぐための条件定義</li>
          <li>チェック結果の表示方法（視認性・可読性）</li>
          <li>既存配信ロジックとの互換性</li>
        </ul>
      </section>

      <div style={{ marginTop: "40px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

    </main>
  );
}
