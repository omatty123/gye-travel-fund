const languageButton = document.querySelector('#lang');
function setLanguage(language) {
 document.documentElement.lang = language;
 languageButton.textContent = language === 'en' ? '한국어' : 'English';
 languageButton.setAttribute('aria-label', language === 'en' ? 'Switch language to Korean' : '영어로 전환');
 const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url);
}
setLanguage(new URL(location.href).searchParams.get('lang') === 'ko' ? 'ko' : 'en');
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'ko' : 'en'));
document.querySelector('#share').addEventListener('click', async () => {
 const korean = document.documentElement.lang === 'ko';
 const status = document.querySelector('#announcement');
 try {
  if(navigator.share) await navigator.share({title:document.title,url:location.href});
  else {await navigator.clipboard.writeText(location.href);status.textContent=korean?'링크를 복사했습니다.':'Link copied. Ready to share.';setTimeout(()=>status.textContent='',4500);}
 } catch(error) {
  if(error.name !== 'AbortError') {status.textContent=korean?'주소창의 링크를 복사하여 공유하세요.':'Copy the link from your address bar to share.';setTimeout(()=>status.textContent='',6500);}
 }
});
