class iOS15_kancolle {
  open(){
    if(gadgetInfo === undefined) return alart("艦これのゲームページで実行してください");
    window.open("http:"+gadgetInfo.URL,'_blank');
  }
  opensupport(){
  d=document;
  s=d.createElement('link');
  s.rel='stylesheet';
  s.href='https://iOS15-kancolle.github.io/iframe.css';
  d.body.appendChild(s);
  s=document.createElement('br');
  d.body.appendChild(s);
  s=document.createElement('iframe');
  s.src='http://kancollecalc.jp/air_supremacy.html';
  s.width='50%';
  s.height='50%';
  d.body.appendChild(s);
  s=document.createElement('iframe');
  s.src='http://kc2ndexpcalc.web.fc2.com';
  s.width='50%';
  s.height='50%';
  d.body.appendChild(s);
  }
};
window.iOS15_kancolle = iOS15_kancolle;
