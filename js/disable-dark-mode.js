// 强制禁用深色模式 - 确保页面永远保持浅色
(function() {
  // 确保页面始终使用浅色模式
  function ensureLightMode() {
    // 设置 data-theme 为 light
    document.documentElement.setAttribute('data-theme', 'light');

    // 移除任何可能的深色模式属性
    document.documentElement.removeAttribute('dark');
    document.body.removeAttribute('dark');

    // 更新主题颜色元标签
    const metaThemeColors = document.querySelectorAll('meta[name="theme-color"]');
    metaThemeColors.forEach(meta => {
      meta.content = '#fafafa';
    });
  }

  // 立即设置浅色模式
  ensureLightMode();

  // DOM 加载完成后再次确保
  document.addEventListener('DOMContentLoaded', ensureLightMode);

  // 监听主题切换尝试
  const originalSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {
    if (name === 'data-theme' && value !== 'light') {
      // 阻止设置深色模式
      return;
    }
    return originalSetAttribute.apply(this, arguments);
  };

  // 重写主题切换函数，使其无法切换到深色模式
  window.switchTheme = function() {
    // 什么也不做，禁止切换到深色模式
    return;
  };

  // 清除可能的深色模式 localStorage 设置
  localStorage.removeItem('Stellar.theme');
  localStorage.removeItem('theme');
  localStorage.removeItem('color-scheme');
  localStorage.removeItem('dark-mode');
})();
