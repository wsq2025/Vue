import Vue from 'vue'
import Vuex from 'vuex'
//import { stat } from 'fs';

Vue.use(Vuex)

let store = new Vuex.Store({
    state : {
        //存放数据
        carPanelData : [],
        IsMax : false,
        carShow : true
    },
    getters :{
        totleCount(state){
            let count = 0;
            state.carPanelData.forEach(goods => {
                count += goods.count;
            })
            return count;
        },

        totlePrice(state){
            let price = 0;
            state.carPanelData.forEach(goods => {
                price += goods.count * goods.price;
                
            })
            return price;
        }

    },
    mutations :{

        addCarpanelData(state,data){
            state.carShow = true;
            let bOff = true;
            state.carPanelData.forEach(goods => {
                if(goods.sku_id === data.info.sku_id){
                    if(goods.count < goods.limit_num){
                        goods.count +=data.count;
                   }
                   else
                   {
                       state.IsMax = true;
                   }
                   bOff = false;
                }
            });
            if(bOff){
                let goodsData = data.info ;
                Vue.set(goodsData,'count',data.count);
                state.carPanelData.push(goodsData);
            }
            //console.log(state.carPanelData);
        },
        delCarpanelData(state,id){
            state.carPanelData.forEach((goods,index) => {
                if(goods.sku_id === id){
                    state.carPanelData.splice(index,1);
                }
            });
            //console.log(state.carPanelData);
        },
        winclose(state){
            state.IsMax = false;
        },
        Showcar(state){
            state.carShow = true;
        },
        Hidecar(state){
            state.carShow = false;
        }
    }
});
export default store;