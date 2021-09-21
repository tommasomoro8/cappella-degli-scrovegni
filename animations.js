// animazioni intro e testo da 'opacity: 0' a 'opacity:1'

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".ani-top", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".ani-bottom", { y: "0%", duration: 1, stagger: 0.25, delay:0.3});
tl.fromTo('#home-button', {opacity: 0}, {opacity: 1, duration: 0.5});
