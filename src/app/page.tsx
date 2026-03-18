'use client';

import Image from 'next/image';
import { 
  ChevronRight, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Navigation - Apple Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Image 
                src="/full-logo.svg" 
                alt="FUTUREWAY" 
                width={80} 
                height={40}
                className="h-8 w-auto"
                priority
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-xs">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">关于</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">团队</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">业务</a>
              <a href="#cases" className="text-gray-600 hover:text-gray-900 transition-colors">案例</a>
              <a href="#cooperation" className="text-gray-600 hover:text-gray-900 transition-colors">合作</a>
              <a href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full transition-colors">
                联系我们
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors">关于</a>
              <a href="#team" className="block text-gray-600 hover:text-gray-900 transition-colors">团队</a>
              <a href="#services" className="block text-gray-600 hover:text-gray-900 transition-colors">业务</a>
              <a href="#cases" className="block text-gray-600 hover:text-gray-900 transition-colors">案例</a>
              <a href="#cooperation" className="block text-gray-600 hover:text-gray-900 transition-colors">合作</a>
              <a href="#contact" className="block bg-gray-900 text-white px-4 py-2 rounded-full text-center">联系我们</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Apple Style */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-md text-gray-500 tracking-wider mb-6">AI TECH / SOFTWARE</p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
            一支专业、值得信赖的
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">科技业务合作伙伴</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            以技术创新为驱动的科技服务提供商
            <br className="hidden md:block" />
            提供 AI 大模型开发、软件开发、网站、App、小程序等全方位科技服务
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#services" 
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              <span>探索服务</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-all"
            >
              <span>联系我们</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats - Apple Style */}
        <div className="max-w-5xl mx-auto mt-32 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { value: "50%", label: "AI 算法专家" },
              { value: "90%", label: "计算机专业" },
              { value: "30+", label: "大型客户" },
              { value: "100%", label: "AI 使用者" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-22 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">关于我们</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              前沿极客基因与核心大厂阵容，汇聚各领域顶尖专家
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "前沿极客基因", desc: "全员皆为 AI 重度使用者。团队中 90% 具备计算机核心专业背景，人工智能及算法核心专家占比高达 50%。" },
              { title: "质量承诺", desc: "我们坚信交付质量的下限由团队决定，重视核心团队的培养和建设。" },
              { title: "企业愿景", desc: "成为企业最专业、最值得信赖的科技业务合作伙伴。" },
              { title: "核心能力", desc: "提供 AI 大模型开发、AI 智能体开发、软件开发、网站、App、小程序等科技服务。" }
            ].map((item, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="text-sm text-cyan-500 font-medium mb-3">0{idx + 1}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-22 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">核心团队</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              团队极客基因与核心大厂阵容
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              { image: '/xiaoyu.png', name: "王晓钰", title: "CEO / 资深技术专家", desc: "8年研发与管理经验。曾任职京东大数据、阿里国际跨境支付核心团队，精通复杂系统的前后端架构。" },
              { image: '/fangyang.png', name: "方阳", title: "资深技术专家", desc: "8年高可用架构经验。历任 OPPO 私有云平台、阿里菜鸟及头部券商，具备极强的复杂项目攻坚能力。" },
              { image: '/shengjian.png',  name: "曹胜建", title: "数字化转型交付专家", desc: "12年交付管理，PMP/ACP 双认证。前头部上市公司总监，主导全国 30+ 大型客户数字化转型。" },
              // { image: '',  name: "H*", title: "品牌营销专家", desc: "10年品牌营销和策划经验，目前主导 AI GEO 业务，擅长市场策略与品牌建设。" },
              { image: '/Jef.png',  name: "J", title: "AI专家 / 算法负责人", desc: "十年算法深耕经验。前腾讯混元大模型算法技术专家及 Leader，主导前沿 AI 算法架构与高并发落地。" }
            ].map((member, idx) => (
              <div key={idx} className="p-8 bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl">
                <div className="w-18 h-18 rounded-full flex items-center justify-center text-white font-semibold mb-6">
                  <Image 
                    src={member.image}
                    alt="FUTUREWAY" 
                    width={260} 
                    height={260}
                    className="h-auto w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-cyan-600 mb-4">{member.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-22 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">核心业务</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              提供全方位科技服务，助力企业数字化转型
            </p>
          </div>

          {/* Business 1 */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-sm text-cyan-500 font-medium">01</span>
              <h3 className="text-2xl font-semibold">前沿 AI 与创新技术研发</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "私有化 AI 知识库", desc: "基于 RAG 大模型打破数据孤岛，支持读取微信本地文件与聊天记录，确保数据绝对安全私密。", tag: "核心技术壁垒" },
                { title: "AI 智能客服系统", desc: "结合企业私有数据，提供高精准、拟人化的 7x24 小时自动化解答。" },
                { title: "数字员工 & 智能体", desc: "定制专属自动化业务助手，执行复杂业务工作流，提升运营效率。" },
                { title: "AI 情感陪伴定制", desc: "支持高度定制不同角色、性格与专属音色，提供全天候情绪价值。" },
                { title: "区块链与数字资产", desc: "为特定客户提供跨境支付、数字换汇等业务场景的配套解决方案。" }
              ].map((service, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow">
                  {service.tag && (
                    <span className="inline-block text-xs text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-4">
                      {service.tag}
                    </span>
                  )}
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business 2 */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-sm text-cyan-500 font-medium">02</span>
              <h3 className="text-2xl font-semibold">全平台定制开发与交付</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "移动端 App 开发", desc: "原生 iOS/Android 或跨平台高效开发，注重极致用户交互体验。" },
                { title: "微信生态 / 小程序", desc: "商城、服务、工具类小程序开发，助力企业实现私域流量快速裂变。" },
                { title: "系统重构与技术攻关", desc: "提供老旧业务系统重构、复杂 API 接口开发、服务器运维托管。" },
                { title: "企业级 Web / 网站开发", desc: "复杂的 SaaS 后台、大型商业门户，提供高并发、高可用架构设计保障。" },
                { title: "UI 设计与产品设计", desc: "提供优质的交互体验、视觉效果与产品设计方案。" }
              ].map((service, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business 3 */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-sm text-cyan-500 font-medium">03</span>
              <h3 className="text-2xl font-semibold">AI · GEO · 营销</h3>
            </div>
            
            <div className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl">
              <h4 className="text-2xl font-semibold mb-4">AI GEO 营销平台</h4>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                自主研发的生成式引擎优化（GEO）平台，用 AI 重塑搜索与内容分发，在 AI 时代抢占流量先机。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-22 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">标杆案例</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              我们不仅懂代码，更懂各行业的商业逻辑与合规要求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "泛娱乐", items: ["社交APP", "婚恋APP", "海外直播平台", "本地生活平台", "*海*洋游学小程序"] },
              { category: "金融", items: ["全球高并发跨境支付系统", "区块链解决方案", "海内外资金汇兑业务"] },
              { category: "零售电商", items: ["智能电商客服系统", "电商营销自动化", "AI 销售助手"] },
              { category: "政企与智慧安全", items: ["深圳**院 AI 智能体项目", "大型电力交易平台", "公安系统化定制开发"] },
              { category: "智能制造", items: ["锐*企业数字化转型", "东莞****精益系统", "企业级 AI 智能客服"] }
            ].map((category, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl">
                <span className="text-xs text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-6 inline-block">
                  {category.category}
                </span>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Section */}
      <section id="cooperation" className="py-22 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">合作模式</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              我们不止于技术交付，更期待成为您的长期商业合伙人
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "项目整包合作", desc: "针对需求明确的项目，签订严谨合同，按期保质完成从 0 到 1 的验收交付，结果导向。" },
              { title: "人力驻场开发", desc: "大厂级别核心技术骨干直接入驻企业现场（或专职远程），实现无缝沟通、敏捷响应。" },
              { title: "利润分成模式", desc: "针对具有爆发潜力的商业项目，可降低前期开发投入资金，转为按后期运营利润比例分成。" },
              { title: "技术入股 / 股权合作", desc: "针对高度认可的优质创业团队，我们愿意以'技术合伙人'身份入局，风险共担，利益共享。" }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-gray-100 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-22 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">联系我们</h2>
              <p className="text-lg text-gray-500 mb-12">
                期待与您合作，共创美好未来
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">公司</h3>
                  <p className="text-gray-900">深圳市未来未科技有限公司</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">联系人</h3>
                  <p className="text-gray-900">Daisy 王晓钰</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">企业邮箱</h3>
                  <a href="mailto:business@aifutureway.com" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                    business@aifutureway.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">联系地址</h3>
                  <p className="text-gray-900">深圳市南山区大冲商务中心D座</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <div className="text-center lg:text-right mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">微信扫码</h3>
                <p className="text-gray-600">商务合作请在下方扫码与我联系</p>
              </div>
              
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <Image 
                  src="/wechat-qrcode.png" 
                  alt="微信公众号二维码" 
                  width={200} 
                  height={200}
                  className="w-48 h-48"
                />
              </div>

              <a 
                href="mailto:business@aifutureway.com" 
                className="mt-8 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                <span>发送邮件</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Apple Style */}
      <footer className="py-12 px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/full-logo.svg" 
                alt="FUTUREWAY" 
                width={60} 
                height={30}
                className="h-6 w-auto"
              />
              <span className="text-sm text-gray-400">AI Tech / Software</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2026 未来未科技. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
