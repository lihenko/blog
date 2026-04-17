let loaded = false;

export function loadAnalytics() {
  if (loaded) return;
  loaded = true;

  const script1 = document.createElement("script");
  script1.src =
    "https://www.googletagmanager.com/gtag/js?id=G-KG51R2JM76";
  script1.async = true;

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag('js', new Date());
    gtag('config', 'G-KG51R2JM76', {
      anonymize_ip: true
    });
  `;

  document.head.appendChild(script1);
  document.head.appendChild(script2);
}