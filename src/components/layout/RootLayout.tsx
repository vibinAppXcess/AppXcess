import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';
import ScrollToTop from '../common/ScrollToTop';
import { useEffect } from 'react';

const RootLayout = () => {
  useEffect(() => {
    // Initialize Zoho global first
    (window as any).$zoho = (window as any).$zoho || {};
    (window as any).$zoho.salesiq = (window as any).$zoho.salesiq || { ready: function () { } };

    // Load the Zoho SalesIQ script
    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zohopublic.in/widget?wc=siq0a6c0e35f6b0dbab73f6477b18c9a3fb5478e21cc731e423a8529455c0ee6fcb37736d0be2f93701d9f1bdc7e531ac06';
    script.defer = true;
    document.head.appendChild(script);

    // Add the additional initialization script
    const initScript = document.createElement('script');
    initScript.innerHTML = 'window.$zoho = window.$zoho || {}; $zoho.salesiq = $zoho.salesiq || { ready: function () { } }';
    document.head.appendChild(initScript);

    // Add debug info request
    const debugScript = document.createElement('script');
    debugScript.src = 'https://salesiq.zohopublic.in/appxcesstechnologies/logdebuginfo.ls';
      debugScript.defer = true;
      document.head.appendChild(debugScript);

      // Add custom CSS for chat bot icon styling
      const customCSS = document.createElement('style');
      customCSS.innerHTML = `
        /* Hide the original image and replace with custom bot icon */
        #zsiq_cus_sticker, .seasonal-float-img, .zsiq-float .zsiq-float-icon, .zsiq-float img {
          display: none !important;
        }
        
        /* Hide any additional floating elements */
        .zsiq-float:not(#zsiq_float) {
          display: none !important;
        }
        
        /* Custom chat bot button styling */
        #zsiq_float {
          background: linear-gradient(135deg, #0d9488, #0891b2) !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3) !important;
          transition: all 0.3s ease !important;
          width: 60px !important;
          height: 60px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 9999 !important;
        }
        
        #zsiq_float:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(13, 148, 136, 0.4) !important;
        }
        
        /* Chat icon (default state) */
        #zsiq_float::before {
          content: '' !important;
          display: block !important;
          width: 28px !important;
          height: 28px !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'/%3E%3C/svg%3E") !important;
          background-size: 28px 28px !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          z-index: 10 !important;
          transition: all 0.3s ease !important;
        }
        
        /* Keep the same chat icon even when open (no X icon) */
        #zsiq_float.chat-open::before {
          background-image: inherit !important;
        }
        
        /* Chat window styling */
        #zsiq_chat_wrap {
          border-radius: 12px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
          border: 1px solid #e5e7eb !important;
        }
        
        /* Close button styling */
        .siqico-close {
          background: #ef4444 !important;
          border-radius: 50% !important;
          color: white !important;
        }
      `;
      document.head.appendChild(customCSS);

      // Add JavaScript to handle chat icon toggle
      const chatToggleScript = document.createElement('script');
      chatToggleScript.innerHTML = `
        (function() {
          let chatOpen = false;
          let floatButton = null;
          let chatWindow = null;
          
          // Function to update the icon based on chat state
          function updateChatIcon() {
            if (floatButton) {
              if (chatOpen) {
                floatButton.classList.add('chat-open');
                console.log('Chat is OPEN - showing close X icon');
              } else {
                floatButton.classList.remove('chat-open');
                console.log('Chat is CLOSED - showing chat icon');
              }
            }
          }
          
          // Function to check if chat window is visible
          function checkChatState() {
            if (chatWindow) {
              // Check if chat window is actually visible and open
              const hasDisplayNone = chatWindow.style.display === 'none';
              const hasOffsetParent = chatWindow.offsetParent !== null;
              const hasZsiqHide = chatWindow.classList.contains('zsiq_hide');
              const hasSize = chatWindow.offsetWidth > 50 && chatWindow.offsetHeight > 50;
              
              const isVisible = !hasDisplayNone && hasOffsetParent && !hasZsiqHide && hasSize;
              
              console.log('Chat state check:', {
                hasDisplayNone,
                hasOffsetParent,
                hasZsiqHide,
                hasSize,
                isVisible,
                currentChatOpen: chatOpen,
                chatWindowElement: chatWindow
              });
              
              // Only update if state has changed
              if (isVisible !== chatOpen) {
                chatOpen = isVisible;
                updateChatIcon();
              }
            } else {
              // If we don't have a chat window reference, try to find it again
              console.log('No chat window reference, trying to find it again...');
              chatWindow = document.getElementById('zsiq_chat_wrap') || 
                          document.getElementById('zsiq_chat') ||
                          document.querySelector('.zsiq-chat') ||
                          document.querySelector('[id*="chat"]');
              
              if (chatWindow) {
                console.log('Found chat window on retry:', chatWindow);
                // Re-run the check with the new reference
                setTimeout(checkChatState, 100);
              }
            }
          }
          
          // Wait for Zoho SalesIQ to load and initialize
          function initializeChatToggle() {
            // Get the float button - this is the main div
            floatButton = document.getElementById('zsiq_float');
            console.log('Float button found:', floatButton);
            
            if (floatButton) {
              // Get the chat window - try multiple possible IDs
              chatWindow = document.getElementById('zsiq_chat_wrap') || 
                          document.getElementById('zsiq_chat') ||
                          document.querySelector('.zsiq-chat') ||
                          document.querySelector('[id*="chat"]');
              console.log('Chat window found:', chatWindow);
              
              // Also look for other possible chat elements
              const allZohoElements = document.querySelectorAll('[id*="zsiq"], [class*="zsiq"]');
              console.log('All Zoho elements found:', allZohoElements);
              
              // If we can't find the chat window, try to find it by looking for visible chat elements
              if (!chatWindow) {
                const possibleChatElements = document.querySelectorAll('[style*="position: fixed"], [style*="position:absolute"]');
                console.log('Possible chat elements by position:', possibleChatElements);
                
                // Look for elements that might be the chat window
                for (let element of possibleChatElements) {
                  if (element.offsetWidth > 200 && element.offsetHeight > 200) {
                    chatWindow = element;
                    console.log('Found chat window by size:', chatWindow);
                    break;
                  }
                }
              }
              
              // Initialize chat as closed by default
              chatOpen = false;
              updateChatIcon();
              
              // Set up mutation observer to watch for changes
              if (chatWindow) {
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && 
                        (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                      setTimeout(checkChatState, 50);
                    }
                  });
                });
                
                observer.observe(chatWindow, {
                  attributes: true,
                  attributeFilter: ['style', 'class']
                });
              }
              
              // Also check on click events
              floatButton.addEventListener('click', function() {
                console.log('Float button clicked');
                setTimeout(checkChatState, 200);
              });
              
              // Check periodically as a fallback
              setInterval(checkChatState, 1000);
              
              // Initial check
              setTimeout(checkChatState, 100);
            } else {
              console.log('Float button not found, retrying...');
              // Retry if elements not ready yet
              setTimeout(initializeChatToggle, 500);
            }
          }
          
          // Start initialization when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeChatToggle);
          } else {
            initializeChatToggle();
          }
          
          // Also try after a delay to catch late-loading elements
          setTimeout(initializeChatToggle, 1000);
        })();
      `;
      document.head.appendChild(chatToggleScript);

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      // Remove the initialization script
      const scripts = document.head.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.innerHTML.includes('$zoho.salesiq')) {
          script.remove();
        }
      });
      // Remove the debug script
      const debugScript = document.querySelector('script[src*="logdebuginfo.ls"]');
      if (debugScript && debugScript.parentNode) {
        debugScript.parentNode.removeChild(debugScript);
      }
      // Remove any Zoho elements that might have been created
      const zohoElements = document.querySelectorAll('[data-id="zsalesiq"], #zsiq_chat_wrap, #zsiq_float');
      zohoElements.forEach(element => element.remove());
      // Remove custom CSS
      const customCSS = document.querySelector('style');
      if (customCSS && customCSS.innerHTML.includes('zsiq_float')) {
        customCSS.remove();
      }
      // Remove chat toggle script
      const chatToggleScript = document.querySelector('script');
      if (chatToggleScript && chatToggleScript.innerHTML.includes('initializeChatToggle')) {
        chatToggleScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;


