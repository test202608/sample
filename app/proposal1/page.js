export default function Proposal1() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", lineHeight: "1.8" }}>
      
      {/* タイトル */}
      <h1 style={{ fontSize: "28px", marginBottom: "30px" }}>
        改善案①：初期設定導線の改善（ウィザード化）
      </h1>

      {/* 1. 具体的な課題点 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. 具体的な課題点</h2>
        <ul>
          <li>初期設定が LINE公式アカウント / LINE Developers / L Message の3サービスを往復する構造になっている</li>
          <li>設定漏れが起きやすい（Webhook / チャネルID / シークレット / アクセストークン）</li>
          <li>説明がビデオ形式のため、画面を往復する必要があり分かりにくい</li>
          <li>押す場所が分からず、迷いやすい</li>
          <li>エラー原因が分からない（どこでミスしたか判断できない）</li>
        </ul>
      </section>

      {/* 2. 改善内容（UI案・機能案・補足） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. 改善内容（UI案・機能案・補足）</h2>

        <p>
          初期設定を「ウィザード形式」にすることで、説明と操作を同じ画面内に統合し、
          設定漏れ・迷い・エラー原因不明を解消します。
        </p>

        {/* ウィザードUI案（エルメ風） */}
        <div style={{
          display: "flex",
          marginTop: "30px",
          border: "1px solid #ddd",
          borderRadius: "8px"
        }}>
          
          {/* 左側：ステップ一覧 */}
          <aside style={{
            width: "240px",
            borderRight: "1px solid #ddd",
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>初期設定ウィザード</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2" }}>
              <li>① LINE公式アカウント設定</li>
              <li>② Webhook設定</li>
              <li>③ L Message設定</li>
              <li>④ 接続テスト</li>
            </ul>
          </aside>

          {/* 右側：ウィザード画面 */}
          <section style={{ flex: 1, padding: "30px" }}>
            
            {/* ステップ1 */}
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              ステップ1：LINE公式アカウント設定
            </h3>
            <div style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              background: "#fafafa",
              marginBottom: "40px"
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

            {/* ステップ2 */}
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              ステップ2：Webhook設定
            </h3>
            <div style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              background: "#fafafa",
              marginBottom: "40px"
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

            {/* ステップ3 */}
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              ステップ3：L Message設定
            </h3>
            <div style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              background: "#fafafa",
              marginBottom: "40px"
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

            {/* ステップ4 */}
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              ステップ4：接続テスト
            </h3>
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

          </section>
        </div>
      </section>

      {/* 3. 図解（タイムライン形式） */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>3. 図解（タイムライン形式のUI案）</h2>
        <p>初期設定導線をタイムライン形式で視覚化し、Before/After を明確に示します。</p>
      </section>

      {/* 4. フローチャート */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>4. フローチャート（配信条件の分岐）</h2>
        <p>初期設定の分岐、エラー時の分岐、成功時の流れを図で示します。</p>
      </section>

      {/* 5. 工数 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>5. 工数（根拠付き）</h2>
        <ul>
          <li>UI作成：2〜3人日</li>
          <li>API接続：2人日</li>
          <li>テスト：1〜2人日</li>
          <li>合計：5〜7人日</li>
        </ul>
      </section>

      {/* 6. 実現可能性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>6. 実現可能性（技術・リソース）</h2>
        <p>既存機能の流用が可能であり、技術的にもリソース的にも実現可能です。</p>
      </section>

      {/* 7. 既存機能との整合性 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>7. 既存機能との整合性</h2>
        <p>現行の設定画面と矛盾せず、ビデオ説明の代替として機能します。</p>
      </section>

      {/* 8. 優先順位 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>8. 優先順位</h2>
        <p>初期設定は最重要であり、問い合わせ削減効果が大きいため優先度は高いです。</p>
      </section>

      {/* 9. 実装時の確認事項 */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>9. 実装時の確認事項</h2>
        <ul>
          <li>図解の正確性</li>
          <li>API接続テスト</li>
          <li>必須項目チェック</li>
          <li>UIの操作性</li>
        </ul>
      </section>

    </main>
  );
}
