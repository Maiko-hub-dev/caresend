
// Swiperの初期化
 const swiper = new Swiper(".swiper", {
  
  loop: true, // ループ有効
  slidesPerView: 2, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
      disableOnInteraction: false,
  
      delay: 0, // 途切れなくループ
  },
  breakpoints: {
      767: {
          slidesPerView: 4, // スマホで2枚表示
          spaceBetween: 10,
      }
  }
});



function adjustSlideHeights() {
  const slides = document.querySelectorAll('.slide_case');
  let maxHeight = 0;

  // 最大の高さを取得
  slides.forEach(slide => {
    const slideContent = slide.querySelector('.slide_case');
    if (slideContent) {
      const height = slideContent.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    }
  });

  // 全スライドに最大高さを適用
  slides.forEach(slide => {
    const slideContent = slide.querySelector('.slide_case');
    if (slideContent) {
      slideContent.style.height = `${maxHeight}px`;
    }
  });
}

const mySwiper = new Swiper('.case-swiper', {
    autoHeight: false,
    loop: true, // ループさせたくない場合は false。必要なら true に。
    autoplay: false, // 自動再生しない
    speed: 500,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 任意：一度に1スライド表示
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 0,
    breakpoints: {
      768: { // タブレット以上
        slidesPerView: 'auto',
        slidesPerGroup: 2,
      }},
      on: {
        init: adjustSlideHeights,
        resize: adjustSlideHeights,
        slideChangeTransitionEnd: adjustSlideHeights
      },

  }
);
//  autoHeightを明示的に更新するなら、変数名に合わせて書く
mySwiper.on('slideChangeTransitionEnd', function () {
  mySwiper.updateAutoHeight(); //  変数名を一致させる
});


//アコーディオンをクリックした時の動作
$(document).ready(function() {
    $('.accordion__title, .accordion__door').click(function() {
      // アコーディオン（内容）の開閉    
    $(this).next('.accordion__answer').slideToggle(1000);
      // タイトルにopenクラスを付与または削除してプラスマイナス可変
      $(this).toggleClass("open",1000);
    });
  });
$(document).ready(function() {
    $('.accordion_question').click(function() {
      // アコーディオン（内容）の開閉    
    $(this).next('.accordion__answer').slideToggle(1000);
      // タイトルにopenクラスを付与または削除してプラスマイナス可変
      $(this).toggleClass("open",1000);
    });
});

// const target = document.querySelector('.main__hero--img.fade-block2.fade-block3.scroll-block.blockIn');
// if (target) {
//   const blockPosition = target.getBoundingClientRect().top + window.scrollY;
//   console.log('blockPosition:', blockPosition);
// } else {
//   console.warn('対象の要素が見つかりません');
// }

// 要素をふわっと表示させる
$(window).scroll(function() {
  // ↓複数のオブジェクトに対して繰り返し処理を行う
  $("#scroll-block").each(function() {
    var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
    let blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
    var windowHeight = $(window).height(); // ウィンドウの高さ
if (scroll > blockPosition - windowHeight + 300) {
      $(this).addClass("blockIn");
  }});
  });

//  クラスで動かす
$(window).on('scroll', function () {
  $('.scroll-block').each(function () {
    const scroll = $(window).scrollTop();
    const blockPosition = $(this).offset().top;
    const windowHeight = $(window).height();
    if (scroll > blockPosition - windowHeight + 100) {
      $(this).addClass('blockIn');
    }
  });
});


// フォームの入力チェック
$(document).ready(function () {
  const $submitBtn = $('#js-submit');
  $('#form input,#form textarea').on('change', function () {
      if (
          $('#form input[type="text"]').val() !== "" &&
          $('#form input[type="email"]').val() !== "" &&
          $('#form input[type="radio"]').val() !== "" 
      ) {
          $submitBtn.prop('disabled', false);
      } else {
          $('#js-submit').prop('disabled', true);
      }
  });
});

// ドロワーメニュー
$(function () {
  // ハンバーガーメニュー
  $(".js-hamberger, .js-grawer, .js-drawer a").click(function () {
      $(this).toggleClass("is-active");
      $(".sp-nav").toggleClass("is-active");
      $(".sp-nav").fadeIn(300); // ふわっと表示
    });
    $(".js-drawer a").click(function() {
        $(".js-hamberger").removeClass("is-active");
        $(".sp-nav").removeClass("is-active");
        $(".sp-nav").fadeOut(300); // ふわっと非表示
  });
});

//  テキストが15文字以上になった場合に「…（省略記号）」でカットされるCSS の実装
const elems = document.querySelectorAll('.blog-text');
elems.forEach(el => {
  const text = el.textContent;
  if (text.length > 15) {
    el.textContent = text.slice(0, 15) + '...';
  }
});
    
// スクロールしたらヘッダー追従
$(window).on("scroll", function () {
  // ファーストビューの高さを取得
  mvHeight = $(".js-main").height();
  if ($(window).scrollTop() > mvHeight) {
    // スクロールの位置がファーストビューより下の場合にclassを付与
    $(".header").addClass("header-scroll");
  } else {
    // スクロールの位置がファーストビューより上の場合にclassを外す
    $(".header").removeClass("header-scroll");
  }
});
