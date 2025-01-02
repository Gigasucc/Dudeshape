document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".block_invisable"); 

  function checkVisibility() {
    const triggerBottom = (window.innerHeight / 5) * 3; 

    blocks.forEach((block) => {
      const blockTop = block.getBoundingClientRect().top;

      if (blockTop < triggerBottom) {
        block.classList.add("visable");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});
