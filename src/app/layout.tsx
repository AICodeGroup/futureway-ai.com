import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '未来未科技 - FutureWay Tech',
    template: '%s | 未来未科技',
  },
  description:
    '企业最专业、最值得信赖的科技业务合作伙伴。提供AI大模型开发、软件开发、网站、App、小程序等全方位科技服务。',
  keywords: [
    '未来未科技',
    'FutureWay Tech',
    'AI大模型开发',
    'AI智能体',
    '软件开发',
    '网站开发',
    'App开发',
    '小程序开发',
    '数字化转型',
  ],
  authors: [{ name: 'FutureWay Tech' }],
  generator: 'FutureWay Tech',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: '未来未科技 - FutureWay Tech',
    description:
      '企业最专业、最值得信赖的科技业务合作伙伴',
    url: 'https://www.futureweitech.com',
    siteName: '未来未科技',
    locale: 'zh_CN',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
