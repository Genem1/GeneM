(function(){var h=document.getElementById('siteHeader');addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>20)});
var b=document.getElementById('burger'),n=document.getElementById('navLinks');if(b)b.addEventListener('click',function(){n.classList.toggle('open')});

var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(e){io.observe(e)})})();
(function(){document.querySelectorAll('img.flyer').forEach(function(i){i.addEventListener('click',function(){var l=document.getElementById('lb');l.querySelector('img').src=i.src;l.classList.add('open')})});
var l=document.getElementById('lb');if(l)l.addEventListener('click',function(){l.classList.remove('open')});
var s=document.getElementById('splash');if(!s)return;var seen=false;try{seen=sessionStorage.getItem('gn')}catch(e){}
if(seen){s.remove();return}document.body.classList.add('lock');
function enter(){s.classList.add('hide');document.body.classList.remove('lock');try{sessionStorage.setItem('gn','1')}catch(e){}setTimeout(function(){s.remove()},650)}
setTimeout(function(){s.classList.add('ready')},900);
var m=document.getElementById('vmodal'),v=m.querySelector('video');
document.getElementById('enterBtn').onclick=enter;
document.getElementById('watchBtn').onclick=function(){m.classList.add('open');v.currentTime=0;v.play().catch(function(){})};
document.getElementById('skipBtn').onclick=function(){v.pause();m.classList.remove('open');enter()};
v.addEventListener('ended',function(){m.classList.remove('open');enter()})})();
(function(){document.querySelectorAll('.video-box video,.vwrap video').forEach(function(v){var lt=v.parentNode.querySelector('.lt');if(!lt)return;var t;
v.addEventListener('play',function(){clearTimeout(t);t=setTimeout(function(){lt.classList.add('off')},6000)});
v.addEventListener('pause',function(){clearTimeout(t);lt.classList.remove('off')});v.addEventListener('ended',function(){lt.classList.remove('off')})})})();

(function(){var f=document.getElementById('contactForm');if(!f)return;function v(i){return document.getElementById(i).value.trim()}
function go(ch){if(!f.reportValidity())return;var t='مرحبًا جينيم، أنا '+v('name')+'\nالهاتف: '+v('phone')+'\nالخدمة المطلوبة: '+v('subject')+(v('msg')?'\nالرسالة: '+v('msg'):'');
var u=ch==='wa'?'https://wa.me/201111094182?text='+encodeURIComponent(t):'mailto:genem.edu.tech@gmail.com?subject='+encodeURIComponent('طلب استشارة: '+v('subject'))+'&body='+encodeURIComponent(t);
var a=document.createElement('a');a.href=u;if(ch==='wa'){a.target='_blank';a.rel='noopener'}document.body.appendChild(a);a.click();a.remove();
var s=document.getElementById('sent');s.hidden=false;s.innerHTML='تم تجهيز رسالتك. إن لم يفتح التطبيق، <a href="'+u+'" target="_blank" rel="noopener">اضغط هنا</a>.'}
f.querySelectorAll('[data-ch]').forEach(function(b){b.addEventListener('click',function(){go(b.dataset.ch)})});
f.addEventListener('submit',function(e){e.preventDefault();go('wa')})})();
