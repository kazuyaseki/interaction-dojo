(function($) {
  var wh = window.innerHeight,
    $iphone = $('.iphone'),
    $innerS1 = $('.innerS1'),
    $innerS2 = $('.innerS2'),
    $innerS3 = $('.innerS3'),
    $innerS4 = $('.innerS4'),
    $screenHat = $('.screenHat'),
    $screenA = $('.screenA'),
    $screenB = $('.screenB'),
    $screenC = $('.screenC');

  // init
  var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave' // 動作の開始位置(フックの要素と相対的に)他にonEnterとかがある
    }
  });

  const duration = '300%';

  // Create scene
  $('section').each(function() {
    new ScrollMagic.Scene({
      triggerElement: this,
      duration // これによりviewportの50％の高さ分スクロールされるまで要素がピン留めされる
    })
      .setPin(this)
      .addTo(ctrl);
  });

  // iPhone を左上にごにょっと動かすのと、最初のテキストをうっすら消す
  // iPhoneはアニメーションが始まると元々CSSであった位置に戻る
  var iphoneIntroTl = new TimelineMax();
  iphoneIntroTl
    .from($iphone, 1, { yPercent: 50, xPercent: 150, ease: Power4.easeInOut })
    .to($innerS1, 0.5, { opacity: 0, yPercent: -5, scale: 2 }, '0');

  // iPhone
  new ScrollMagic.Scene({
    duration
  })
    .setTween(iphoneIntroTl)
    .triggerElement($('body')[0])
    .addTo(ctrl);

  // Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat
    .to($screenHat, 1, { yPercent: -50, ease: Power4.easeOut })
    .fromTo(
      $screenA,
      1,
      { yPercent: 20, autoAlpha: 0, scale: 0.8 },
      { yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut },
      '0'
    )
    .from($innerS2, 1, { autoAlpha: 0 }, '-=0.3');

  new ScrollMagic.Scene({
    offset: wh * 0.6,
    triggerElement: $('body')[0],
    duration
  })
    .setTween(iphoneContentHat)
    .addIndicators()
    .addTo(ctrl);

  // Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl
    .to($screenA, 0.3, { yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut })
    .fromTo(
      $screenB,
      1,
      { yPercent: 20, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }
    )
    .from($innerS3, 1, { autoAlpha: 0 }, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    duration
  })
    .setTween(iphoneContent1Tl)
    .addTo(ctrl);

  // Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl
    .to($screenB, 0.3, { yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut })
    .fromTo(
      $screenC,
      1,
      { yPercent: 20, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }
    )
    .from($innerS4, 1, { autoAlpha: 0 }, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS3 h2')[0],
    duration
  })
    .setTween(iphoneContent2Tl)
    .addTo(ctrl);
})(jQuery);
