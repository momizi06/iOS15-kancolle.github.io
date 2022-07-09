class iOS15_kancolle {
  open(){
  (function(){
    var F='<html><frameset rows="*,0"><frame src="http://xy.f5.si:88/http:'+gadgetInfo.URL +'"><frame></frameset></html>';
    var W=open();
    W.document.write(F);
    W.document.close();
    var H='<html>
           <!-- TODO LOAD JQUERY -->
           <script>
           (($,_)=>{
             const html=$.documentElement,
                   gf=$.getElementById('htmlWrap'),
                   gs=gf.style,
                   gw=gf.offsetWidth,
                   gh=gw*.6;
             let vp=$.querySelector('meta[name=viewport]'),
                 t=0;
             vp||(vp=$.createElement('meta'),
             vp.name='viewport',
             $.querySelector('head').appendChild(vp));
             vp.content='width='+gw;
             'orientation'in _&&html.webkitRequestFullscreen&&html.webkitRequestFullscreen();
             html.style.overflow='hidden';
             $.body.style.cssText='min-width:0;overflow:hidden;margin:0';
             gs.position='fixed';
             gs.marginRight='auto';
             gs.marginLeft='auto';
             gs.top='-5px';
             gs.right='0';
             gs.zIndex='100';
             gs.transformOrigin='50%25 16px';
             if(!_.kancolleFit){
               const k=()=>{
                 const w=html.clientWidth,
                       h=_.innerHeight;
                 w/h<1/.6?gs.transform=%27scale(%27+w/gw+%27)%27:gs.transform=%27scale(%27+h/gh+%27)%27;w<gw?gs.left=%27-%27+(gw-w)/2+%27px%27:gs.left=%270%27};
                 _.addEventListener(%27resize%27,()=>{
                   clearTimeout(t);
                   t=setTimeout(k,10)
                 });
                 _.kancolleFit=k;
               }
               kancolleFit();
             })(parent.frames[0].document,window)
           </script>
         </html>';
       with(W.frames[1].document){
         write(H);
         close();
       }
    })();
  }
  opensupport(document){
    var s=document.createElement('link');
    s.rel='stylesheet';
    s.href='https://iOS15-kancolle.github.io/iframe.css';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='https://zekamashi.net/';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='https://wikiwiki.jp/kancolle/';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='http://kancollecalc.jp/air_supremacy.html';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
    s=document.createElement('iframe');
    s.src='http://kc2ndexpcalc.web.fc2.com';
    s.width='48%';
    s.height='100%';
    document.body.appendChild(s);
  }
};
window.iOS15_kancolle = iOS15_kancolle;
