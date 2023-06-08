const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
  
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1650) {
        upElem.classList.add('animated', 'fadeIn');
        upElem.classList.remove('fadeOut');
      } else {
        upElem.classList.add('fadeOut');
        upElem.classList.remove('fadeIn');
      }
    });



    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.9;

    links.forEach(link=>{
      link.addEventListener('click', function(e){
        e.preventDefault();

        let widhtTop= document.documentElement.scrollTop,
            hash = this.hash,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        
        function step (time){
          if(start === null){
            start = time;
          } 

          let progress = time- start,
              r = (toBlock < 0 ? Math.max(widhtTop - progress/speed,widhtTop + toBlock): Math.min(widhtTop + progress/speed,widhtTop + toBlock));

              document.documentElement.scrollTo(0,r);


              if(r != widhtTop + toBlock){
                requestAnimationFrame(step);
              } else {
                location.hash = hash; 
              }
        }



      });
    });    
    

    // Pure in scrolling
  
    // const calcScroll = () => {
    //   upElem.addEventListener('click', function(event) {
    //     event.preventDefault();
  
    //     const element = document.documentElement;
    //     const body = document.body;
    //     const hash = this.hash;
  
    //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  
    //     if (hash !== '') {
    //       let hashElement = document.querySelector(hash);
    //       let hashElementTop = 0;
  
    //       while (hashElement.offsetParent) {
    //         hashElementTop += hashElement.offsetTop;
    //         hashElement = hashElement.offsetParent;
    //       }
  
    //       hashElementTop = Math.round(hashElementTop);
    //       smoothScroll(scrollTop, hashElementTop, hash);
    //     }
    //   });
    // };
  
    // const smoothScroll = (from, to, hash) => {
    //   const timeInterval = 1;
    //   let prevScrollTop;
    //   let speed;
  
    //   if (to > from) {
    //     speed = 30;
    //   } else {
    //     speed = -30;
    //   }
  
    //   let move = setInterval(function() {
    //     const scrollTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);
  
    //     if (
    //       prevScrollTop === scrollTop ||
    //       (to > from && scrollTop >= to) ||
    //       (to < from && scrollTop <= to)
    //     ) {
    //       clearInterval(move);
    //       history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //     } else {
    //       document.body.scrollTop += speed;
    //       document.documentElement.scrollTop += speed;
    //       prevScrollTop = scrollTop;
    //     }
    //   }, timeInterval);
    // };
  
    // calcScroll();
  };
  
  export default scrolling;
  