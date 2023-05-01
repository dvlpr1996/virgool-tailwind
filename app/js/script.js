document.addEventListener('alpine:init', () => {
  Alpine.data('postsInfo', () => ({
    posts: [
      {
        author: 'نام نویسنده',
        avatar: './dist/img/avatar-1.png',
        postImage: './dist/img/bg-1.png',
        title: 'عنوان مقاله منتشر شده',
        text: 'خط اول از متن مقاله منتشر شده به عنوان پیش نمایش برای کاربران'
      },
      {
        author: 'نام نویسنده',
        avatar: './dist/img/avatar-2.png',
        postImage: './dist/img/bg-2.jpg',
        title: 'عنوان مقاله منتشر شده',
        text: 'خط اول از متن مقاله منتشر شده به عنوان پیش نمایش برای کاربران'
      },
      {
        author: 'نام نویسنده',
        avatar: './dist/img/avatar-3.png',
        postImage: './dist/img/bg-3.jpg',
        title: 'عنوان مقاله منتشر شده',
        text: 'خط اول از متن مقاله منتشر شده به عنوان پیش نمایش برای کاربران'
      },
      {
        author: 'نام نویسنده',
        avatar: './dist/img/avatar-4.png',
        postImage: './dist/img/bg-4.jpg',
        title: 'عنوان مقاله منتشر شده',
        text: 'خط اول از متن مقاله منتشر شده به عنوان پیش نمایش برای کاربران'
      },
      {
        author: 'نام نویسنده',
        avatar: './dist/img/avatar-1.png',
        postImage: './dist/img/bg-1.png',
        title: 'عنوان مقاله منتشر شده',
        text: 'خط اول از متن مقاله منتشر شده به عنوان پیش نمایش برای کاربران'
      },
    ],
    likeCounter() {
      return Math.floor(Math.random() * 100) + 1;
    },
    answerCounter() {
      return Math.floor(Math.random() * 50) + 1 + ' پاسخ';
    },
    counter() {
      return Math.floor(Math.random() * 200) + 1;
    }
  }));

  Alpine.data('postText', () => ({
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
  }));

  Alpine.data('randomPost', () => ({
    random() {
      return 'dist/img/bg-' + (Math.floor(Math.random() * 3) + 2) + '.jpg';
    }
  }));

  Alpine.data('search', () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));
});

window.addEventListener("load", () => {
  window.addEventListener("offline", () => {
    alert("You Appear To Be Offline Check Your Internet Connection");
  });
});

let side_bar = document.querySelector('#side-bar');

function scrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

if (side_bar) {
  side_bar.style.display = 'none';
  document.addEventListener('scroll', () => {
    let y = scrollTop();
    if (y > 150 && y < 1600) {
      side_bar.style.display = 'block';
    } else {
      side_bar.style.display = 'none';
    }
  });
}
