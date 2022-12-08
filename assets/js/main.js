$(function(){
  //header
  gsap.from('.header .logo ', {
    yPercent: 150,
    duration: 2,
  })
  gsap.from('.header .gnb-list .gnb-item a', {
    yPercent: 150,
    stagger: 0.5,
    duration: 2,
  })

  //sc-visual
  gsap.from('.sc-visual .video video', {
    scale: 3,
    duration: 2,
  })

  $(".sc-visual .sc-title").splitText({ 'type':'letters' });

  gsap.from('.sc-visual .sc-title .letter-measure',1, {
    opacity: 0,
    stagger:0.1,
    rotate: 50,
    scale: 0.8,
    yPercent: 100,
    x: 'random(-500,500)',
    y: 'random(-500,500)',
    onComplete: function(){
      $('body').removeClass('hidden');
    }
  })
  $(window).scroll(function(){
    currt = $(this).scrollTop();
  
    if(currt >= 100) {
      gsap.to('.sc-visual .sc-title',{
        opacity: 0.2,
      })
    } else {
      gsap.to('.sc-visual .sc-title',{
        opacity: 1,
      })
    }
  })

  //sc-intro
  const introAni = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-intro',
      start: 'top top',
      end: '+=100%',
      pin: true,
    }
  })
  introAni
  .addLabel('a')
  .from('.sc-intro .sc-title strong span', {yPercent: 100, filter: 'blur(5px)', stagger: 0.2, duration: 1}, 'a')
  .from('.sc-intro .sub-title p span', {yPercent: 100, filter: 'blur(5px)', stagger: 0.2, duration: 1}, 'a+=1')

  //sc-works
  $('.work-item').each(function(i, el){
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 2,
      },
      filter: 'blur(5px)',
      opacity: 0,
    })
  })

  $('.work-item .img-box').each(function(i, el){
    gsap.from(el, {
      scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      end: 'bottom bottom',
      stagger: 0.5, 
      scrub: 2,
      },
      skewX: 10, 
    })
  })

  $('.work-item .img-box img').each(function(i, el){
    gsap.from(el, {
      scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      end: 'bottom bottom',
      stagger: 0.5, 
      scrub: 2,
      },
      scale: 1.3,
    })
  })

  $('.work-item .txt-box').each(function(i, el){
    child = $(this).find('span');

    gsap.from(child, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'bottom bottom',
      },
      stagger: 0.1,
      yPercent: 100,
    })
  })
  
  //sc-about
  const aboutAni = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-about',
      start: 'top top',
      end: '+=100%',
      pin: true,
    },
  })
  aboutAni
  .addLabel('a')
  .from('.sc-about .sc-title span',{opacity: 0, yPercent: 100},'a')
  .from('.sc-about .word-item .title span',{stagger: 0.2, yPercent: 100,filter: 'blur(5px)', opacity: 0}, 'a+=0.5')
  
  //footer
  const footerAni = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 3,
    },
  })
  footerAni
  .addLabel('a')
  .from('.footer .footer-wrap',{yPercent: 0}, 'a')
  .from('.footer .title-area span',{stagger: 0.1, yPercent: -100, opacity: 0}, 'a+=1')
  .from('.footer .social-area span',{stagger: 0.1, yPercent: 100, opacity: 0}, 'a+=1.4')
  .from('.footer .copy', {yPercent: 100, opacity: 0}, 'a+=1.8')
  
  $('.footer .title-area a').mouseover(function(e){
    e.preventDefault();
    gsap.to('.footer .title-area span', {
      stagger: 0.1,
      yPercent: -30,
    })
  })
  $('.footer .title-area a').mouseout(function(e){
    e.preventDefault();
    gsap.to('.footer .title-area span', {
      stagger: 0.1,
      yPercent: 0,
    })
  })
    
})

