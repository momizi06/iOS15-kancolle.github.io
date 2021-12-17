class iOS15_kancolle {
  open(){
    if(gadgetInfo === undefined) return alart("艦これのゲームページで実行してください");
    window.open("http:"+gadgetInfo.URL,'_blank');
  }
};
window.iOS15_kancolle = iOS15_kancolle;
