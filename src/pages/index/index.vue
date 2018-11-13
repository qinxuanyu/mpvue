<template>
	<div class="index">
		<swiper>
			<swiper-item>
				<image src="" class="slide-image" width="355" height="150"/>
			</swiper-item>
		</swiper>
		<mp-grid-group>
			<mp-grid
				icon-src=""
				label="Grid"
			/>
			<mp-grid
				icon-src=""
				label="Grid"
			/>
		</mp-grid-group>
		<ul class="list">
			<li>
				<p class="title">下啊啊啊</p>
				<div class="img-wrap">
					<img src="" alt="">
					<img src="" alt="" class="icon">
				</div>
				<div class="num">
					<div class="item">
						<img src="" alt="">
						<span>10</span>
					</div>
					<div class="item">
						<img src="" alt="">
						<span>20</span>
					</div>
				</div>
				<!-- <p class="content">植物是生命的主要形态之一，包含了如树木、灌木、藤类、青
草、蕨类、及绿藻、地衣等熟悉的生物。种子植物有包含了</p> -->
			</li>
		</ul>
	</div>
</template>

<script>
import card from '@/components/card'
import api from "@/js/api"
import MpGrid from 'mp-weui/packages/grid'
import mpGridGroup from 'mp-weui/packages/grid-group';
export default {
	data () {
		return {
			index:1,
			imgUrls: [
				'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
				'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
				'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
			],
			motto: 'Hello World',
			userInfo: {},
			html:'<p>1.测试 测试测试测试测试测试测试测试测试测试测试测试测试 （）<img src="http://14.116.153.17:8085/cdn/4fe19648-1682-4935-b647-e244d5a0b5cd.png" style="max-width: 100%;"></p><p>A.测试测试测试测试测试测试</p><p>B.测试测试测试测试测试测试</p><p>C.测试测试测试测试测试测试</p><p>D.测试测试测试测试测试测试</p><p><br></p>'
		}
	},
	components:{
		MpGrid,
		mpGridGroup
	}

 
}
</script>

<style  lang="less">
	.index{
		.weui-grids{
			border: 0 !important;
			.weui-grid{
				border: 0 !important;
			}
		}
		.list{
			font-size: 26rpx;
			li{
				padding: 20rpx;
				.title{
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.img-wrap{
					width: 710rpx;
					height: 340rpx;
					border-radius: 5px;
					overflow: hidden;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					.icon{
						width: 62rpx;
						height: 62rpx;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50% 50%);
					}
				}
				.num{
					display: flex;
					justify-content: flex-end;
					.item{
						display: flex;
						align-items: center;
						img{
							width: 30rpx;
							height: 30rpx;
						}
					}
				}
				// .content{
				// 	display: -webkit-box;
				// 	-webkit-box-orient: vertical;
				// 	-webkit-line-clamp: 2;
				// 	overflow: hidden;
				// }
			}

		}
	}
</style>
