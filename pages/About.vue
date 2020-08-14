<template>
  <article id="about">
    <page-title>About</page-title>
    <div class="json">
      <section>
        <h2><span class="function">export</span> <span class="reserved">const</span> <span class="const">Information</span> {</h2>
        <ul>
          <li><span class="variable">Name:</span> <span class="string">'Shin Yongjun'</span>,</li>
          <li><span class="variable">Job:</span> <span class="string">'Frontend Developer'</span>,</li>
          <li><span class="variable">Birth:</span> <span class="string">'1991. 11. 11'</span>,</li>
          <li><span class="variable">E-mail:</span> <span class="string">'shinyj1991@gmail.com'</span>,</li>
          <li><span class="variable">Location:</span> <span class="string">'Seoul'</span>,</li>
          <li><span class="variable">Hobby:</span> [<span class="string">'Guitar playing'</span>, <span class="string">'Planning'</span>],</li>
          <li><span class="variable">Favorite:</span> [<span class="string">'Cake'</span>, <span class="string">'Movie'</span>, <span class="string">'Home'</span>]</li>
        </ul>
        <p>}</p>
      </section>
      <section>
        <h2><span class="function">export</span> <span class="reserved">const</span> <span class="const">Career</span> {</h2>
        <ul>
          <li><span class="variable">Newborn Holdings</span>: {
            <ul>
              <li><span class="variable">Period:</span> <span class="string">'2019. 02 ~ Now'</span>,</li>
              <li><span class="variable">task:</span> <span class="string">'Front-end'</span></li>
            </ul>
          },</li>
          <li><span class="variable">Free-lancer</span>: {
            <ul>
              <li><span class="variable">Period:</span> <span class="string">'2018. 09 ~ 2019. 01 (5m)'</span>,</li>
              <li><span class="variable">task:</span> <span class="string">'Web-publishing'</span></li>
            </ul>
          },</li>
          <li><span class="variable">Newriver</span>: {
            <ul>
              <li><span class="variable">Period:</span> <span class="string">'2015. 04 ~ 2018. 08 (3y 5m)'</span>,</li>
              <li><span class="variable">task:</span> <span class="string">'Web-publishing'</span></li>
            </ul>
          },</li>
          <li><span class="variable">Megacoding</span>: {
            <ul>
              <li><span class="variable">Period:</span> <span class="string">'2014. 02 ~ 2015. 03 (1y 2m)'</span>,</li>
              <li><span class="variable">task:</span> <span class="string">'Web-publishing'</span></li>
            </ul>
          },</li>
          <li><span class="variable">Wise C&amp;S</span>: {
            <ul>
              <li><span class="variable">Period:</span> <span class="string">'2013. 10 ~ 2014. 01 (4m)'</span>,</li>
              <li><span class="variable">task:</span> <span class="string">'Table-coding'</span></li>
            </ul>
          }</li>
        </ul>
        <p>}</p>
      </section>
    </div>
  </article>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="scss">
#about {padding: 50px;
  .json {padding: 0 0; font-family: Consolas, 'Courier New', monospace; line-height: 1.8; font-size: 14px; letter-spacing: 0;
    .string {color: #ce9178;}
    .function {color: #c586c0;}
    .reserved {color: #569cd6;}
    .variable {color: #9cdcfe;}
    .const {color: #dcdcaa;}
    section {margin: 36px 0 0;
      &:first-child {margin-top: 0;}
    }
    ul {padding: 0 0 0 36px;}
  }
}

@media screen and (max-width: 750px) {
  #about {
    .json {font-size: 24px;}
  }
}
</style>