export default function Proposal3() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>

      <div style={{ marginBottom: "20px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案③：ステップ配信・タグ・条件分岐の関係性の可視化と設定ミス防止
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>ステップ配信・タグ付与・条件分岐の関係性が画面上で理解しづらい（UI/UX）</li>
          <li>タグ付与のタイミングが視覚的に分からない（UI/UX）</li>
          <li>条件分岐の評価順序が不明瞭で誤設定が起きやすい（機能面）</li>
          <li>ステップ配信の流れが全体として把握しづらい（UI/UX）</li>
          <li>誤設定により意図しない配信が発生するリスクがある（運用面）</li>
        </ul>
      </section>

      {/* 2. 改善内容 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容</h2>
        <p>
          ステップ配信の流れを画面上で可視化し、タグ付与・条件分岐の関係性を直感的に理解できるUIを提供します。
          また、誤設定を防止するためのシミュレーション機能を追加します。
        </p>
      </section>

      {/* 3. 図解（UIモック修正版） */}
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

            {/* 右側 UIモック（修正版） */}
            <div style={{
              flexGrow: 1,
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #ddd",
              padding: "25px"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "20px" }}>
                ステップ配信（UIイメージ）
              </h3>

              {/* ステップ一覧（ボタン化） */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>ステップ一覧</h4>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={{
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    padding: "15px",
                    width: "30%",
                    textAlign: "left",
                    cursor: "pointer"
                  }}>
                    <strong>ステップ1</strong>
                    <div style={{ fontSize: "12px", color: "#666" }}>メッセージ送信</div>
                  </button>

                  <button style={{
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    padding: "15px",
                    width: "30%",
                    textAlign: "left",
                    cursor: "pointer"
                  }}>
                    <strong>ステップ2</strong>
                    <div style={{ fontSize: "12px", color: "#666" }}>案内メッセージ</div>
                  </button>

                  <button style={{
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    padding: "15px",
                    width: "30%",
                    textAlign: "left",
                    cursor: "pointer"
                  }}>
                    <strong>ステップ3</strong>
                    <div style={{ fontSize: "12px", color: "#666" }}>別ルート案内</div>
                  </button>
                </div>
              </div>

              {/* タグ付与設定 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>タグ付与設定</h4>

                <label style={{ display: "block", marginBottom: "10px" }}>
                  このステップ完了時に付与するタグ：
                </label>

                <select style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  width: "50%"
                }}>
                  <option>タグA（購入前）</option>
                  <option>タグB（購入後）</option>
                </select>
              </div>

              {/* 条件分岐設定 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>条件分岐設定</h4>

                <div style={{ marginBottom: "10px" }}>
                  条件：タグAが付いている？
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={{
                    padding: "10px 15px",
                    background: "#4a90e2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    YES → ステップ2へ進む
                  </button>

                  <button style={{
                    padding: "10px 15px",
                    background: "#4a90e2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    NO → ステップ3へ進む
                  </button>
                </div>
              </div>

              {/* フローチャート表示 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "25px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>フローチャート表示</h4>

                <div style={{
                  background: "#fff",
                  padding: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  lineHeight: "1.8"
                }}>
                  <div>ステップ1 → タグ付与（タグA）</div>
                  <div>タグAが付いている？ → YES → ステップ2</div>
                  <div>タグAが付いている？ → NO → ステップ3</div>
                </div>
              </div>

              {/* シミュレーション機能 */}
              <div style={{
                background: "#f9fafc",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px"
              }}>
                <h4 style={{ fontSize: "16px", marginBottom: "15px" }}>シミュレーション機能</h4>

                <button style={{
                  padding: "12px 20px",
                  background: "#4a90e2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginBottom: "15px"
                }}>
                  このユーザーでシミュレーション
                </button>

                <div style={{ lineHeight: "2" }}>
                  <div style={{ color: "green" }}>✔ タグAが付与されます</div>
                  <div style={{ color: "green" }}>✔ 条件分岐の結果：ステップ2へ進みます</div>
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
          border: "1px solid "#ddd",
          fontSize: "14px"
        }}>
{`ステップ配信（改善）をクリック
  ↓
ステップ一覧・タグ付与・条件分岐が表示される
  ↓
フローチャートで流れを確認
  ↓
必要に応じてシミュレーションを実行
  ↓
設定ミスがあれば警告を表示
`}
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
              <td style={{ padding: "10px" }}>既存ステップ配信ロジックの理解</td>
              <td style={{ padding: "10px" }}>PHP / JavaScript / HTML / CSS / jQuery</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                ステップ配信・タグ付与・条件分岐の既存仕様を把握する必要があるため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>2</td>
              <td style={{ padding: "10px" }}>フローチャートUI設計</td>
              <td style={{ padding: "10px" }}>HTML / CSS / JavaScript / jQuery / LME-UI</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                ステップ配信の流れを視覚化する新規UIコンポーネントを設計するため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#E8F5E9" }}>
              <td style={{ padding: "10px" }}>3</td>
              <td style={{ padding: "10px" }}>シミュレーション機能の実装</td>
              <td style={{ padding: "10px" }}>PHP / API応答処理 / 条件分岐ロジック</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                条件分岐の結果を事前に確認するためのロジックを新規実装するため。
              </td>
            </tr>

            <tr style={{ backgroundColor: "#F1F8E9" }}>
              <td style={{ padding: "10px" }}>4</td>
              <td style={{ padding: "10px" }}>テスト</td>
              <td style={{ padding: "10px" }}>PHP / UIテスト / ロジック検証</td>
              <td style={{ padding: "10px" }}>2〜3人日</td>
              <td style={{ padding: "10px" }}>
                条件分岐・タグ付与・ステップ遷移の複数パターンを検証する必要があるため。
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
          ステップ配信・タグ付与・条件分岐は既存機能であり、視覚化とシミュレーションは拡張で実現可能です。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>
          既存のステップ配信ロジックを破壊せず、UI改善と補助機能の追加のみで整合性を保てます。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>
          ステップ配信は全ユーザーが利用する主要機能であり、誤設定防止の効果が大きいため優先度が高いです。
        </p>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>条件分岐ロジックの正確性</li>
          <li>タグ付与タイミングの整合性</li>
          <li>ステップ遷移の視認性</li>
          <li>既存ステップ配信との互換性</li>
        </ul>
      </section>

      <div style={{ marginTop: "40px" }}>
        <a href="/" style={{ color: "#0066cc", fontSize: "18px" }}>← トップページに戻る</a>
      </div>

    </main>
  );
}
