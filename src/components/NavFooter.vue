<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.mi.com/" target="_blank">小米官网</a><span>|</span>
            <a href="https://cn.vuejs.org/" target="_blank">Vue官网</a><span>|</span>
            <a href="https://reactjs.bootcss.com/" target="_blank">React官网</a><span>|</span>
            <a href="https://developers.weixin.qq.com/miniprogram/design/" target="_blank">微信小程序</a>
        </div>
        <div class="copyright">
            Copyright ©2021 <span class="domain">mi.futurefe.com</span> All Rights Reserved.
        </div>
    </div>
</template>

<script>
//底部footer组件
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: $colorD;
        font-size: $fontI;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
                margin-bottom: 13px;
                a{
                    color: $colorD;
                    display: inline-block;
                }
                span{
                    margin: 0 10px;
                }
                
        }
        .copyright{              
                .domain{
                    color: $colorA;
                }
            }
            
    }

</style>