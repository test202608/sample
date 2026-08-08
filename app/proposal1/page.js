export default function Proposal1() {
  return (
    <>
      <h1>改善案①：初期設定導線の改善</h1>

      <h2>課題点</h2>
      <ul>
        <li>Webhook の意味が非専門職に理解しづらい</li>
        <li>LINE Developers の導線が複雑で迷いやすい</li>
        <li>初期設定で離脱しやすい</li>
      </ul>

      <h2>改善内容</h2>
      <p>初期設定の流れを 1 画面で視覚化し、迷わない導線を提供します。</p>

      <h2>UI案（流れ図）</h2>
      <pre>
{`Step1: LINE Developers でチャネル作成
   ↓
Step2: Webhook URL 設定
   ↓
Step3: エルメ側で接続確認
   ↓
Step4: テスト送信`}
      </pre>

      <h2>実現可能性</h2>
      <p>既存機能の組み合わせで実現可能。技術的制約なし。</p>

      <h2>工数</h2>
      <p>UI改修：中 / 機能追加：小 / テスト：小</p>
    </>
  );
}
