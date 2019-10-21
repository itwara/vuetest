<template>
	<div class="hello">
		hello {{name}}
		<!-- <slot name="intro" >
			只有在没有要分发的内容时才会显示。
		</slot> -->
	</div>
</template>
<script>
	export default{
		componentName:'wbHello',
		props:{
			name:{
				type:String,
				required:true,
				//default:'world',
				validator:function(value){
					/**
					 * 限长20
					 */
					// debugger;
					return value.length <= 20 && value.length > 0
				}
			}
		},
		name:'wbHello',
		created:function(){
			// console.info(this);
			// console.info('slots:',this.$slots.default);
		},
        watch:{
           'name':function(newV,oldV){
                console.info(newV);
            } 
        },
        creatime:new Date(),
	}
</script>