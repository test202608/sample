export const metadata = {
  title: "L Message 改善提案",
  robots: "noindex, nofollow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "sans-serif", padding: "20px" }}>
        {children}
      </body>
    </html>
  );
}
