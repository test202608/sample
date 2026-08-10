export default function Proposal2() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案②：送信前「誤配信防止チェック」機能の追加
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>現状の配信内容確認画面は、人間が自力で見落としなく確認する必要がある（UI/UX）</li>
          <li>必須項目の未設定は防げるが、誤配信につながる設定はシステムが検知しない（運用面）</li>
          <li>絞り込み条件未設定（＝全員配信）など、仕様上正常だが誤配信につながる設定が存在する（運用面）</li>
          <li>配信日時の設定ミスにより、意図せず即時配信されるケースがある（運用面）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          配信開始前に、誤配信につながる設定をシステムが自動抽出し、
          ユーザーが確認できるように提示する「誤配信防止チェック」機能を追加します。<br />
          現状の「人間が自力で気づくしかない」構造から、
          「システムが指摘 → 人間が確認」という安全な構造へ改善します。
        </p>
      </section>

      {/* 3. 図解（UIモック） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>3. 図解</h2>

        {/* 配信一覧画面 */}
        <div style={{
          background: "#eef2f7",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          marginBottom: "40px",
        }}>
          <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>メッセージ配信一覧（既存＋新規ボタン）</h3>

          <div style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            fontSize: "14px",
          }}>
            <div style={{ marginBottom: "10px" }}>
              配信予定日時　管理者タイトル　配信数　送信者名　アクション　クイックテスト　送信前チェック
            </div>
            <div>
              2026/08/10　　○○キャンペーン　3人　test.sample　編集　テスト送信　
              <button style={{
                padding: "6px 12px",
                background: "#4a90e2",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}>
                送信前チェック
              </button>
            </div>
          </div>
        </div>

        {/* チェック結果画面 */}
        <div style={{
          background: "#eef2f7",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #ccc",
        }}>
          <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>送信前チェック結果（新規画面）</h3>

          <div style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            fontSize: "14px",
            lineHeight: "1.8",
          }}>
            <p>以下の項目は誤配信につながる可能性があります。内容をご確認ください。</p>

            <div style={{ color: "red" }}>
              ・配信先が「全員」になっています  
              <br />　→ 絞り込み条件が設定されていないため、意図しないユーザーに配信される可能性があります。
            </div>

            <div style={{ color: "red", marginTop: "10px" }}>
              ・送信者名が初期値のままです  
              <br />　→ 意図しない送信者名で配信される可能性があります。
            </div>

            <div style={{ color: "red", marginTop: "10px" }}>
              ・配信日時が現在時刻と近い時間です  
              <br />　→ 即時配信となる可能性があります。
            </div>

            <div style={{ color: "red", marginTop: "10px" }}>
              ・メッセージ内容が短すぎる／本文が空に近いです  
              <br />　→ 意図しない内容で配信される可能性があります。
            </div>

            <button style={{
              marginTop: "20px",
              padding: "10px 16px",
              background: "#777",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}>
              戻る
            </button>
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
誤配信につながる設定を抽出
  ↓
チェック結果として画面に提示
  ↓
ユーザーが内容を確認
  ↓
問題なければ配信開始`}
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
                誤配信につながる設定項目の抽出が必要なため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>2</td>
              <td style={{ padding: "10px" }}>誤配信防止チェックロジックの設計</td>
              <td style={{ padding: "10px" }}>PHP / JavaScript</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                配信先・送信者名・配信日時などの整合性チェックが必要なため。
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
                誤配信リスク抽出ロジックの複数パターン検証が必要なため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#C8E6C9", fontWeight: "bold" }}>
              <td style={{ padding: "10px" }}>合計</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>ー</td>
              <td style={{ padding: "10px" }}>8〜12人日</td>
              <td style={{ padding: "10px" }}>エルメ未経験者を想定したリスクを加味</td>
            </tr>

          </tbody>
        </table>
      </section>

      {/* 6〜9 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性</h2>
        <p>
          既存の配信ロジックに誤配信リスク抽出処理を追加するだけで実現可能。UI改善と軽微なロジック追加で完結する。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>
          現状の配信内容確認画面を補完する位置づけであり、既存ロジックを破壊しない。整合性は高い。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          誤配信はユーザー体験に直結するため、UI構造上の課題として優先度は高い。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>誤配信リスクとして扱う項目の範囲定義</li>
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
