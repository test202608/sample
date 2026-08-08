import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>L Message UI/UX 改善提案</h1>
      <p>非専門職でも迷わず使える L Message を目指した改善案です。</p>

      <h2>改善案一覧</h2>
      <ul>
        <li><Link href="/proposal1">改善案①：初期設定導線の改善</Link></li>
        <li><Link href="/proposal2">改善案②：ステップ配信ロジックの視覚化</Link></li>
        <li><Link href="/proposal3">改善案③：ステップ配信のテスト送信機能</Link></li>
      </ul>
    </>
  );
}
