export default function Proposal1() {
  return (
    <main style={{ display: "flex", padding: "40px", fontFamily: "sans-serif" }}>
      
      {/* 左側：ステップ一覧（エルメ風） */}
      <aside style={{
        width: "240px",
        borderRight: "1px solid #ddd",
        paddingRight: "20px"
      }}>
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>初期設定ウィザード</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2" }}>
          <li>① LINE公式アカウント設定</li>
          <li>② Webhook設定</li>
          <li>③ L Message設定</li>
          <li>④ 接続テスト</li>
        </ul>
      </aside>

      {/* 右側：ウィザード画面 */}
      <section style={{ flex: 1, paddingLeft: "40px" }}>
        
        <h1 style={{ fontSize: "26px", marginBottom: "20px" }}>
          改善案①：初期設定導線の改善（ウィザード化）
        </h1>

        <p style={{ marginBottom: "30px", lineHeight: "1.8" }}>
          現状の初期設定は、LINE公式アカウント・LINE Developers・L Message の
          3つのサービスを行き来する必要があり、設定漏れや迷いが発生します。
          <br />
          改善案①では、これらの操作を「ウィザード形式」でガイドし、
          説明と操作を同じ画面内に統合することで、迷いをゼロにします。
        </p>

        {/* ステップ1 */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>ステップ1：LINE公式アカウント設定</h2>

          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fafafa"
          }}>
            <p>以下のボタンをクリックすると、LINE公式アカウント管理画面が別タブで開きます。</p>

            <button style={{
              background: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px"
            }}>
              LINE公式アカウント管理画面を開く
            </button>

            <div style={{
              marginTop: "20px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "6px"
            }}>
              <strong>図解：</strong>
              <p>Messaging API → 「有効化」ボタンの位置を視覚的に表示</p>
              <div style={{
                border: "1px dashed #aaa",
                padding: "20px",
                textAlign: "center",
                marginTop: "10px"
              }}>
                ★ 有効化ボタン（図）
              </div>
            </div>

            <p style={{ marginTop: "20px" }}>
              チャネル作成の入力項目も図で示されます。
            </p>

            <button style={{
              marginTop: "20px",
              background: "#28a745",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              次へ（ステップ2へ）
            </button>
          </div>
        </div>

        {/* ステップ2 */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>ステップ2：Webhook設定</h2>

          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fafafa"
          }}>
            <button style={{
              background: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              Webhook URL をコピー
            </button>

            <button style={{
              background: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginLeft: "10px"
            }}>
              LINE Developers を開く
            </button>

            <div style={{
              marginTop: "20px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "6px"
            }}>
              <strong>図解：</strong>
              <p>Webhook URL の貼り付け位置を視覚的に表示</p>
              <div style={{
                border: "1px dashed #aaa",
                padding: "20px",
                textAlign: "center",
                marginTop: "10px"
              }}>
                ★ Webhook URL 入力欄（図）
              </div>
            </div>

            <button style={{
              marginTop: "20px",
              background: "#28a745",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              次へ（ステップ3へ）
            </button>
          </div>
        </div>

        {/* ステップ3 */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>ステップ3：L Message設定</h2>

          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fafafa"
          }}>
            <p>必須項目は赤枠で表示され、未入力の場合は次へ進めません。</p>

            <div style={{ marginTop: "20px" }}>
              <label>チャネルID（必須）</label>
              <input style={{
                width: "100%",
                padding: "10px",
                border: "2px solid red",
                borderRadius: "6px",
                marginTop: "5px"
              }} />
            </div>

            <div style={{ marginTop: "20px" }}>
              <label>チャネルシークレット（必須）</label>
              <input style={{
                width: "100%",
                padding: "10px",
                border: "2px solid red",
                borderRadius: "6px",
                marginTop: "5px"
              }} />
            </div>

            <div style={{ marginTop: "20px" }}>
              <label>アクセストークン（必須）</label>
              <input style={{
                width: "100%",
                padding: "10px",
                border: "2px solid red",
                borderRadius: "6px",
                marginTop: "5px"
              }} />
            </div>

            <button style={{
              marginTop: "20px",
              background: "#28a745",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              次へ（ステップ4へ）
            </button>
          </div>
        </div>

        {/* ステップ4 */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>ステップ4：接続テスト</h2>

          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fafafa"
          }}>
            <button style={{
              background: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              テスト送信
            </button>

            <div style={{
              marginTop: "20px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "6px"
            }}>
              <strong>結果表示：</strong>
              <p>成功 → 緑色で「接続成功」</p>
              <p>失敗 → 原因を分類して赤枠で表示</p>
            </div>

            <button style={{
              marginTop: "20px",
              background: "#6c757d",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              完了
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}
