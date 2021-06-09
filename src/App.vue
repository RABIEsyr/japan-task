<template>
  <div id="app" >
    <!-- <div style="
      background-color:#67AEF9;
      width: 100%;
      height: 100%;">
      <div 
    style="
    width: 60%;
    height: 100%;
    color: #67AEF9;
    background-color: #006EBB; 
    border-top-right-radius: 30em 50em;
    
    ">
    <span style="margin-left: 300px; color: white">Facebookページ向けチャットボット</span>
    <div>
      <img src="./assets/pagelogo.png" alt="">
    </div>
    <div>
      <img src="./assets/phone.png" alt="">
    </div>
    
    </div>
          

    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  /* height: 100vh; */
}
:root {

/* Colors: */
--unnamed-color-707070: #707070;
--unnamed-color-67aef9: #67AEF9;
--unnamed-color-fdd30c: #FDD30C;
--unnamed-color-006ebb: #006EBB;
--unnamed-color-fedb35: #FEDB35;
--unnamed-color-333333: #333333;
--unnamed-color-ffffff: #FFFFFF;

/* Font/text values */
--unnamed-font-family-source-han-sans-jp: Source Han Sans JP;
--unnamed-font-style-normal: normal;
--unnamed-font-weight-bold: bold;
--unnamed-font-weight-normal: normal;
--unnamed-font-size-16: 16px;
--unnamed-font-size-32: 32px;
--unnamed-character-spacing-0: 0px;
--unnamed-line-spacing-28: 28px;
--unnamed-line-spacing-46: 46px;
}

/* Character Styles */
.title {
font-family: var(--unnamed-font-family-source-han-sans-jp);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-bold);
font-size: var(--unnamed-font-size-32);
line-height: var(--unnamed-line-spacing-46);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-333333);
}
.p {
font-family: var(--unnamed-font-family-source-han-sans-jp);
font-style: var(--unnamed-font-style-normal);
font-weight: var(--unnamed-font-weight-normal);
font-size: var(--unnamed-font-size-16);
line-height: var(--unnamed-line-spacing-28);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-333333);
}
</style>
