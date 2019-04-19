<template>
    <div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="javascript:;"></a>
					</h1>
					<ul class="nav-aside">
						<li class="nav-user">
							<a href="javascript:;">个人中心</a>
							<!--active-->
							<div class="nav-user-wrapper">
								<div class="nav-user-list">
									<dl class="nav-user-avatar">
										<dd><span class="ng-scope"></span></dd>
										<dt class="ng-binding">+86 138****9453</dt>
									</dl>
									<ul>
										<li class="order"><a href="javascript:;">我的订单</a></li>
										<li class="support"><a href="javascript:;">售后服务</a></li>
										<li class="coupon"><a href="javascript:;">我的优惠</a></li>
										<li class="information"><a href="javascript:;">账户资料</a></li>
										<li class="address"><a href="javascript:;">收货地址</a></li>
										<li class="logout"><a href="javascript:;">退出</a></li>
									</ul>
								</div>
							</div>
						</li>
						<!--active-->
						<carPanel></carPanel>
					</ul>
					<ul class="nav-list">
						<li><a href="javascript:;">在线商城</a></li>
						<li><a href="javascript:;">坚果 Pro</a></li>
						<li><a href="javascript:;">Smartisan M1 / M1L</a></li>
						<li><a href="javascript:;">Smartisan OS</a></li>
						<li><a href="javascript:;">欢喜云</a></li>
						<li><a href="javascript:;">应用下载</a></li>
						<li><a href="javascript:;">官方论坛</a></li>
					</ul>
				</div>
			</div>
			<div class="nav-sub " :class="{active:isActive}">
				<div class="nav-sub-wrapper">
					<div class="container">
						<ul class="nav-list">
							<li><router-link to='/Home'>首页</router-link></li>
							<li @mouseover="add" @mouseout="del"><router-link to=''>手机</router-link></li>
							<li><router-link to="/PageOne">“足迹系列”手感膜</router-link></li>
							<li class="active"><router-link to="/Shop">官方配件</router-link></li>
							<li><router-link to="/PageTwo">周边产品</router-link></li>
							<li><router-link to="/PageThree">第三方配件</router-link></li>
							<li><router-link to="/PageFour">全部商品</router-link></li>
							<li><router-link to="/PageFive">服务</router-link></li>
						</ul>
					</div>
				</div>
				<phone></phone>
				<!-- 手机 -->
				<!-- <div  class="nav-goods-panel ">
						<ul  class="nav-goods-list">
							
							<li  class="jianguopro2">
								<a  href="//www.smartisan.com/item/1000351">
									<div  class="item-thumb">
										<img  alt="" height="160" width="160" src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_160/format,webp"> </div>
									<div  class="item-name">坚果 Pro 2</div>
									
									<div  class="item-price">¥ 1,799.00 起</div>
									
								</a>
							</li>
							<li  class="jianguopro">
								<a  href="//www.smartisan.com/item/1000273">
									<div  class="item-thumb">
										<img  alt="" height="160" width="160" src="https://resource.smartisan.com/resource/b68b71f1f97490fa8694a97057abd813.png?x-oss-process=image/resize,w_160/format,webp"> </div>
									<div  class="item-name">坚果 Pro</div>
									
									<div  class="item-price">¥ 1,299.00 起</div>
									
								</a>
							</li>
						</ul>
				</div>	 -->
			</div>
		</div>
</template>
<script>
import carPanel from './car-panel.vue'
import phone from './phone.vue'
export default {
	data(){
		return{
             isActive : false
		}
		
	},
	methods : {
		add :function(){
			console.log(this.isActive);
			this.isActive = true;
		},
		del : function(){
			this.isActive = false;
		}
	},
    components:{
		carPanel,
		phone
    }
}
</script>
<style>

</style>


