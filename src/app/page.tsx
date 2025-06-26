import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* 页面标题区域 */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-white/70 text-sm md:text-base font-medium mb-3 tracking-wide">
            免费开源 AI 工具 • Gemini CLI 入门教程
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gemini CLI 入门教程
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mt-6">
            Google 推出的免费开源 AI 命令行工具，直接在终端中使用 Gemini AI。零基础入门，快速上手。
          </p>
        </div>

        {/* 卡片网格主要内容区域 */}
        <div className="card-grid mb-12">

          {/* 界面预览卡片 - 主要卡片 */}
          <div className="card-item card-large">
            <div className="glass-card large">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl leading-none">🖥️</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">界面预览</h3>
                  <p className="text-white/70 text-base">简洁易用的命令行界面</p>
                </div>
              </div>

              <div className="bg-black/20 rounded-2xl p-4 overflow-hidden flex-1">
                <Image
                  src="https://raw.githubusercontent.com/google-gemini/gemini-cli/main/docs/assets/gemini-screenshot.png"
                  alt="Gemini CLI Screenshot"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* 核心优势卡片 */}
          <div className="card-item card-medium">
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl leading-none">⭐</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">核心优势</h3>
                  <p className="text-white/70 text-base">强大的 AI 能力，完全免费使用</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <div className="p-2 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl leading-none">🚀</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">完全免费</div>
                    <div className="text-white/60 text-sm">每分钟60次请求，每日1000次</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <div className="p-2 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl leading-none">🤖</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">强大AI</div>
                    <div className="text-white/60 text-sm">Gemini 2.5 Pro 模型</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                  <div className="p-2 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl leading-none">🔍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">实时搜索</div>
                    <div className="text-white/60 text-sm">Google搜索集成</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 快速开始卡片 */}
          <div className="card-item card-medium">
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl leading-none">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">快速开始</h3>
                  <p className="text-white/70 text-base">一行命令即可开始使用，无需复杂配置</p>
                </div>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 mt-6 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-white/50 text-sm">Terminal</span>
                </div>
                <pre className="text-white/90 text-sm overflow-x-auto leading-relaxed">
{`# 使用 npx (推荐)
npx https://github.com/google-gemini/gemini-cli

# 或全局安装
npm install -g @google/gemini-cli
gemini

# 开始使用 AI 助手
> 你好，帮我写一个快速排序函数
> 解释这段代码的作用
> 优化这个算法的性能`}
                </pre>
              </div>
            </div>
          </div>

          {/* 技术特性卡片 */}
          <div className="card-item card-medium">
            <div className="glass-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl leading-none">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">技术特性</h3>
                  <p className="text-white/70 text-base">专业的开发者工具</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="p-4 bg-white/5 rounded-2xl text-center">
                  <div className="text-2xl mb-2 leading-none">💻</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">开源扩展</h4>
                  <p className="text-white/60 text-xs">Apache 2.0 许可证</p>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl text-center">
                  <div className="text-2xl mb-2 leading-none">📝</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">代码助手</h4>
                  <p className="text-white/60 text-xs">VS Code 集成技术</p>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl text-center">
                  <div className="text-2xl mb-2 leading-none">🌐</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">跨平台</h4>
                  <p className="text-white/60 text-xs">支持所有主流系统</p>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl text-center">
                  <div className="text-2xl mb-2 leading-none">⚡</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">快速响应</h4>
                  <p className="text-white/60 text-xs">毫秒级交互体验</p>
                </div>
              </div>
            </div>
          </div>

          {/* 功能详情卡片 */}
          <div className="card-item card-small">
            <div className="glass-card small">
              <div className="p-3 bg-green-500/20 rounded-2xl w-fit mb-4 flex items-center justify-center">
                <span className="text-3xl leading-none">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">免费使用额度</h3>
              <p className="text-white/70 leading-relaxed flex-1">
                每分钟 60 次请求，每日 1000 次，支持 100 万 token 上下文窗口，完全免费使用。
              </p>
            </div>
          </div>

          <div className="card-item card-small">
            <div className="glass-card small">
              <div className="p-3 bg-purple-500/20 rounded-2xl w-fit mb-4 flex items-center justify-center">
                <span className="text-3xl leading-none">🧠</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">强大AI模型</h3>
              <p className="text-white/70 leading-relaxed flex-1">
                使用最新的 Gemini 2.5 Pro 模型，专为编程、调试和代码分析优化。
              </p>
            </div>
          </div>

          <div className="card-item card-small">
            <div className="glass-card small">
              <div className="p-3 bg-orange-500/20 rounded-2xl w-fit mb-4 flex items-center justify-center">
                <span className="text-3xl leading-none">🔥</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">实时搜索</h3>
              <p className="text-white/70 leading-relaxed flex-1">
                集成 Google 搜索能力，获取最新的网络信息和技术文档。
              </p>
            </div>
          </div>

        </div>

        {/* 底部链接 */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="https://x.com/interjc" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 text-lg">
              𝕏 @interjc
            </a>
            <a href="https://justincourse.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 text-lg">
              AI 编程课
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
