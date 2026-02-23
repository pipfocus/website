document.documentElement.classList.add('js-enabled');

const screenshotPopup = document.querySelector('.screenshot-popup');
const screenshotStats = document.querySelector('.screenshot-stats');
const heroContent = document.querySelector('.hero-content');
const bgGlow = document.querySelector('.bg-glow');
const scrollProgress = document.getElementById('scrollProgress');
const cursorGlow = document.getElementById('cursorGlow');
const featureCards = document.querySelectorAll('.feature-card');
const pipIcon = document.getElementById('pipIcon');
const pipWrapper = document.getElementById('pipWrapper');
const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (!isMobile && pipIcon && pipWrapper) {
  let pipTargetX = 0;
  let pipTargetY = 0;
  let pipCurrentX = 0;
  let pipCurrentY = 0;

  document.addEventListener('mousemove', (event) => {
    const rect = pipWrapper.getBoundingClientRect();
    const pipCenterX = rect.left + rect.width / 2;
    const pipCenterY = rect.top + rect.height / 2;

    const deltaX = (event.clientX - pipCenterX) / 40;
    const deltaY = (event.clientY - pipCenterY) / 40;

    pipTargetX = Math.max(-15, Math.min(15, deltaX));
    pipTargetY = Math.max(-15, Math.min(15, deltaY));
  });

  const animatePip = () => {
    pipCurrentX += (pipTargetX - pipCurrentX) * 0.08;
    pipCurrentY += (pipTargetY - pipCurrentY) * 0.08;

    pipIcon.style.transform = `translate(${pipCurrentX}px, ${pipCurrentY}px)`;
    requestAnimationFrame(animatePip);
  };

  animatePip();

  pipIcon.addEventListener('click', () => {
    pipIcon.style.animation = 'none';
    pipIcon.offsetHeight;
    pipIcon.style.animation = 'pipSpin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';

    setTimeout(() => {
      pipIcon.style.animation = 'pipFloat 4s ease-in-out infinite';
    }, 800);
  });
}

if (!isMobile && cursorGlow) {
  let cursorX = 0;
  let cursorY = 0;
  let glowX = 0;
  let glowY = 0;

  document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
  });

  const animateCursor = () => {
    glowX += (cursorX - glowX) * 0.1;
    glowY += (cursorY - glowY) * 0.1;
    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;
    requestAnimationFrame(animateCursor);
  };

  animateCursor();
}

if (!isMobile) {
  featureCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

const handleScroll = () => {
  const scrolled = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = Math.max(document.documentElement.scrollHeight - windowHeight, 1);

  if (scrollProgress) {
    const progress = Math.min((scrolled / docHeight) * 100, 100);
    scrollProgress.style.width = `${progress}%`;
  }

  if (!isMobile) {
    if (screenshotPopup) {
      const y1 = scrolled * -0.35;
      const rotate = -8 + scrolled * 0.01;
      screenshotPopup.style.transform = `translateY(${y1}px) rotateY(${rotate}deg) rotateX(2deg) scale(${1 - scrolled * 0.0002})`;
    }

    if (screenshotStats) {
      const y2 = scrolled * -0.2;
      const rotate = 5 - scrolled * 0.008;
      screenshotStats.style.transform = `translateY(${y2}px) rotateY(${rotate}deg) rotateX(-2deg) scale(${1 - scrolled * 0.0001})`;
    }
  }

  if (heroContent) {
    const y = scrolled * 0.15;
    const opacity = Math.max(1 - scrolled * 0.003, 0);
    heroContent.style.transform = `translateY(${y}px)`;
    heroContent.style.opacity = opacity;
    heroContent.style.filter = 'none';
  }

  if (bgGlow) {
    bgGlow.style.transform = `translateY(${scrolled * 0.05}px)`;
  }

  if (cursorGlow) {
    cursorGlow.style.opacity = Math.max(1 - scrolled * 0.002, 0);
  }

  document.querySelectorAll('.reveal').forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < windowHeight - 60) {
      setTimeout(
        () => {
          element.classList.add('visible');
        },
        element.classList.contains('feature-card') ? 0 : index * 50
      );
    }
  });
};

let ticking = false;
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

if (document.readyState === 'complete') {
  handleScroll();
} else {
  window.addEventListener('load', handleScroll);
}
