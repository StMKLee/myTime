<template>
  <div class="outest" :style="{minHeight: windowheight+'px', minWidth: windowwidth+'px'}">
    <page-head></page-head>
    <main-nav></main-nav>
    <main-cont>
      <div class="allcont">
        <div class="topcont">
          <div class="gamename">2048</div>
          <div class="showscores">
            <div class="nowscore">
              score：
            </div>
            <div class="scorenum1">0</div>
            <div class="bestscore">
              best：
            </div>
            <div class="scorenum2">0</div>
          </div>
        </div>
        <div class="outcont">
          <div class="incont" @mousedown.prevent="sidestart" @mouseup.prevent="sideend">
            <div v-for="(item, index) in 16" :key="index" class="wangge">
            </div>
              <div class="fangkuai" v-for="(itm, idx) in allarea" :key="idx" :style="{top:itm.tpo+'px', left:itm.lpo+'px'}" v-show="itm.has">
                <div class="numtxt" :style="{fontSize:itm.fs+'px'}">
                  {{itm.num}}
                </div>
              </div>
          </div>
        </div>
      </div>
    </main-cont>
  </div>
</template>

<script>
  import pageHead from '../../components/pageHead/pageHead.vue'
  import mainNav from '../../components/mainNav/mainNav.vue'
  import mainCont from '../../components/maincont/maincont.vue'

  export default{
    data(){
      return{
        /* 鼠标按紧滑动方向判断变量 */
        walkX:0,
        walkY:0,
        sX:0,
        sY:0,
        allarea:[
          {
            id:0,
            tpo:0,
            lpo:0,
            has:false,
            num:2,
            fs:30
          },
          {
            id:1,
            tpo:0,
            lpo:76,
            has:false,
            num:2,
            fs:30
          },
          {
            id:2,
            tpo:0,
            lpo:151,
            has:false,
            num:2,
            fs:30
          },
          {
            id:3,
            tpo:0,
            lpo:226,
            has:false,
            num:2,
            fs:30
          },
          {
            id:4,
            tpo:76,
            lpo:0,
            has:false,
            num:2,
            fs:30
          },
          {
            id:5,
            tpo:76,
            lpo:76,
            has:false,
            num:2,
            fs:30
          },
          {
            id:6,
            tpo:76,
            lpo:151,
            has:false,
            num:2,
            fs:30
          },
          {
            id:7,
            tpo:76,
            lpo:226,
            has:false,
            num:2,
            fs:30
          },
          {
            id:8,
            tpo:151,
            lpo:0,
            has:false,
            num:2,
            fs:30
          },
          {
            id:9,
            tpo:151,
            lpo:76,
            has:false,
            num:2,
            fs:30
          },
          {
            id:10,
            tpo:151,
            lpo:151,
            has:false,
            num:2,
            fs:30
          },
          {
            id:11,
            tpo:151,
            lpo:226,
            has:false,
            num:2,
            fs:30
          },
          {
            id:12,
            tpo:226,
            lpo:0,
            has:false,
            num:2,
            fs:30
          },
          {
            id:13,
            tpo:226,
            lpo:76,
            has:false,
            num:2,
            fs:30
          },
          {
            id:14,
            tpo:226,
            lpo:151,
            has:false,
            num:2,
            fs:30
          },
          {
            id:15,
            tpo:226,
            lpo:226,
            has:false,
            num:2,
            fs:30
          }
        ]
      }
    },
    methods:{
      sidestart:function(e){
        this.sX=e.clientX;
        this.sY=e.clientY;
      },
      sideend:function(e){
        this.walkX=e.clientX-this.sX;
        this.walkY=e.clientY-this.sY;
        if(Math.abs(this.walkX)>Math.abs(this.walkY)){
          if(this.walkX>50){
            this.toright();
          }else if(this.walkX<-50){
            this.toleft();
          }
        }else{
          if(this.walkY>50){
            this.tobottom();
          }else if(this.walkY<-50){
            this.totop();
          }
        }
      },
      toright:function(){
        console.log('right');
        if(this.allarea[3].has==true){
          if(this.allarea[2].has==true){
            if(this.allarea[2].num==this.allarea[3].num){
              this.move(2,3,true);
              if(this.allarea[0].has==true&&this.allarea[1].has==true){
                if(this.allarea[0].num==this.allarea[1].num){
                  this.move(1,2,false);
                  this.move(0,2,true);
                }else{
                  this.move(1,2,false);
                  this.move(0,1,false);
                }
              }else if(this.allarea[0].has==true&&this.allarea[1].has==false){
                this.move(0,2,false);
              }else if(this.allarea[1].has==true&&this.allarea[0].has==false){
                this.move(1,2,false);
              }
            }else{
              if(this.allarea[1].has==true){
                if(this.allarea[1].num==this.allarea[2].num){
                  this.move(1,2,true);
                  if(this.allarea[0].has==true){
                    this.move(0,1,false);
                  }
                }else{
                  if(this.allarea[0].has==true){
                    if(this.allarea[0].num==this.allarea[1].num){
                      this.move(0,1,true);
                    };
                  };
                }
              }else{
                if(this.allarea[0].has==true){
                  if(this.allarea[0].num==this.allarea[2].num){
                    this.move(0,2,true);
                  }else{
                    this.move(0,1,false);
                  }
                };
              }
            }
          }else{
            if(this.allarea[1].has==true){
              if(this.allarea[1].num==this.allarea[3].num){
                this.move(1,3,true);
                if(this.allarea[0].has==true){
                  this.move(0,2,false);
                };
              }else{
                this.move(1,2,false);
                if(this.allarea[0].has==true){
                  if(this.allarea[0].num==this.allarea[2].num){
                    this.move(0,2,true);
                  }else{
                    this.move(0,1,true);
                  }
                }
              }
            }else{
              if(this.allarea[0].has==true){
                if(this.allarea[0].num==this.allarea[3].num){
                  this.move(0,3,true);
                }else{
                  this.move(0,2,false);
                }
              };
            }
          }
        }else{
          if(this.allarea[2].has==true){
            this.move(2,3,false);
            if(this.allarea[1].has==true){
              if(this.allarea[1].num==this.allarea[3].num){
                this.move(1,3,true);
                if(this.allarea[0].has==true){
                  this.move(0,2,false);
                };
              }else{
                this.move(1,2,false);
                if(this.allarea[0].has==true){
                  if(this.allarea[0].num==this.allarea[2].num){
                    this.move(0,2,true);
                  }else{
                    this.move(0,1,false);
                  }
                };
              }
            }else{
              if(this.allarea[0].has==true){
                if(this.allarea[0].num==this.allarea[3].num){
                  this.move(0,3,true);
                }else{
                  this.move(0,2,false);
                }
              };
            }
          }else{
            if(this.allarea[1].has==true){
              this.move(1,3,false);
              if(this.allarea[0].has==true){
                if(this.allarea[0].num==this.allarea[3].num){
                  this.move(0,3,true);
                }else{
                  this.move(0,2,false);
                }
              };
            }else{
              if(this.allarea[0].has==true){
                this.move(0,3,false);
              }
            }
          }
        };

        if(this.allarea[7].has==true){
          if(this.allarea[6].has==true){
            if(this.allarea[6].num==this.allarea[7].num){
              this.move(6,7,true);
              if(this.allarea[4].has==true&&this.allarea[5].has==true){
                if(this.allarea[4].num==this.allarea[5].num){
                  this.move(5,6,false);
                  this.move(4,6,true);
                }else{
                  this.move(5,6,false);
                  this.move(4,5,false);
                }
              }else if(this.allarea[4].has==true&&this.allarea[5].has==false){
                this.move(4,6,false);
              }else if(this.allarea[5].has==true&&this.allarea[4].has==false){
                this.move(5,6,false);
              }
            }else{
              if(this.allarea[5].has==true){
                if(this.allarea[5].num==this.allarea[6].num){
                  this.move(5,6,true);
                  if(this.allarea[4].has==true){
                    this.move(4,5,false);
                  }
                }else{
                  if(this.allarea[4].has==true){
                    if(this.allarea[4].num==this.allarea[5].num){
                      this.move(4,5,true);
                    };
                  };
                }
              }else{
                if(this.allarea[4].has==true){
                  if(this.allarea[4].num==this.allarea[6].num){
                    this.move(4,6,true);
                  }else{
                    this.move(4,5,false);
                  }
                };
              }
            }
          }else{
            if(this.allarea[5].has==true){
              if(this.allarea[5].num==this.allarea[7].num){
                this.move(5,7,true);
                if(this.allarea[4].has==true){
                  this.move(4,6,false);
                };
              }else{
                this.move(5,6,false);
                if(this.allarea[4].has==true){
                  if(this.allarea[4].num==this.allarea[6].num){
                    this.move(4,6,true);
                  }else{
                    this.move(4,5,true);
                  }
                }
              }
            }else{
              if(this.allarea[4].has==true){
                if(this.allarea[4].num==this.allarea[7].num){
                  this.move(4,7,true);
                }else{
                  this.move(4,6,false);
                }
              };
            }
          }
        }else{
          if(this.allarea[6].has==true){
            this.move(6,7,false);
            if(this.allarea[5].has==true){
              if(this.allarea[5].num==this.allarea[7].num){
                this.move(5,7,true);
                if(this.allarea[4].has==true){
                  this.move(4,6,false);
                };
              }else{
                this.move(5,6,false);
                if(this.allarea[4].has==true){
                  if(this.allarea[4].num==this.allarea[6].num){
                    this.move(4,6,true);
                  }else{
                    this.move(4,5,false);
                  }
                };
              }
            }else{
              if(this.allarea[4].has==true){
                if(this.allarea[4].num==this.allarea[7].num){
                  this.move(4,7,true);
                }else{
                  this.move(4,6,false);
                }
              };
            }
          }else{
            if(this.allarea[5].has==true){
              this.move(5,7,false);
              if(this.allarea[4].has==true){
                if(this.allarea[4].num==this.allarea[7].num){
                  this.move(4,7,true);
                }else{
                  this.move(4,6,false);
                }
              };
            }else{
              if(this.allarea[4].has==true){
                this.move(4,7,false);
              }
            }
          }
        };

        if(this.allarea[11].has==true){
          if(this.allarea[10].has==true){
            if(this.allarea[10].num==this.allarea[11].num){
              this.move(10,11,true);
              if(this.allarea[8].has==true&&this.allarea[9].has==true){
                if(this.allarea[8].num==this.allarea[9].num){
                  this.move(9,10,false);
                  this.move(8,10,true);
                }else{
                  this.move(9,10,false);
                  this.move(8,9,false);
                }
              }else if(this.allarea[8].has==true&&this.allarea[9].has==false){
                this.move(8,10,false);
              }else if(this.allarea[9].has==true&&this.allarea[8].has==false){
                this.move(9,10,false);
              }
            }else{
              if(this.allarea[9].has==true){
                if(this.allarea[9].num==this.allarea[10].num){
                  this.move(9,10,true);
                  if(this.allarea[8].has==true){
                    this.move(8,9,false);
                  }
                }else{
                  if(this.allarea[8].has==true){
                    if(this.allarea[8].num==this.allarea[9].num){
                      this.move(8,9,true);
                    };
                  };
                }
              }else{
                if(this.allarea[8].has==true){
                  if(this.allarea[8].num==this.allarea[90].num){
                    this.move(8,10,true);
                  }else{
                    this.move(8,9,false);
                  }
                };
              }
            }
          }else{
            if(this.allarea[9].has==true){
              if(this.allarea[9].num==this.allarea[11].num){
                this.move(9,11,true);
                if(this.allarea[8].has==true){
                  this.move(8,10,false);
                };
              }else{
                this.move(9,10,false);
                if(this.allarea[8].has==true){
                  if(this.allarea[8].num==this.allarea[10].num){
                    this.move(8,10,true);
                  }else{
                    this.move(8,9,true);
                  }
                }
              }
            }else{
              if(this.allarea[8].has==true){
                if(this.allarea[8].num==this.allarea[11].num){
                  this.move(8,11,true);
                }else{
                  this.move(8,10,false);
                }
              };
            }
          }
        }else{
          if(this.allarea[10].has==true){
            this.move(10,11,false);
            if(this.allarea[9].has==true){
              if(this.allarea[9].num==this.allarea[11].num){
                this.move(9,11,true);
                if(this.allarea[8].has==true){
                  this.move(8,10,false);
                };
              }else{
                this.move(9,10,false);
                if(this.allarea[8].has==true){
                  if(this.allarea[8].num==this.allarea[10].num){
                    this.move(8,10,true);
                  }else{
                    this.move(8,9,false);
                  }
                };
              }
            }else{
              if(this.allarea[8].has==true){
                if(this.allarea[8].num==this.allarea[11].num){
                  this.move(8,11,true);
                }else{
                  this.move(8,10,false);
                }
              };
            }
          }else{
            if(this.allarea[9].has==true){
              this.move(9,11,false);
              if(this.allarea[8].has==true){
                if(this.allarea[8].num==this.allarea[11].num){
                  this.move(8,11,true);
                }else{
                  this.move(8,10,false);
                }
              };
            }else{
              if(this.allarea[8].has==true){
                this.move(8,11,false);
              }
            }
          }
        };

        if(this.allarea[15].has==true){
          if(this.allarea[14].has==true){
            if(this.allarea[14].num==this.allarea[15].num){
              this.move(14,15,true);
              if(this.allarea[12].has==true&&this.allarea[13].has==true){
                if(this.allarea[12].num==this.allarea[13].num){
                  this.move(13,14,false);
                  this.move(12,14,true);
                }else{
                  this.move(13,14,false);
                  this.move(12,13,false);
                }
              }else if(this.allarea[12].has==true&&this.allarea[13].has==false){
                this.move(12,14,false);
              }else if(this.allarea[13].has==true&&this.allarea[12].has==false){
                this.move(13,14,false);
              }
            }else{
              if(this.allarea[13].has==true){
                if(this.allarea[13].num==this.allarea[14].num){
                  this.move(13,14,true);
                  if(this.allarea[12].has==true){
                    this.move(12,13,false);
                  }
                }else{
                  if(this.allarea[12].has==true){
                    if(this.allarea[12].num==this.allarea[13].num){
                      this.move(12,13,true);
                    };
                  };
                }
              }else{
                if(this.allarea[12].has==true){
                  if(this.allarea[12].num==this.allarea[14].num){
                    this.move(12,14,true);
                  }else{
                    this.move(12,13,false);
                  }
                };
              }
            }
          }else{
            if(this.allarea[13].has==true){
              if(this.allarea[13].num==this.allarea[15].num){
                this.move(13,15,true);
                if(this.allarea[12].has==true){
                  this.move(12,14,false);
                };
              }else{
                this.move(13,14,false);
                if(this.allarea[12].has==true){
                  if(this.allarea[12].num==this.allarea[14].num){
                    this.move(12,14,true);
                  }else{
                    this.move(12,13,true);
                  }
                }
              }
            }else{
              if(this.allarea[12].has==true){
                if(this.allarea[12].num==this.allarea[15].num){
                  this.move(12,15,true);
                }else{
                  this.move(12,14,false);
                }
              };
            }
          }
        }else{
          if(this.allarea[14].has==true){
            this.move(14,15,false);
            if(this.allarea[13].has==true){
              if(this.allarea[13].num==this.allarea[15].num){
                this.move(13,15,true);
                if(this.allarea[12].has==true){
                  this.move(12,14,false);
                };
              }else{
                this.move(13,14,false);
                if(this.allarea[12].has==true){
                  if(this.allarea[12].num==this.allarea[14].num){
                    this.move(12,14,true);
                  }else{
                    this.move(12,13,false);
                  }
                };
              }
            }else{
              if(this.allarea[12].has==true){
                if(this.allarea[12].num==this.allarea[15].num){
                  this.move(12,15,true);
                }else{
                  this.move(12,14,false);
                }
              };
            }
          }else{
            if(this.allarea[13].has==true){
              this.move(13,15,false);
              if(this.allarea[12].has==true){
                if(this.allarea[12].num==this.allarea[15].num){
                  this.move(12,15,true);
                }else{
                  this.move(12,14,false);
                }
              };
            }else{
              if(this.allarea[12].has==true){
                this.move(12,15,false);
              }
            }
          }
        };
      },
      toleft:function(){
        console.log('left')
      },
      tobottom:function(){
        console.log('bottom')
      },
      totop:function(){
        console.log('top')
      },
      getnewfangkuai:function(){
        var a=Math.random()*15;
        var b=Math.floor(a);
        var c=0;   /* 判断是否有至少一个空位,16代表没有 */
        while(this.allarea[b].has==true){		/* 寻找空的位置 */
        	if(this.allarea[b].id<15&&c!=16){
        		b+=1;
            c=c+1;
        	}else if(this.allarea[b].id==15&&c!=16){
        		b=0;
            c=c+1;
        	}else if(c==16){
            break;
          }
        };
        if(c!=16){
          this.allarea[b].num=2;
          this.allarea[b].has=true;
        }
      },
      move:function(start,end,add){
        var that=this;
        if(start==0&&end==1){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==1&&end==0){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==0&&end==2){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==2&&end==0){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==0&&end==3){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==3&&end==0){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==1&&end==2){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==2&&end==1){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==1&&end==3){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==3&&end==1){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==2&&end==3){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==3&&end==2){
          if(add==false){

          }else if(add==true){

          }
        };

        if(start==4&&end==5){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==5&&end==4){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==4&&end==6){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==6&&end==4){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==4&&end==7){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==7&&end==4){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==5&&end==6){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==6&&end==5){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==5&&end==7){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==7&&end==5){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==6&&end==7){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==7&&end==6){
          if(add==false){

          }else if(add==true){

          }
        };

        if(start==8&&end==9){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==9&&end==8){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==8&&end==10){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==10&&end==8){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==8&&end==11){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==11&&end==8){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==9&&end==10){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==10&&end==9){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==9&&end==11){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==11&&end==9){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==10&&end==11){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==11&&end==10){
          if(add==false){

          }else if(add==true){

          }
        };

        if(start==12&&end==13){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==13&&end==12){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==12&&end==14){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==14&&end==12){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==12&&end==15){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==15&&end==12){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==13&&end==14){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==14&&end==13){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==13&&end==15){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==15&&end==13){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==14&&end==15){
          if(add==false){

          }else if(add==true){

          }
        };
        if(start==15&&end==14){
          if(add==false){

          }else if(add==true){

          }
        };
      }
    },
    components:{
      pageHead,
      mainNav,
      mainCont
    },
    computed:{
      windowheight:function(){   /* 获取视窗高度 */
        return document.documentElement.clientHeight;
      },
      windowwidth:function(){    /* 获取视窗宽度 */
        return window.screen.width;
      }
    },
    mounted() {
      var that=this;
      that.getnewfangkuai();
      that.getnewfangkuai();
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .outest{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .allcont{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .outcont{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    border: #ce984b 1.875rem solid;
    border-radius: 30%;
    background-color: #392f1c;
    margin: 1.875rem;
  }
  .topcont{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 3.75rem;
    height: auto;
    position: relative;
  }
  .gamename{
    left: 2.5rem;
    font-size: 3.125rem;
    font-weight: 900;
    color: #28acd0;
    position: absolute;
  }
  .nowscore{
    position: absolute;
    right: 10rem;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #950d28;
    margin-top: 1.25rem;
  }
  .bestscore{
    position: absolute;
    right: 3.125rem;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #950d28;
    margin-top: 1.25rem;
  }
  .scorenum1{
    position: absolute;
    font-size: 1.5625rem;
    color: #F0C102;
    margin-top: 1.5625rem;
    right: 9.375rem;
  }
  .scorenum2{
    position: absolute;
    font-size: 1.5625rem;
    color: #F0C102;
    right: 2.5rem;
    margin-top: 1.5625rem;
  }
  .incont{
    margin: 2.8125rem;
    width: 18.75rem;
    height: 18.75rem;
    border: #625f58 0.25rem;
    border-style: inset;
    background-color: #fae596;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    cursor: pointer;
    position: relative;
  }
  .wangge{
    width: 4.5625rem;
    height: 4.5625rem;
    border: #d2bde0 0.0625rem solid;
  }
  .fangkuai{
    position: absolute;
    background-image: linear-gradient(to bottom, #f0c102, #fafa40, #f0c102);
    width: 4.5625rem;
    height: 4.5625rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .numtxt{
    color: #c5114a;
    font-weight: 600;
  }
  .v-enter-active, .v-leave-active{
    transition: all 7.2s;
  }
  .v-enter{
    transform: scale(0.1, 0.1);
  }
</style>
