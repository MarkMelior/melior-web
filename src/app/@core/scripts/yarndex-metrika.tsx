import NextScript from 'next/script';

export const COUNTER_ID = '103493906';

const Script = () => (
  <NextScript
    dangerouslySetInnerHTML={{
      __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,
                  a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}", "ym");

              ym(${COUNTER_ID}, "init", {
                ssr: true,
                webvisor: true,
                trackHash: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
    }}
    id="yandex-metrika"
    strategy="afterInteractive"
  />
);

const NoScript = () => (
  <noscript>
    <div>
      <img
        alt=""
        src={`https://mc.yandex.ru/watch/${COUNTER_ID}`}
        style={{ left: '-9999px', position: 'absolute' }}
      />
    </div>
  </noscript>
);

export const YarndexMetrika = () => null;

YarndexMetrika.Script = Script;
YarndexMetrika.NoScript = NoScript;
