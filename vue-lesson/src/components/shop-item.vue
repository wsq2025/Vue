<template>
    <div class="item" >
							<div>
								<div class="item-img"><img :alt="item.name_title" :src="item.sku_info[itemIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
								</div>
								<h6>{{item.name}}}</h6>
								<h3 >{{item.name_title}}}</h3>
								<div class="params-colors">
									<ul class="colors-list">
										<li v-for="(item,index) in item.sku_info">
                                            <a href="javascript:;" :title="item.spec_json.show_name" @click="tab(index)">
                                                <img :src="'http://img01.smartisanos.cn/'+item.spec_json.image+'/20X20.jpg'"></a></li>
									</ul>
								</div>
								<div class="item-btns clearfix">
									<span class="item-gray-btn"><router-link :to="{name : 'item',query:{itemId:item.sku_info[itemIndex].sku_id}}">查看详情</router-link> 
									</span><span class="item-blue-btn" @click="addCarpanelData(item.sku_info[itemIndex])">加入购物车 </span>
								</div>
								<div class="item-price clearfix">
									<i>¥</i><span>{{item.price}}</span>
								</div>
								<div class="discount-icon">false</div>
								<div class="item-cover">
									<router-link :to="{name : 'item',query:{itemId:item.sku_info[itemIndex].sku_id}}"></router-link>
								</div>
							</div>
						</div>
</template>
<script>
export default {
    data(){
        return {
        itemIndex : 0
        }
    },
    props : {
        item : Object
    },
    methods : {
        tab : function(index){
            this.itemIndex = index;
        },
        addCarpanelData(data){
			let itemData = {info:data,count:1};
            this.$store.commit('addCarpanelData',itemData);
        }
    }
}
</script>

