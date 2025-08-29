import { useEffect } from 'react';

const SCRIPT_ID = 'zsiqscript';
const SCRIPT_SRC = 'https://salesiq.zohopublic.in/widget?wc=siq0a6c0e35f6b0dbab73f6477b18c9a3fb5478e21cc731e423a8529455c0ee6fcb37736d0be2f93701d9f1bdc7e531ac06';
// Data URI SVG for a simple chat icon; replace with your own URL if desired
const CUSTOM_ICON_SRC = 'data:image/svg+xml;utf8,\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">\
  <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="%2313b8a6"/><stop offset="1" stop-color="%233b82f6"/></linearGradient></defs>\
  <rect width="48" height="48" rx="24" fill="url(%23g)"/>\
  <path d="M14 16h20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H21l-5 5v-5h-2a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3z" fill="white" opacity="0.95"/>\
  <circle cx="19" cy="23" r="2" fill="%2313b8a6"/>\
  <circle cx="24" cy="23" r="2" fill="%2313b8a6"/>\
  <circle cx="29" cy="23" r="2" fill="%2313b8a6"/>\
</svg>';

const ChatWidget = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) return;

    // Initialize Zoho global before loading the widget script
    const w = window as unknown as { [key: string]: any };
    if (!w.$zoho) w.$zoho = {};
    if (!w.$zoho.salesiq) w.$zoho.salesiq = { ready: function () {} };

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.onload = () => {
      const pushEvent = (name: string, detail?: Record<string, any>) => {
        try {
          const w = window as any;
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({ event: name, ...detail });
        } catch (_) {
          /* no-op */
        }
      };
      // Wait for SalesIQ to inject its DOM, then force placement
      const ensurePosition = () => {
        const node = document.getElementById('zsiq_float');
        if (node) {
          node.setAttribute('style', 'position: fixed; right: 24px; bottom: 24px; top: auto; z-index: 2147483647;');
          (node as HTMLElement).style.display = 'block';
          pushEvent('chat_widget_ready');
          return true;
        }
        return false;
      };

      const ensureIcon = () => {
        let changed = false;
        // Specific custom sticker
        const sticker = document.getElementById('zsiq_cus_sticker') as HTMLImageElement | null;
        if (sticker) {
          sticker.src = CUSTOM_ICON_SRC;
          sticker.alt = 'Chat with us';
          sticker.setAttribute('aria-label', 'Chat with us');
          sticker.style.width = '56px';
          sticker.style.height = '56px';
          sticker.style.borderRadius = '9999px';
          sticker.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
          changed = true;
        }
        // Any images inside launcher (covers minimized/closed state variants)
        const launcher = document.getElementById('zsiq_float') as HTMLElement | null;
        if (launcher) {
          // Remove any old/default icon elements that SalesIQ injects
          const closeBtn = launcher.querySelector('#zs_fl_close');
          const oldVisuals = Array.from(launcher.querySelectorAll('img, svg, picture, canvas')) as HTMLElement[];
          for (const el of oldVisuals) {
            if (closeBtn && closeBtn.contains(el)) continue;
            if (el.id === 'appxcess-chat-icon') continue;
            el.remove();
            changed = true;
          }
          // Ensure our dedicated custom icon exists
          let customIcon = launcher.querySelector('#appxcess-chat-icon') as HTMLImageElement | null;
          if (!customIcon) {
            customIcon = document.createElement('img');
            customIcon.id = 'appxcess-chat-icon';
            launcher.appendChild(customIcon);
          }
          customIcon.src = CUSTOM_ICON_SRC;
          customIcon.alt = 'Chat with us';
          customIcon.setAttribute('aria-label', 'Chat with us');
          customIcon.style.width = '56px';
          customIcon.style.height = '56px';
          customIcon.style.borderRadius = '9999px';
          customIcon.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
          customIcon.style.display = 'block';
          customIcon.style.pointerEvents = 'none';
          // Also force background image for elements that use CSS background instead of <img>
          launcher.style.backgroundImage = `url(${CUSTOM_ICON_SRC})`;
          launcher.style.backgroundSize = 'cover';
          launcher.style.backgroundRepeat = 'no-repeat';
          launcher.style.backgroundPosition = 'center';
          // Hide seasonal/old overlays if present
          const seasonal = launcher.querySelector('.seasonal-float-img') as HTMLElement | null;
          if (seasonal) seasonal.style.display = 'none';
        }
        return changed;
      };

      // Constrain popup height when widget DOM/iframe is injected
      const ensurePopupSizing = () => {
        let changed = false;
        const vw = window.innerWidth;
        const targetWidth = '80vw';
        const targetHeightDesktop = '50vh';
        const targetHeightTablet = '55vh';
        const targetHeightMobile = '55vh';
        const height = vw <= 640 ? targetHeightMobile : vw <= 1024 ? targetHeightTablet : targetHeightDesktop;
        // Dynamically offset from sticky header
        const headerEl = document.querySelector('header') as HTMLElement | null;
        const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 80;
        const extraTopPadding = 50; // user-requested extra padding from top
        const topOffsetPx = headerHeight + 8 + extraTopPadding; // breathing room + extra padding
        const topOffset = `${topOffsetPx}px`;
        const maxHCalc = `calc(100vh - ${topOffsetPx + 16}px)`; // 16px for bottom breathing room
        // Expose CSS var for styles to consume consistently
        document.documentElement.style.setProperty('--chat-top-offset', topOffset);
        const containers = [
          document.getElementById('siq-embed-home'),
          document.getElementById('embed_cont'),
          document.getElementById('siqcw-section-cont'),
          document.querySelector('.siqcw-chat-cont') as HTMLElement | null,
        ].filter(Boolean) as HTMLElement[];

        for (const el of containers) {
          el.style.setProperty('max-height', maxHCalc, 'important');
          el.style.setProperty('height', height, 'important');
          el.style.setProperty('width', targetWidth, 'important');
          el.style.setProperty('--zsiq-chat-cont-height', height);
          el.style.setProperty('position', 'fixed', 'important');
          el.style.setProperty('bottom', 'auto', 'important');
          el.style.setProperty('right', '24px', 'important');
          el.style.setProperty('top', topOffset, 'important');
          changed = true;
        }

        const iframes = Array.from(document.querySelectorAll('iframe')) as HTMLIFrameElement[];
        for (const frame of iframes) {
          const src = frame.getAttribute('src') || '';
          const id = frame.id || '';
          if (/salesiq|zohopublic/i.test(src) || /siqiframe/i.test(id)) {
            const style = frame.style as CSSStyleDeclaration;
            style.maxHeight = maxHCalc;
            style.height = height;
            style.width = '80vw';
            (style as any).bottom = 'auto';
            style.right = '24px';
            style.position = 'fixed';
            (style as any).top = topOffset;
            style.zIndex = '2147483647';
            changed = true;
          }
        }
        return changed;
      };

      let globalObserver: MutationObserver | null = null;

      const attachAnalytics = () => {
        const launcher = document.getElementById('zsiq_float') as HTMLElement | null;
        if (launcher && !(launcher as any)._analyticsBound) {
          launcher.addEventListener('click', () => pushEvent('chat_widget_launcher_click'));
          (launcher as any)._analyticsBound = true;
        }
        const chatBtn = document.querySelector('[data-zsqa="chat"][role="listitem"]') as HTMLElement | null;
        if (chatBtn && !(chatBtn as any)._analyticsBound) {
          chatBtn.addEventListener('click', () => pushEvent('chat_widget_chat_click'));
          (chatBtn as any)._analyticsBound = true;
        }
        const voiceBtn = document.querySelector('[data-zsqa="call"][role="listitem"]') as HTMLElement | null;
        if (voiceBtn && !(voiceBtn as any)._analyticsBound) {
          voiceBtn.addEventListener('click', () => pushEvent('chat_widget_voice_click'));
          (voiceBtn as any)._analyticsBound = true;
        }
      };

      if (!ensurePosition()) {
        const observer = new MutationObserver(() => {
          const posOk = ensurePosition();
          const sizeOk = ensurePopupSizing();
          const iconOk = ensureIcon();
          attachAnalytics();
          if (posOk && sizeOk && iconOk) {
            observer.disconnect();
            // Attach persistent observer on the launcher to keep icon consistent
            const launcher = document.getElementById('zsiq_float');
            if (launcher) {
              globalObserver = new MutationObserver(() => {
                ensureIcon();
                attachAnalytics();
              });
              globalObserver.observe(launcher, { childList: true, attributes: true, subtree: true });
            }
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        // Safety stop after 15s (launcher observer stays active)
        setTimeout(() => observer.disconnect(), 15000);
      }
      // Try once immediately and periodically to catch state changes (open/close)
      ensurePopupSizing();
      attachAnalytics();
      const retry = setInterval(() => { ensureIcon(); ensurePopupSizing(); attachAnalytics(); }, 2000);
      setTimeout(() => clearInterval(retry), 15000);

      // Expose cleanup for the global observer via script element dataset
      (script as any)._launcherObserverCleanup = () => {
        if (globalObserver) {
          globalObserver.disconnect();
          globalObserver = null;
        }
      };
    };
    document.body.appendChild(script);

    // Ensure the floating button sits bottom-right
    const styleId = 'zsiq-custom-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        #zsiq_float {
          position: fixed !important;
          right: 24px !important;
          bottom: 24px !important;
          top: auto !important;
          z-index: 2147483647 !important;
          display: block !important;
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
        /* Ensure ALL SalesIQ containers overlay the app */
        #siq-embed-home,
        #embed_cont,
        #siqcw-section-cont,
        .siqcw-chat-cont,
        #zsiqchat,
        .zsiq_flt_rel,
        #zsiq_float > *,
        [id*="zsiq"]:not(html):not(body),
        .siqcw-header,
        .siqcw-tab-cont {
          z-index: 2147483647 !important;
        }
        /* Constrain popup and keep clear of the top */
        iframe[id^="siqiframe"], iframe[src*="salesiq"], iframe[src*="zohopublic"] {
          max-height: calc(100vh - var(--chat-top-offset, 96px) - 16px) !important;
          height: 60vh !important;
          width: 80vw !important;
          bottom: auto !important;
          right: 24px !important;
          top: var(--chat-top-offset, 96px) !important;
          position: fixed !important;
          z-index: 2147483647 !important;
        }
        /* Container-level constraints */
        #siq-embed-home,
        #embed_cont,
        #siqcw-section-cont,
        .siqcw-chat-cont {
          max-height: calc(100vh - var(--chat-top-offset, 96px) - 16px) !important;
          height: 60vh !important;
          width: 80vw !important;
          position: fixed !important;
          bottom: auto !important;
          right: 24px !important;
          top: var(--chat-top-offset, 96px) !important;
          z-index: 2147483647 !important;
        }
        /* Inner wrappers */
        #siqcw-section-cont .callhome-wrap,
        #siqcw-section-cont .home-header-wrap {
          max-height: 100% !important;
          height: 100% !important;
        }
        :root {
          --zsiq-chat-cont-height: 60vh !important;
          --chat-top-offset: 96px;
        }
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          iframe[id^="siqiframe"], iframe[src*="salesiq"], iframe[src*="zohopublic"],
          #siq-embed-home, #embed_cont, #siqcw-section-cont, .siqcw-chat-cont {
            max-height: calc(100vh - var(--chat-top-offset, 96px) - 16px) !important;
            height: 65vh !important;
            width: 80vw !important;
            right: 16px !important;
            bottom: auto !important;
            top: var(--chat-top-offset, 96px) !important;
          }
          #zsiq_float { right: 16px !important; bottom: 16px !important; }
        }
        @media (max-width: 640px) {
          iframe[id^="siqiframe"], iframe[src*="salesiq"], iframe[src*="zohopublic"],
          #siq-embed-home, #embed_cont, #siqcw-section-cont, .siqcw-chat-cont {
            max-height: calc(100vh - var(--chat-top-offset, 96px) - 16px) !important;
            height: 60vh !important;
            right: 12px !important;
            bottom: auto !important;
            width: 80vw !important;
            top: var(--chat-top-offset, 96px) !important;
          }
          #zsiq_float { right: 12px !important; bottom: 12px !important; }
        }
        /* Visual scale to ~80% for better fit at 100% zoom */
        iframe[id^="siqiframe"], iframe[src*="salesiq"], iframe[src*="zohopublic"],
        #siq-embed-home, #embed_cont, #siqcw-section-cont, .siqcw-chat-cont {
          transform: scale(0.8) !important;
          transform-origin: top right !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Recalculate on resize so it stays below header and off the very top
    const onResize = () => {
      try { (ensurePopupSizing as any)(); } catch (_) { /* no-op */ }
    };
    window.addEventListener('resize', onResize);

    return () => {
      // Cleanup persistent launcher observer if present
      const el = document.getElementById(SCRIPT_ID) as any;
      if (el && typeof el._launcherObserverCleanup === 'function') {
        el._launcherObserverCleanup();
      }
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
};

export default ChatWidget;


