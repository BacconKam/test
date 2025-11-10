const btn = document.getElementById('start-btn');
const heart = document.getElementById('heart');
const message = document.getElementById('message');
const final = document.getElementById('final');
const lid = document.querySelector('.lid');

btn.addEventListener('click', () => {
  // Step 1: Fade button out
  btn.classList.add('fade-out');
  setTimeout(() => {
    btn.style.display = 'none';

    // Step 2: Show heart fade-in
    heart.classList.add('show');

    // Step 3: Simulate loading (fill heart)
    setTimeout(() => {
      heart.classList.add('fill');

      // Step 4: Show "I love you LILLY"
      setTimeout(() => {
        heart.style.display = 'none';
        message.classList.add('show');

        // Step 5: Show present animation
        setTimeout(() => {
          message.style.display = 'none';
          final.classList.add('show');

          // Step 6: Open lid
          setTimeout(() => {
            lid.classList.add('open');
          }, 1500);
        }, 2500);
      }, 3000);
    }, 2000);
  }, 500);
});
